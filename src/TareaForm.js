// src/TareaForm.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function TareaForm({ agregarTarea }) {
  const [texto, setTexto] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === "") {
      setError("La tarea no puede estar vacía");
      return;
    } else if (texto.length > 100) {
      setError("La tarea no puede tener más de 100 caracteres");
      return;
    }
    agregarTarea(texto);
    setTexto("");
    setError("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <TextField
        variant="outlined"
        placeholder="Añadir tarea..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        error={!!error}
        helperText={error}
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">Agregar Tarea</Button>
    </Box>
  );
}

export default TareaForm;
