
import React, { useState, useEffect } from 'react';

const Destinos = ({ data, monto }) => { //la prop data tiene info de los vuelos y la prop monto de los precios
  const [filtrados, setFiltrados] = useState([]);  //filtrados segun el precio max
  const [mostrarMensaje, setMostrarMensaje] = useState(false); //inicializamos el mostrar mensaje en falso para qno apareza antes de q se ingrese un moton

  useEffect(() => {
    //filtra los vuelos disponibles en base al precioMax ingresado 
    const filtrarViajes = data.filter((vuelo) => vuelo.price <= parseFloat(monto)); 
    setFiltrados(filtrarViajes);
    setMostrarMensaje(filtrarViajes.length === 0 && monto !== '');// si no se encontraron vuelos que cumplan con el precio max, y se ingreso un monto
  }, [data, monto]);

  return (
    <div className="container mx-auto px-4">
      {mostrarMensaje && /* solo si es true muestra advertencia */ (
        <p className="text-center border-red-500 text-red-500 ">No se encontraron viajes disponibles con el monto ingresado.</p>
       
      )}
      <div className="grid grid-cols-3 gap-4">
        {filtrados.map((vuelo, index) => (
          <div className="border border-blue-500 rounded-lg shadow-lg px-6 py-4 flex flex-col items-center" key={index}>
            <h3 className="text-lg font-bold mb-4"> ✈️ VIAJE {index + 1} </h3> {/* incrementa en 1 el viaje  */}

            <p><b>📍 Origen: </b><span className="">{vuelo.origin}</span></p>
            <p><b>🏖️ Destino: </b><span className="">{vuelo.destination}</span></p>
            <p><b>💰 Precio: $</b><span className="">{vuelo.price}</span></p>
            <p><b>📅 Fecha: </b><span className="">{vuelo.data}</span></p>
            <p><b>✅ Disponibilidad: </b><span className="">{vuelo.availability}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinos;