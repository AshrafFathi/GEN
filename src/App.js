import React from 'react';
import Table from './Table';
import Favicon from 'react-favicon';


function App() {
  return (
    <div className="wrapper">
      <div className="container">
      <div>
      <Favicon url="faviconWTF.ico" />
    </div>
        <h1>Global Emergency Numbers</h1>
        <Table/>
        <p>For suggestions please infom us at this.email</p>
      </div>
    </div>
  );
}

export default App;
