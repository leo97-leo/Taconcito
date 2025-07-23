// src/data/MenuData.js

import orden from '../assets/Ordentacos.png';
import ordequeso from '../assets/Orbistecqueso.png';
import volcan from '../assets/Orbistecqueso.png';
import alambre from '../assets/Alambre.png';
import especial from '../assets/Carnesada.png';
import especialcas from '../assets/Fogon.png';
import gringa from '../assets/Gringa.png';
import quesadillas from '../assets/Quesadilla.png';
import sincronizadas from '../assets/Orbistecqueso.png';
import papa from '../assets/Papa.png';
import quesos from '../assets/QuesoFundido.png';
import tortas from '../assets/Torta.png';
import pastor from '../assets/Orbistecqueso.png';
import charro from '../assets/Orbistecqueso.png';
import horchata from '../assets/Orbistecqueso.png';
import carne from '../assets/Carne.png';

const menu = [
  {
    name: "TACOS DE PASTOR",
    image: pastor,
    descripcion: "Deliciosos tacos de pastor",
    items: [
      { nombre: "TACO DE PASTOR", precio: "$18" },
      { nombre: "TACOS DE PASTOR CON QUESO", precio: "$15" }
    ]
  },
  {
    name: "ORDEN DE TACOS",
    image: orden,
    descripcion: "Contiene cuatro tacos con papa asada, cebollitas y nopales.",
    items: [
      { nombre: "PASTOR", precio: "$65" },
      { nombre: "BISTEC (Res)", precio: "$65" },
      { nombre: "COSTILLA (Res)", precio: "$65" },
      { nombre: "CHULETA (Cerdo)", precio: "$65" },
      { nombre: "CHORIZO", precio: "$65" },
      { nombre: "SUADERO", precio: "$65" },
      { nombre: "ARRACHERRA", precio: "$125" },
      { nombre: "CAMPECHANA (Carne de bistec con chorizo)", precio: "$65" },
      { nombre: "VAQUERA (Carne de bistec con pastor)", precio: "$65" }
      
    ]
  },
  {
    name: "ORDEN DE TACOS CON QUESO",
    image: ordequeso,
   descripcion: "Contiene cuatro tacos con papa asada, cebollitas y nopales.",
    items: [
      { nombre: "PASTOR", precio: "$70" },
      { nombre: "BISTEC (Res)", precio: "$70" },
      { nombre: "COSTILLA (Res)", precio: "$70" },
      { nombre: "CHULETA (Cerdo)", precio: "$70" },
      { nombre: "CHORIZO", precio: "$70" },
      { nombre: "SUADERO", precio: "$70" },
      { nombre: "ARRACHERRA", precio: "$130" },
      { nombre: "CAMPECHANA (Carne de bistec con chorizo)", precio: "$70" },
      { nombre: "VAQUERA (Carne de bistec con pastor)", precio: "$70" }
    ]
  },
  {
    name: "ORDEN DE VOLCAN",
    image: volcan,
    descripcion: "Contiene cuatro tostadas, con queso y carne.",
    items: [
      { nombre: "PASTOR", precio: "$60" },
      { nombre: "BISTEC (Res)", precio: "$60" },
      { nombre: "COSTILLA (Res)", precio: "$60" },
      { nombre: "CHULETA (Cerdo)", precio: "$60" },
      { nombre: "CHORIZO", precio: "$60" },
      { nombre: "SUADERO", precio: "$60" },
      { nombre: "ARRACHERRA", precio: "$110" },
      { nombre: "CAMPECHANA (Carne de bistec con chorizo)", precio: "$60" },
      { nombre: "VAQUERA (Carne de bistec con pastor)", precio: "$60" }
    ]
  },
  {
    name: "ALAMBRES",
    image: alambre,
    descripcion: "Cebolla, chile morrón, tocino, carne y queso.",
    items: [
      { nombre: "BISTEC (Res)", precio: "$90" },
      { nombre: "CHULETA (Cerdo)", precio: "$90" },
      { nombre: "PASTOR", precio: "$90" },
      { nombre: "ARRACHERA", precio: "$145" },
      { nombre: "SUADERO", precio: "$90" },
      { nombre: "COSTILLA (Res)", precio: "$90" },
      { nombre: "HAWAIANO (Ingredientes:  Jamón, pastor, piña, cebolla, chile morrón, tocino y queso.)", precio: "$90" },
      { nombre: "COMBINADO (Ingredientes: Chuleta, pastor, cebolla, chile morrón, tocino y queso.)", precio: "$90" },
      { nombre: "ESPECIAL (Ingredientes: Chuleta, pastor, jamón, cebolla, chile morrón, tocino, piña,  y queso.)", precio: "$110" },
    ]
  },
  {
    name: "ESPECIALIDADES DE LA CASA",
    image: especialcas,
   
  },
  {
    name: "ESPECIALIDADES",
    image: especial,
    descripcion: "Carne asada servida por kilo o media.",
    items: [
      { nombre: "CHULETA DE RES ASADA", precio: "$130" },
      { nombre: "BISTEC DE RES", precio: "$130" },
      { nombre: "ARRACHERA ASADA", precio: "$160" },
      { nombre: "CHULETA DE CERDO", precio: "$130" },
    ]
  },
  {
    name: "GRINGAS",
    image: gringa,
    descripcion: "Tortilla de harina con queso y carne.",
    items: [
      { nombre: "PASTOR", precio: "$40" },
      { nombre: "BISTEC (Res)", precio: "$40" },
      { nombre: "COSTILLA (Res)", precio: "$40" },
      { nombre: "CHULETA", precio: "$40" },
      { nombre: "SUADERO", precio: "$40" },
      { nombre: "ARRACHERA", precio: "$75" },
      { nombre: "CAMPECHANA (Bistec con chorizo)", precio: "$40" },
      { nombre: "VAQUERA (Bistec con pastor)", precio: "$40" },
    ]
  },
  {
    name: "QUESADILLAS",
    image: quesadillas,
    descripcion: "Tortillas con queso y el guiso que prefieras.",
    items: [
      { nombre: "SENCILLA", precio: "$20" },
      { nombre: "PASTOR", precio: "$25" },
      { nombre: "BISTEC", precio: "$25" },
      { nombre: "COSTILLA", precio: "$25" },
      { nombre: "CHULETA", precio: "$25" },
      { nombre: "SUADERO", precio: "$25" },
      { nombre: "ARRACHERA", precio: "$25" },
    ]
  },
  {
    name: "SINCRONIZADAS",
    image: sincronizadas,
    descripcion: "Doble tortilla de harina con carne y queso.",
    items: [
      { nombre: "PASTOR", precio: "$55" },
      { nombre: "BISTEC", precio: "$55" },
      { nombre: "COSTILLA", precio: "$55" },
      { nombre: "CHULETA", precio: "$55" },
      { nombre: "SUADERO", precio: "$55" },
      { nombre: "ARRACHERA", precio: "$90" },
      { nombre: "ESPECIAL (Ingredientes: Cuatro tortillas de harina, Pastor, piña, jamón y queso", precio: "$70" }
    ]
  },
  {
    name: "PAPAS RELLENAS",
    image: papa,
    descripcion: "Papa con mantequilla, carne y queso ",
    items: [
      { nombre: "SOLO CON MANTEQUILLA", precio: "$25" },
      { nombre: "PASTOR", precio: "$75" },
      { nombre: "BISTEC", precio: "$75" },
      { nombre: "COSTILLA", precio: "$75" },
      { nombre: "CHULETA", precio: "$75" },
      { nombre: "SUADERO", precio: "$75" },
      { nombre: "ARRACHERA", precio: "$110" }
    ]
  },
  {
    name: "QUESOS FUNDIDOS",
    image: quesos,
    descripcion: "Carne y queso acompañados con tortillas de harina",
    items: [
      { nombre: "QUESO NATURAL", precio: "$55" },
      { nombre: "PASTOR", precio: "$65" },
      { nombre: "BISTEC", precio: "$65" },
      { nombre: "COSTILLA", precio: "$65" },
      { nombre: "CHULETA", precio: "$65" },
      { nombre: "SUADERO", precio: "$65" },
      { nombre: "ARRACHERA", precio: "$100" },
    ]
  },
  {
    name: "TORTAS",
    image: tortas,
    descripcion: "Jitomate, aguacate, lechuga, carne y queso",
    items: [
      { nombre: "JAMÓN", precio: "$35" },
      { nombre: "PASTOR", precio: "$40" },
      { nombre: "BISTEC", precio: "$40" },
      { nombre: "COSTILLA", precio: "$40" },
      { nombre: "CHULETA", precio: "$40" },
      { nombre: "SUADERO", precio: "$40" },
      { nombre: "ARRACHERA", precio: "$70" },
    ]
  },
  {
    name: "CARNE POR KILO",
    image: carne,
    descripcion: "Incluye salsas, tortillas, verduras, y un refrescos de 1.5 litros.",
    items: [
      { nombre: "PASTOR", precio: "$300" },
      { nombre: "PASTOR CON QUESO", precio: "$320" }
    ]
  },
  {
    name: "ADICIONALES",
    image: charro,
    descripcion: "Complementos para tu platillo.",
    items: [
      { nombre: "FRIJOLES CHARROS", precio: "$20" },
      { nombre: "FRIJOLES CHARROS CON QUESO", precio: "$25" },
      { nombre: "FRIJOLES CHARROS CON CARNE (La carne que prefieras: pastor, bistec, costilla)", precio: "$30" },
      { nombre: "FRIJOLES CHARROS CON ARRACHERA", precio: "$50" },
      { nombre: "ORDEN DE CEBOLLITAS", precio: "$50" },
      { nombre: "ORDEN DE CEBOLLITAS ESPECIAL", precio: "$35" },
    ]
  },
  {
  name: "BEBIDAS",
  image: horchata,
  subcategorias: [
    {
      titulo: "REFRESCOS DE VIDRIOS",
      items: [
        { nombre: "COCA COLA", precio: "$25" },
        { nombre: "FANTA", precio: "$20" },
        { nombre: "FRESCA", precio: "$25" },
        { nombre: "SIDRAL MUNDET", precio: "$25" },
        { nombre: "SANGRIA", precio: "$25" },
        { nombre: "JUGO DEL VALLE (mango, guayaba)", precio: "$25" },
      ]
    },
    {
      titulo: "REFRESCOS DE 600 ML",
      items: [
        { nombre: "COCA COLA", precio: "$27" },
        { nombre: "FANTA", precio: "$27" },
        { nombre: "FRESCA", precio: "$27" },
        { nombre: "SIDRAL MUNDET", precio: "$27" },
        { nombre: "SANGRIA", precio: "$27" },
        { nombre: "JUGO DEL VALLE", precio: "$27" },
        { nombre: "DELAWARE", precio: "$27" },
        { nombre: "SPRITE", precio: "$27" },
        { nombre: "COCO COLA LIGHT", precio: "$27" },
        { nombre: "LIMONADA", precio: "$27" },
        { nombre: "NARANJADA", precio: "$27" },
        { nombre: "AGUA MINERAL", precio: "$27" },
        { nombre: "AGUA NATURAL", precio: "$27" },
      ]
    },
    {
      titulo: "AGUA DE SABOR",
      items: [
        { nombre: "AGUA DE JAMAICA 1/2 L", precio: "$25" },
        { nombre: "AGUA DE JAMAICA 1L", precio: "$40" },
        { nombre: "AGUA DE HORCHATA 1/2L", precio: "$25" },
        { nombre: "AGUA DE HORCHATA 1L", precio: "$40" },
      ]
    },
     {
      titulo: "BEBIDAS CALIENTES",
      items: [
        { nombre: "CAFE DE OLLA", precio: "$25" },
        { nombre: "CHOCOLATE", precio: "$40" },
        { nombre: "AGUA PARA DE TE DE MANZANILLA", precio: "$25" },
        { nombre: "AGUA ARA TE DE LIMÓN", precio: "$25" },
        { nombre: "CAFÉ NESPRESSO", precio: "$25" },
        { nombre: "CAFÉ AMERICANO", precio: "$25" },
        { nombre: "CAFÉ CAPUCHINO", precio: "$25" },
      ]
    }
  ]
}

];

export default menu;
