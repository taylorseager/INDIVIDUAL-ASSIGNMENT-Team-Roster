import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ background: 'black', color: 'white' }}>Welcome to the Team Roster!</h1>
      <p style={{ background: 'black', color: 'white' }}>Click the button below to login!</p>
      <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
        Let&#39;s Go Preds!
      </Button>
    </div>
  );
}

export default Signin;
