import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from "./Product.jsx"
import { Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const products = [
  {
    id: 1,
    name: "product 1",
    productType: "Shoes",
    price: 50,
    rating: 4.5,
    image: "https://example.com/product1.jpg",
    description: "Description of product 1",
  },
  {
    id: 2,
    name: "product 2",
    productType: "Clothing",
    price: 30,
    rating: 4.2,
    image: "https://example.com/product2.jpg",
    description: "Description of product 2",
  },
  {
    id: 3,
    name: "product 3",
    productType: "Accessories",
    price: 20,
    rating: 4.0,
    image: "https://example.com/product3.jpg",
    description: "Description of product 3",
  },
  // Agrega más productos aquí con diferentes categorías
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = React.useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.productType === selectedCategory)
    : products;

  return (
    <>
    <Box sx={{ flexGrow: 1, marginTop: 8, padding:1, minHeight:"84.6vh" }}>
      <Grid item xs={12}>
          <Typography align="center" gutterBottom variant='h4'>
             Productos
          </Typography>
      </Grid>
      <Grid container spacing={1} padding={0} >
        <Grid item xs={12}>
          <FormControl>
            <InputLabel id="category-label">Categoría</InputLabel>
            <Select
              labelId="category-label"
              id="category-select"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <MenuItem value="">Todas</MenuItem>
              <MenuItem value="Shoes">Zapatos</MenuItem>
              <MenuItem value="Clothing">Ropa</MenuItem>
              <MenuItem value="Accessories">Accesorios</MenuItem>
              {/* Agrega más opciones de categorías aquí */}
            </Select>
          </FormControl>
        </Grid>
        {
            filteredProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={2} key={product.id}>
                    <Product product={product}/>
                </Grid>
            ))
        }
      </Grid>
    </Box>
      <footer>
        <div className="info">
            <p>2023 - <span className="txtRojo">FULL FITNESS</span> Todos los derechos reservados</p>
            <div className="redes">
                <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                </a>
            </div>
        </div>
      </footer>
    </>
  );
}