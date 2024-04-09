
import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Destinos from './components/Destinos';
import datos from './data/dataset.json';

const App = () => {
  const [monto, setMonto] = useState('');

  const handleSearch = (monto) => {
    setMonto(monto);
  };

  return (
    <div>
      <Header />
      <Formulario onSearch={handleSearch} />
      <Destinos data={datos} monto={monto} />
    </div>
  );
};

export default App;
