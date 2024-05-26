import React from 'react';

const ServiceList = ({ services, setCurrentService, deleteService }) => {
  return (
    <div>
      <h2>Lista de Serviços</h2>
      {services.length === 0 ? (
        <p>Nenhum serviço cadastrado.</p>
      ) : (
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <button onClick={() => setCurrentService(service)}>Editar</button>
                <button className="DeleteButton" onClick={() => deleteService(service.id)}>Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceList;
