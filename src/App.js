// src/App.js
import React, { useState } from 'react';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';
import { Container, Typography, Box, Button, ButtonGroup } from '@mui/material';

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("Todas");

  const agregarTarea = (texto) => {
    setTareas([...tareas, { texto, completada: false, fecha: new Date() }]);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const editarTarea = (index, nuevoTexto) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].texto = nuevoTexto;
    setTareas(nuevasTareas);
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const filtrarTareas = (filtro) => {
    setFiltro(filtro);
  };

  const ordenarTareasPorFecha = (orden) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.sort((a, b) => {
      if (orden === 'asc') {
        return a.fecha - b.fecha;
      } else {
        return b.fecha - a.fecha;
      }
    });
    setTareas(nuevasTareas);
  };

  let tareasFiltradas = tareas;
  if (filtro === "Pendientes") {
    tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
  } else if (filtro === "Completadas") {
    tareasFiltradas = tareas.filter((tarea) => tarea.completada);
  }

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Lista de Tareas
        </Typography>
        <TareaForm agregarTarea={agregarTarea} />
        <Filtros filtrarTareas={filtrarTareas} />
        <Box sx={{ my: 2 }}>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button onClick={() => ordenarTareasPorFecha('asc')}>Ordenar por Fecha Ascendente</Button>
            <Button onClick={() => ordenarTareasPorFecha('desc')}>Ordenar por Fecha Descendente</Button>
          </ButtonGroup>
        </Box>
        <ListaTareas
          tareas={tareasFiltradas}
          eliminarTarea={eliminarTarea}
          editarTarea={editarTarea}
          toggleCompletada={toggleCompletada}
        />
      </Box>
    </Container>
  );
}

export default App;
