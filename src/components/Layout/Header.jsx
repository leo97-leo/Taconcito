import { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "./Header.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // 🎨 Paleta de colores
  const colors = {
    background: "#770A1D",       // guinda
    backgroundDark: "#430014",   // borgoña oscuro
    text: "#fbead1",             // crema claro
    accent: "#d4af37",           // dorado
  };

  // 🧱 Drawer para móviles
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        height: "100%",
        textAlign: "center",
        backgroundImage: `linear-gradient(75deg, ${colors.backgroundDark}, ${colors.backgroundDark})`,
        color: colors.text,
      }}
    >
      <Box sx={{ my: 2 }}>
        <img style={{borderRadius:"15px"}} src={logo} alt="logo" height="220" width="200" />
      </Box>
      <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />
      <ul className="mobile-navigation">
        <li><NavLink to="/">MENÚ</NavLink></li>
        <li><NavLink to="/location">UBICACIÓN</NavLink></li>
      </ul>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* AppBar con degradado vino */}
      <AppBar
        component="nav"
        sx={{
          backgroundImage: `linear-gradient(75deg, ${colors.background}, ${colors.backgroundDark})`,
          color: colors.text,
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ fontSize: "30px", color: colors.accent }} />
          </IconButton>

          <Box sx={{ flexGrow: 1 }}>
            <img src={logo} alt="logo" height="50" width="100" />
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation-menu">
              <li><NavLink to="/">MENÚ</NavLink></li>
              <li><NavLink to="/location">UBICACIÓN</NavLink></li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer responsive */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Espacio para compensar el AppBar */}
      <Toolbar />
      <Outlet />
    </Box>
  );
};

export default Header;
