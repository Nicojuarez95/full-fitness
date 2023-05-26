import React from 'react'
import { Link as Anchor} from 'react-router-dom';
import nosotros from "../img/nosotros.png"
import servicios from "../img/servicios.png"
import f1 from "../img/f1.jpg"
import f2 from "../img/f2.jpg"
import f3 from "../img/f3.jpg"
import f4 from "../img/f4.jpg"
import f5 from "../img/f5.jpg"
import f6 from "../img/f6.jpg"
import e1 from "../img/e1.png"
import e2 from "../img/e2.png"
import e3 from "../img/e3.png"

export default function Home() {
  return (
    <>
    <body>
    
    <section id="inicio" class="inicio">
        <div class="contenido-seccion">
            <div class="info">
                <h2>HAZ QUE <span class="txtRojo">OCURRA</span></h2>
                
                <p>Entrenar como habito de vida!</p>
                <a href="#nosotros" class="btn-mas">
                    <i class="fa-solid fa-circle-chevron-down"></i>
                </a>
            </div>
            <div class="opciones">
                <div class="opcion">
                    01.FITNESS
                </div>
                <div class="opcion">
                    02.CROSSFIT
                </div>
                <div class="opcion">
                    03.BOXING
                </div>
                <div class="opcion">
                    04.ENDURANCE
                </div>
                <div class="opcion">
                    05.YOGA
                </div>
                <div class="opcion">
                    06.CARDIO
                </div>
            </div> 
        </div>
    </section>

    
    <section id="nosotros" class="nosotros">
        <div class="fila">
            <div class="col">
                <img src={nosotros} alt=""/>
            </div>
            <div class="col">
                <div class="contenedor-titulo">
                    <div class="numero">
                        01
                    </div>
                    <div class="info">
                        <span class="frase">LOS MEJORES PRODUCTOS</span>
                        <h2>NOSOTROS</h2>
                    </div>
                </div>
                <p class="p-especial">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur necessitatibus quod provident libero, nam corrupti, adipisci ea inventore cum aliquid asperiores pariatur harum sunt. Tempore expedita atque quos ipsum nisi.</p>
            </div>
        </div>
        <hr/>
        <div class="fila-nosotros">
            <div class="col1">
                <span class="frase">
                    <span class="txtRojo">SENTITE</span> SALUDABLE
                </span>
                <h2>ENTRENA <span class="txtRojo">DE LA MEJOR FORMA</span> HOY!</h2>
            </div>
            <div class="col2">
                <button><a class="wpp" href="/productos">MIRÁ NUESTROS PRODUCTOS</a></button>
            </div>
        </div>
    </section>

   
    <section class="servicios" id="servicios">
        <div class="contenido-seccion">
            <div class="fila">
                <div class="col">
                    <div class="contenedor-titulo">
                        <div class="numero">
                            02
                        </div>
                        <div class="info">
                            <span class="frase">LA MEJOR CALIDAD</span>
                            <h2>PARA LO QUE NECESITES</h2>
                        </div>
                    </div>
                    <p class="p-especial">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur necessitatibus quod provident libero, nam corrupti, adipisci ea inventore cum aliquid asperiores pariatur harum sunt. Tempore expedita atque quos ipsum nisi.</p>
                </div>
                <div class="col">
                    <img src={servicios} alt=""/>
                </div>
            </div>
        </div>
        <div class="info-servicios">
            <table>
                <tr>
                    <td>
                        <i class="fa-solid fa-person-walking"></i>
                        <h3><span class="txtRojo">Entrená </span> Fitness</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis.</p>
                    </td>
                    <td>
                        <i class="fa-solid fa-dumbbell"></i>
                        <h3><span class="txtRojo">Entrená </span> Crossfit</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis.</p>
                    </td>
                    <td>
                        <i class="fa-solid fa-mitten"></i>
                        <h3><span class="txtRojo">Entrená </span> Boxeo</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis.</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <i class="fa-solid fa-clock"></i>
                        <h3><span class="txtRojo">Entrená </span> Enduro</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis.</p>
                    </td>
                    <td>
                        <i class="fa-solid fa-heart-circle-bolt"></i>
                        <h3><span class="txtRojo">Entrená </span> Cardio</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis.</p>
                    </td>
                    <td>
                        <i class="fa-solid fa-bicycle"></i>
                        <h3><span class="txtRojo">Entrená </span> Ciclismo</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis.</p>
                    </td>
                </tr>
            </table>
        </div>
    </section>

    
    <section id="comodidades" class="comodidades">
        <div class="fila">
            <div class="col">
                <img src={nosotros} alt=""/>
            </div>
            <div class="col">
                <div class="contenedor-titulo">
                    <div class="numero">
                        03
                    </div>
                    <div class="info">
                        <span class="frase">ENCONTRÁ TU PRODUCTO</span>
                        <h2>PARA TU META</h2>
                    </div>
                </div>
                <p class="p-especial">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <ul>
                    <li><span>GANAR MASA MUSCULAR</span> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tenetur, nam cumque adipisci ratione obcaecati impedit inventore eligendi</li>
                    <li><span>TONIFICACIÓN</span> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tenetur, nam cumque adipisci ratione obcaecati impedit inventore</li>
                    <li><span>DEFICIT CALÓRICO</span> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tenetur, nam cumque adipisci ratione obcaecati impedit?</li>
                </ul>
            </div>
        </div>
    </section>

    
    <section class="galeria" id="galeria">
        <div class="contenido-seccion">
            <div class="contenedor-titulo">
                <div class="numero">
                    04
                </div>
                <div class="info">
                    <span class="frase">LA MEJOR EXPERIENCIA</span>
                    <h2>GALERIA</h2>
                </div>
            </div>
            <div class="fila">
                <div class="col">
                    <img src={f1} alt=""/>
                </div>
                <div class="col">
                    <img src={f2} alt=""/>
                </div>
                <div class="col">
                    <img src={f3} alt=""/>
                </div>
            </div>
            <div class="fila">
                <div class="col">
                    <img src={f4} alt=""/>
                </div>
                <div class="col">
                    <img src={f5} alt=""/>
                </div>
                <div class="col">
                    <img src={f6} alt=""/>
                </div>
            </div>
        </div>
    </section>
    
   
    <section class="equipo" id="equipo">
        <div class="contenido-seccion">
            <div class="contenedor-titulo">
                <div class="numero">
                    05
                </div>
                <div class="info">
                    <span class="frase">LA MEJOR EXPERIENCIA</span>
                    <h2>EQUIPO</h2>
                </div>
            </div>
            <div class="fila">
                <div class="col">
                    <img src={e1} alt=""/>
                    <div class="info">
                        <h2>Felipe</h2>
                        <p>Fitness - Pilates - Yoga</p>
                        <a href="#">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </div>
                <div class="col">
                    <img src={e2} alt=""/>
                    <div class="info">
                        <h2>PATRICIA</h2>
                        <p>Fitness - Pilates - Yoga</p>
                        <a href="#">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </div>
                <div class="col">
                    <img src={e3} alt=""/>
                    <div class="info">
                        <h2>Martin</h2>
                        <p>Fitness - Pilates - Yoga</p>
                        <a href="#">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

   
    <section class="contacto" id="contacto">
        <div class="contenido-seccion">
            <div class="contenedor-titulo">
                <div class="numero">
                    06
                </div>
                <div class="info">
                    <span class="frase">LA MEJOR EXPERIENCIA</span>
                    <h2>CONTACTO</h2>
                </div>
            </div>
            <div class="fila">
                <div class="col">
                    <input type="text" placeholder="Ingrese Email"/>
                </div>
                <div class="col">
                    <input type="text" placeholder="Ingrese Nombre"/>
                </div>
            </div>
            <div class="mensaje">
                <textarea name="" id="" cols="30" rows="10" placeholder="Ingresa el Mensaje"></textarea>
                <button>Enviar Mensaje</button>
            </div>
            <div class="fila-datos">
                <div class="col">
                    <i class="fa-solid fa-location-dot"></i>
                    La Carlota, Cba
                </div>
                <div class="col">
                    <i class="fa-solid fa-phone"></i>
                    2664 - 456788
                </div>
                <div class="col">
                    <i class="fa-regular fa-clock"></i>
                    Lunes a Sábado
                </div>
            </div>
        </div>

    </section>

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
    <script src="app.js"></script>
</body>
    </>
  )
}
