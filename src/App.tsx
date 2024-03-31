import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthRoutes } from './routes';

function App() {
  return (
    <React.Fragment>
      <Routes>
        {AuthRoutes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
    </React.Fragment>
  );
}

export default App;
