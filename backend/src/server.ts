import app from './app';

const port = Number(process.env.API_PORT);

app.listen(port, () => {
  console.log(`🚀 Server started on port! ${port}`);
});
