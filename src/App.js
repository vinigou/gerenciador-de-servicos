import React, { useState } from 'react';
import ServiceForm from './components/ServiceForm';
import ServiceList from './components/ServiceList';
import './App.css';

const App = () => {
  const [services, setServices] = useState([]);
  const [currentService, setCurrentService] = useState({ id: null, name: '', description: '' });

  const addService = (service) => {
    setServices([...services, { ...service, id: Date.now() }]);
  };

  const updateService = (updatedService) => {
    setServices(services.map(service => (service.id === updatedService.id ? updatedService : service)));
  };

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <body>
      <div className='Container'>
        <div className="App">
          <h1>Gerenciador de Serviços</h1>
          <ServiceForm
            addService={addService}
            currentService={currentService}
            updateService={updateService}
            setCurrentService={setCurrentService}
          />
          <ServiceList
            services={services}
            setCurrentService={setCurrentService}
            deleteService={deleteService}
          />
        </div>
        </div>
    </body>
  );
};

export default App;
