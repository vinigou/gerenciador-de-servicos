import React, { useState, useEffect } from 'react';

const ServiceForm = ({ addService, currentService, updateService, setCurrentService }) => {
  const [service, setService] = useState({ name: '', description: '' });

  useEffect(() => {
    if (currentService.id) {
      setService(currentService);
    }
  }, [currentService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentService.id) {
      updateService(service);
    } else {
      addService(service);
    }
    setService({ name: '', description: '' });
    setCurrentService({ id: null, name: '', description: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        name="name"
        placeholder="Nome do Serviço"
        value={service.name}
        onChange={handleChange}
        required
      />
      <br></br>
      <textarea
        type="text"
        name="description"
        placeholder="Descrição do Serviço"
        value={service.description}
        onChange={handleChange}
        required
      />
      <br></br>
      <button type="submit">{currentService.id ? 'Atualizar' : 'Adicionar'} Serviço</button>
    </form>
  );
};

export default ServiceForm;
