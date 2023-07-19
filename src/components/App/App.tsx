import React from 'react';
import { Route, Routes } from 'react-router-dom';



const App: React.FC = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={ <h1>HOME</h1>} />
        <Route path='/portfolio' element={ <h1>Portfolio</h1>} />
      </Routes>
     <h1>Hello world</h1>
    </div>
  );
}

export default App;
