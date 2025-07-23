import { Typography, Box, Grid, Paper } from "@mui/material";
import ScheduleIcon from '@mui/icons-material/Schedule';
import PlaceIcon from '@mui/icons-material/Place';

const Ubicacion = () => {
  const ubicaciones = [
    {
      direccion: "HIDALGO ESQUINA MOCTEZUMA, CENTRO.",
      mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.472265159756!2d-100.38769384326281!3d20.994860527356536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d4bb83233081fd%3A0x8237097094609388!2sTaquer%C3%ADa%20El%20Taconcito!5e0!3m2!1ses-419!2smx!4v1753281315786!5m2!1ses-419!2smx"
    },
    {
      direccion: "ENTRE HOSPITAL GENERAL Y LA RONDANA, SAN JOSÉ ITURBIDE GTO.",
      mapa: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d931.2638996650433!2d-100.3936065766228!3d20.99040831260189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1753282374189!5m2!1ses-419!2smx"
    }
  ];

  return (
    <Box sx={{ px: 2, py: 6, bgcolor: "#800020",  }}>
      <Typography
  variant="h4"
  align="center"
  sx={{
    fontWeight: 900,
    fontFamily: "Times New Roman",
    fontSize: { xs: "max(6vw, 30px)", sm: "max(5vw, 36px)", md: "max(4vw, 42px)" },
    mb: 4,
    color: "#ffffffff",
    textShadow: "1px 1px 2px rgba(0,0,0,0.2)", // sombra sutil
    letterSpacing: 1
  }}
>
  UBICACIÓN
</Typography>



      <Grid
  container
  spacing={4}
  justifyContent="center"     // 🔥 Centra todos los items en el eje horizontal
>
  {ubicaciones.map((item, index) => (
    <Grid
      item xs={12} lg={6}
      key={index}
      sx={{
        display: "flex",
        justifyContent: "center",  // 🔥 Centra cada tarjeta dentro del grid item
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 2,
          width: "100%",
          height: "80%",
          maxWidth: 400,              // 🔥 Tamaño uniforme
          display: "flex",
          flexDirection: "column",
          alignItems: "center",      // 🔥 Centra contenido interior
          textAlign: "center"
        }}
      >
        <Typography
          variant="h6"
          sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
        >
          <PlaceIcon color="error" /> {item.direccion}
        </Typography>

        <Box
          component="iframe"
          src={item.mapa}
          title={`mapa-${index}`}
          loading="lazy"
          allowFullScreen
          sx={{
            width: "100%",
            height: "300px",
            border: 0,
            borderRadius: 2,
          }}
        />
      </Paper>
    </Grid>
  ))}
</Grid>


      <Box mt={6} textAlign="center">
        <Paper elevation={2} sx={{ p: 3, maxWidth: 500, mx: "auto", border: "1px solid #ccc" }}>
          <Typography variant="h5" color="#800020" gutterBottom>
            Horario de servicio
          </Typography>
          <Typography variant="body1" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <ScheduleIcon /> Domingo a Jueves de 4:00 PM a 2:00 AM
          </Typography>
          <Typography variant="body1" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <ScheduleIcon /> Viernes y Sábado de 4:00 PM a 4:00 AM
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Ubicacion;
