import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CheckoutCard from "./CheckoutCard";
import Total from "./Total";
import { useStateValue } from "../stateProvider";


const CheckoutPage = () => {
  const [{ basket }, dispatch] = useStateValue();

  function FormRow() {
    return (
      <Grid container spacing={1} padding={0} marginTop={1}>
        {basket?.map((item) => (
          <Grid item xs={12} sm={10} md={6} lg={3} key={item.id}>
            <CheckoutCard product={item} />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <>
    <div className="carrito">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography align="center" gutterBottom variant="h4">
          Carrito
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={3}>
          <FormRow />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography align="center" gutterBottom variant="h4">
            <Total />
          </Typography>
        </Grid>
      </Grid>
    </div>
    <footer>
    <div class="info">
        <p>2023 - <span class="txtRojo">FULL FITNESS</span> Todos los derechos reservados</p>
        <div class="redes">
            <a href="#">
                <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
                <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
                <i class="fa-brands fa-youtube"></i>
            </a>
        </div>
    </div>
    </footer>
</>
  );
};

export default CheckoutPage;