import * as React from 'react';
import Box from '@mui/material/Box';
import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStateValue } from '../stateProvider';
import { auth } from '../firebase';
import { actionTypes } from '../reducer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Menu as MenuIcon, Home as HomeIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';

export default function Navbar() {
  const [{ basket }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false); // Estado para controlar la apertura y cierre del menú hamburguesa

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <Toolbar>
          {/* Botón para abrir el menú hamburguesa */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <h3 className="titulo">FULL FITNESS</h3>
          </Link>

          <div style={{ flexGrow: 1 }} />

          {/* Ícono del carrito */}
          <Link to="/carrito" style={{ color: 'inherit', textDecoration: 'none' }}>
          <IconButton style={{ color: 'white' }}>
              <Badge badgeContent={basket?.length} color='secondary'>
                <ShoppingCart fontSize='large'/>
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>

      {/* Menú hamburguesa */}
      <Drawer anchor="left" open={open} onClose={handleDrawerToggle}>
        <List>
          {/* Ícono y enlace para la página de inicio */}
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItem>

          {/* Ícono y enlace para el carrito */}
          <ListItem button component={Link} to="/productos">
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Productos" />
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}