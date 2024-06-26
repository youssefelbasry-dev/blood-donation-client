import React, { useState } from 'react';
import Confetti from 'react-confetti';

const SuccessAlert = ({ message }) => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <button onClick={() => setShowAlert(true)}>Envoyer</button>
      {showAlert && (
        <div>
          <Confetti width={1500} height={900}/>
          <p>{message}</p>
        </div>
      )}
    </div>

  );
};

export default SuccessAlert;

