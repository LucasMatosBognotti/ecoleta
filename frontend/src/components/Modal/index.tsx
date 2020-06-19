import React from 'react';

import './styles.css';

import check from '../../assets/check.svg';

interface Props {
  className: string;
}

const Modal: React.FC<Props> = ({ className }) => {
  return (
    <div id="modal" className={className}>
      <div className="content">
        <img src={check} alt="Check"/>
        <h1>Cadastro concluido</h1>
      </div>
    </div>
  );
}

export default Modal;