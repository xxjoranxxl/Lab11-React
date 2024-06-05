// src/Tarea.js
import React, { useState } from 'react';
import { ListItem, Checkbox, TextField, IconButton } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon, Save as SaveIcon } from '@mui/icons-material';

function Tarea({ tarea, onDelete, onEdit, completada, onToggleCompletada }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <ListItem sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Checkbox checked={completada} onChange={onToggleCompletada} />
      {isEditing ? (
        <>
          <TextField
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            fullWidth
          />
          <IconButton onClick={handleSaveClick}>
            <SaveIcon />
          </IconButton>
        </>
      ) : (
        <>
          <span style={{ textDecoration: completada ? 'line-through' : 'none' }}>
            {tarea}
          </span>
          <IconButton onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={handleEditClick}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </ListItem>
  );
}

export default Tarea;
