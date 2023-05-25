import React from 'react'
import { useEffect, useState } from 'react';
import accounting from 'accounting'
import { Button } from '@mui/material'
import { useStateValue } from '../stateProvider';
import { getBasketTotal } from '../reducer';
import { Link as Anchord } from 'react-router-dom';

function generateWhatsAppMessage(basket) {
  // Obtener los nombres de los productos del carrito
  const productNames = basket.map(item => item.name);

  // Calcular el total de los productos en el carrito
  const total = getBasketTotal(basket);

  // Crear el mensaje con los nombres de los productos y el total
  const message = `Hola, me gustaría comprar ${productNames.join(', ')} - Total: ${accounting.formatMoney(total, "$")}`;

  return message;
}

export default function Cart() {
  const [{ basket }, dispatch] = useStateValue();
  const total = getBasketTotal(basket);
  const isBasketEmpty = total === 0;

  return (
    <div>
      <Total basket={basket} />
    </div>
  );
}

function Total({ basket }) {
  const total = getBasketTotal(basket);
  const isBasketEmpty = total === 0;

  return (
    <div className="root">
      <h5>Total de productos: {basket?.length}</h5>
      <h5>{accounting.formatMoney(total, "$")}</h5>
      {isBasketEmpty ? (
        <Button className='pagar' variant='contained' color='secondary' disabled>
          Contactarse y pagar
        </Button>
      ) : (
        <a href={`https://api.whatsapp.com/send?phone=5493584834859&text=${encodeURIComponent(generateWhatsAppMessage(basket))}`} target='_blank'>
          <Button className='pagar' variant='contained' color='secondary'>
            Contactarse y pagar
          </Button>
        </a>
      )}
    </div>
  );
}
