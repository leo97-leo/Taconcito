import FacebookIcon from '@mui/icons-material/Facebook';
import { Box, Typography } from "@mui/material";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        textAlign: "center",
        background: "#430014",
        color: "white",
        px: 1,
        py: 1.5, // padding vertical reducido
      }}
    >
      {/* Redes Sociales */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 1,
          "& svg": {
            fontSize: "36px", // ícono más pequeño
            color: "white",
            cursor: "pointer",
            mx: 1,
          },
          "& svg:hover": {
            color: "goldenrod",
            transform: "translateY(-2px)",
            transition: "all 0.3s ease",
          },
        }}
      >
        <a
          href="https://www.facebook.com/share/1WB3aRZzcS/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>
      </Box>

      {/* Título */}
      <Typography
        variant="body1"
        sx={{
          fontWeight: "bold",
          fontFamily: "'Times New Roman', serif",
          fontSize: "0.9rem",
          mb: 0.5,
        }}
      >
        TAQUERIA EL TACONCITO
      </Typography>

      {/* Copyright */}
      <Typography
        sx={{
          fontSize: "0.75rem", // más pequeño
          fontFamily: "'Times New Roman', serif",
        }}
      >
        COPYRIGHT {currentYear} © TAQUERIA EL TACONCITO - TODOS LOS DERECHOS RESERVADOS
      </Typography>
    </Box>
  );
};

export default Footer;
