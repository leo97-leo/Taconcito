import React from 'react';
import {
  Typography, Box, Container
} from "@mui/material";
import { MenuList } from '../data/EspecialidadesData';
import MenuCard from "../components/MenuCard/EspecialidadeCard"; 

function Especialidades() {
  return (
    
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 900,
            fontFamily: '"Times New Roman", serif',
            mt: 6,
            fontSize: {
              xs: 'max(5vw, 32px)',
              sm: 'max(3.8vw, 34px)',
              md: 'max(4vw, 40px)',
              lg: 'max(3vw, 44px)',
            },
          }}
        >
          ESPECIALIDADES
        </Typography>

        <Box 
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            placeItems: 'center',
            gap: 2,
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: '30px',
          }}
        >
          {MenuList.map((menu, index) => (
            <MenuCard key={index} menu={menu} />
          ))}
        </Box>
      </Container>
    
  );
}

export default Especialidades;
