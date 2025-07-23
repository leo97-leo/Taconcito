import React from 'react';
import {
  Card, CardActionArea, CardContent, Typography, Box
} from "@mui/material";


const textStyle = {
  textAlign: "center",
  fontFamily: "Times New Roman",
  fontWeight: 500,
  fontSize: {
    xs: "max(4vw, 22px)",
    sm: "max(3.5vw, 20px)",
    md: "max(2.5vw, 18px)",
    lg: "max(1.6vw, 16px)",
  },
};

const colors = {
  fondoOscuro: "#8C1025",     // fondo vino tinto
  textoClaro: "#fbead1",      // texto claro crema
  bordeSuave: "#661923",      // borde oscuro
  acento: "#d4af37",          // dorado
};

function MenuCard({ menu }) {
  return (
    <Card
  sx={{
    maxWidth: {
      xs: 340,
      sm: 340,
      md: 320,
      lg: 320,
    },
    width: "100%",
    height: '95%',
    p: 1.5,
    mb: "20px",
    borderRadius: "20px",
    backgroundColor: colors.fondoOscuro,
    color: colors.textoClaro,
    
  }}
>

      <CardActionArea>
        {/* Imagen */}
        <Box
          sx={{
            backgroundColor: colors.bordeSuave,
            padding: ".5em",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: {
              xs: 280,   // 📱 más alto en móvil
              sm: 320,
              md: 300,
              lg: 240,   // 🖥 más bajo en pantallas grandes
            },
          }}
        >
          <img
            src={menu.image}
            alt={menu.name}
            style={{
              objectFit: "contain",
              maxHeight: "100%",
              maxWidth: "100%",
              borderRadius: "20px",
            }}
          />
        </Box>

        {/* Contenido */}
        <CardContent sx={{ px: 2, py: 1 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontFamily: "Times New Roman",
              textAlign: "center",
              fontSize: {
                xs: "max(5vw, 24px)",
                sm: "max(4vw, 22px)",
                md: "max(3vw, 20px)",
                lg: "max(2vw, 18px)",
              },
            }}
          >
            {menu.name}
          </Typography>
          <Typography variant="body2" sx={textStyle}>
            {menu.description}
          </Typography>
          <Typography variant="body1" sx={{ ...textStyle, fontWeight: 700 }}>
            {menu.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MenuCard;
