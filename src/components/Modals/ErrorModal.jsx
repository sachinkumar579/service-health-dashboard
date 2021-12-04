import React from "react";
import Button from '../UI/Button.jsx'
import "./ErrorModal.css";
import Card from "../UI/Card.jsx";

const ErrorModal = (props) => {
  return (
    <div>
      <div className='backdrop'></div>
      <Card className='modal'>
        <header className='header'>
          <h2>{props.title}</h2>
        </header>
        <div className='content'>
          <p>{props.message}</p>
        </div>
        <footer className='actions'>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </ div >
  );
};

export default ErrorModal;
