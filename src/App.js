import React, { useState } from 'react';
import { msg } from './firebase';

import {Button, Row, Col, Toast} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  
  const [show, setShow] = useState(false);
  
  React.useEffect(() => {
    msg.getToken({vapidKey: "BKMinKB93CQ54PiYmXMfLh1Q-dCWNgyD6tx1fTlq1Lx85WlQkgV8Al-d7WTz2-CARsGODVVR4fFrCRBcHXvbp0M"})
        .then((currentToken) => {
          if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
          } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
          // ...
        });
        // BKMinKB93CQ54PiYmXMfLh1Q-dCWNgyD6tx1fTlq1Lx85WlQkgV8Al-d7WTz2-CARsGODVVR4fFrCRBcHXvbp0M
  }, []);

  return (
    <div>
      <h1>Test Message FireBase</h1>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{
          position: 'absolute',
          top: 20,
          right: 20,
        }}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Notification</strong>
            <small>12 mins ago</small>
          </Toast.Header>
          <Toast.Body>There are some new updates that you might love!</Toast.Body>
        </Toast>
      <header className="App-header">

        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </header>
    </div>
  );
}

export default App;
