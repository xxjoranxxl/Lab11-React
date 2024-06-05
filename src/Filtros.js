// src/Filtros.js
import React from 'react';
import { Button, ButtonGroup } from '@mui/material';

function Filtros({ filtrarTareas }) {
  return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
      <Button onClick={() => filtrarTareas("Todas")}>Todas</Button>
      <Button onClick={() => filtrarTareas("Pendientes")}>Pendientes</Button>
      <Button onClick={() => filtrarTareas("Completadas")}>Completadas</Button>
    </ButtonGroup>
  );
}

export default Filtros;
