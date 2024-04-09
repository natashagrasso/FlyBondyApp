
import React, { useState } from 'react';

const Formulario = ({ onSearch }) => { // se llama con el monto ingresado por el usuario
  const [montoInput, setMontoInput] = useState(''); //se inicializa como cadena vacia pq no se ingreso nada tdv

  const handleInputChange = (e) => {  //se activa cada vez q el usuario hace un cmbio (e)
    setMontoInput(e.target.value); 
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    onSearch(montoInput); //maneja la bsuqueda con el monto ingresasdo
  };

  return (
    <div className="mt-10"> {/* para q no se choque con el carrusel */}
      <form onSubmit={handleFormSubmit} className="flex flex-col items-center mb-4"> 
        <label htmlFor="monto" className="block mb-5 text-center text-4xl font-bold text-blue-500">Buscar viajes por precio:</label>

        <input type="number" id="monto" value={montoInput} onChange={handleInputChange} className="border border-gray-300 rounded px-4 py-2 mb-4 w-full max-w-md" placeholder="Ingrese el precio" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">Buscar</button>
      </form>
    </div>
  );
};

export default Formulario;