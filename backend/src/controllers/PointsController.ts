import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
  async create(req: Request, res: Response) {
    const { name, email, whatsapp, city, uf, latitude, longitude, items } = req.body;
    
    const trx = await knex.transaction();

    const point = { image: req.file.filename, name, email, whatsapp, city, uf, latitude, longitude };

    const insertedIds = await trx('points').insert(point);

    if (!insertedIds) {
      return res.status(404).json({ message: 'The point was not created' });
    }

    const point_id = insertedIds[0];

    //const typeRecycle = String(items).split(',').map(item => Number(item.trim()));

    // console.log(typeRecycle);

    const pointItems = String(items).split(',').map(item => Number(item.trim())).map((item_id: number) => {
      return {
        item_id,
        point_id,
      }
    });

    await trx('points_items').insert(pointItems);

    await trx.commit();

    return res.json({
      id: point_id,
      ...point,
    });

  }

  async index(req: Request, res: Response) {
    const { city, uf, items } = req.query;

    const parsedItems = String(items).split(',').map(item => Number(item.trim()));

    const datapoints = await knex('points')
      .join('points_items', 'points.id', '=', 'points_items.point_id')
      .whereIn('points_items.item_id', parsedItems)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('points.*');

    const points = datapoints.map(point => {
      return {
        ...point,
        image_url: `${process.env.API_URL}/tmp/${point.image}`
      }
    });

    return res.json(points);
    
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const datapoint = await knex('points').where('id', id).first();

    if (!datapoint) {
      return res.status(404).json({ message: 'Point not Found' });
    }

    const point = {
      ...datapoint,
      image_url: `${process.env.API_URL}/tmp/${datapoint.image}`
    }
    
    const items = await knex('items')
      .join('points_items', 'items.id', '=', 'points_items.item_id')
      .where('points_items.point_id', datapoint.id)
      .select('items.title');


    return res.json({point, items});
  }
}

export default PointsController;