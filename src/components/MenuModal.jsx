import { useEffect, useRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const colors = {
  fondoPrincipal: "#720026",
  fondoOscuro: "#430014",
  textoClaro: "#fbead1",
  acento: "#d4af37",
  precio: "#D84315",
};

const textStyle = {
  fontFamily: "Times New Roman, serif",
  fontWeight: 600,
  color: colors.textoClaro,
  fontSize: {
    xs: "clamp(14px, 3vw, 16px)",
    sm: "clamp(15px, 2.5vw, 18px)",
    md: "clamp(16px, 2vw, 20px)",
    lg: "clamp(17px, 1.5vw, 22px)",
  },
};

const textName = {
  fontFamily: "Times New Roman, serif",
  fontWeight: 900,
  color: colors.textoClaro,
  fontSize: {
    xs: "clamp(18px, 4vw, 24px)",
    sm: "clamp(20px, 3.5vw, 26px)",
    md: "clamp(21px, 2.8vw, 30px)",
    lg: "clamp(22px, 2.2vw, 34px)",
  },
};

const textDescription = {
  textAlign: "center",
  fontFamily: "Times New Roman, serif",
  fontWeight: 500,
  color: colors.textoClaro,
  mb: 2,
  fontSize: {
    xs: "clamp(14px, 4vw, 22px)",
    sm: "clamp(15px, 2.5vw, 22px)",
    md: "clamp(16px, 2vw, 24px)",
    lg: "clamp(18px, 1.6vw, 26px)",
  },
};

function MenuModal({ open, onClose, categoria, triggerRef }) {
  const modalOpenedViaHistory = useRef(false);
  const firstElementRef = useRef(null);

  useEffect(() => {
    if (open) {
      if (!modalOpenedViaHistory.current) {
        window.history.pushState({ modal: true }, "");
        modalOpenedViaHistory.current = true;
      }
      setTimeout(() => {
        firstElementRef.current?.focus();
      }, 0);
    }

    const handlePopState = () => {
      if (open) {
        onClose();
        modalOpenedViaHistory.current = false;
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open && triggerRef?.current) {
      triggerRef.current.focus();
    }
  }, [open, triggerRef]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          backgroundColor: colors.fondoOscuro,
          color: colors.textoClaro,
        }
      }}
    >
      <DialogTitle
        sx={{
          ...textName,
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: colors.fondoPrincipal,
        }}
      >
        {categoria?.name}
        <IconButton onClick={onClose} sx={{ color: colors.textoClaro }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {categoria?.name !== "BEBIDAS" && (
  <Typography
    variant="h6"
    sx={{ ...textStyle, mb: 2, textAlign: 'center' }}
    tabIndex={-1}
    ref={firstElementRef}
  >
    INGREDIENTES
  </Typography>
)}

        {categoria?.descripcion && (
          <Typography variant="body2" sx={textDescription}>
            {categoria.descripcion}
          </Typography>
        )}

        {/* Mostrar items simples */}
        {Array.isArray(categoria?.items) && (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={textStyle}><strong>PLATILLO</strong></TableCell>
                <TableCell align="left" sx={textStyle}><strong>PRECIO</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categoria.items.map((item, i) => (
                <TableRow key={i}>
                  <TableCell sx={{ ...textStyle, fontWeight: 900 }}>
                    {item.nombre}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ ...textStyle, color: colors.acento }}
                  >
                    {item.precio}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}

        {/* Mostrar subcategorías si existen */}
        {Array.isArray(categoria?.subcategorias) && categoria.subcategorias.map((sub, index) => (
          <Box key={index} sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ ...textStyle, mb: 1, textAlign: 'center', color: colors.acento }}>
              {sub.titulo}
            </Typography>
            <Table>
              <TableBody>
                {sub.items.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell sx={{ ...textStyle, fontWeight: 900 }}>
                      {item.nombre}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ ...textStyle, color: colors.acento }}
                    >
                      {item.precio}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        ))}

      </DialogContent>
    </Dialog>
  );
}

export default MenuModal;
