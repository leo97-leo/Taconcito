import { Card, CardActionArea, CardContent, Typography, Box } from "@mui/material";

const colors = {
  fondoOscuro: "#8C1025",
  textoClaro: "#fbead1",
  bordeSuave: "#661923",
  acento: "#d4af37",
};

function MenuCard({ menu, onClick }) {
  return (
    <Card
      onClick={onClick}
      sx={{
        width: {
          xs: 280,
          sm: 310,
          md: 300,
          lg: 300,
        },
        height: 350,
        p: 1.5,
        mb: 2,
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mx: "auto",
        backgroundColor: colors.fondoOscuro,
        color: colors.textoClaro,
        border: `2px solid ${colors.bordeSuave}`,
        boxShadow: `0 4px 8px ${colors.bordeSuave}`,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: `0 6px 16px ${colors.acento}`,
        },
      }}
    >
      <CardActionArea sx={{ height: "100%" }}>
        <Box
          sx={{
            backgroundColor: colors.bordeSuave,
            padding: ".5em",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70%",
          }}
        >
          <img
            src={menu.image}
            alt={menu.name}
            style={{
              objectFit: "contain",
              maxHeight: "100%",
              maxWidth: "100%",
            }}
          />
        </Box>

        <CardContent
          sx={{
            height: "30%",
            px: 0,
            py: 0.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontFamily: "Times New Roman",
              fontSize: {
                xs: "clamp(18px, 4vw, 24px)",
                sm: "clamp(19px, 3.2vw, 22px)",
                md: "clamp(16px, 2.6vw, 24px)",
                lg: "clamp(20px, 1.8vw, 32px)",
              },
              textAlign: "center",
              lineHeight: 1.2,
              color: colors.textoClaro,
            }}
          >
            {menu.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MenuCard;
