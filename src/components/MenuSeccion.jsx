import React from 'react';
import { Box, Typography, Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const MenuSeccion = ({ name, descripcion, items }) => {
  return (
    <Box sx={{ px: 2, py: 4 }}>
      {/* Título de la sección */}
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        {name}
      </Typography>

      {/* Descripción general */}
      {descripcion && (
        <Typography variant="body1" align="center" sx={{ mb: 2, fontStyle: 'italic' }}>
          {descripcion}
        </Typography>
      )}

      {/* Una sola tarjeta con tabla */}
      <Card sx={{ maxWidth: 600, margin: '0 auto' }}>
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Platillo</strong></TableCell>
                <TableCell align="right"><strong>Precio</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.nombre}</TableCell>
                  <TableCell align="right">{item.precio}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MenuSeccion;
