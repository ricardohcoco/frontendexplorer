import React from "react"
import { ContainerHome } from "./styles"
import { ContainerHeader } from "../Header/styles"
import { ContainerFooter } from "../Footer/styles"
import { HeaderComponent } from "../Header/Header"

function HomeDishes() {
  return (
    <ContainerHome>
    <HeaderComponent/>
    <div className="container-home">
      <div className="header">
        <div className="imghome"><img src="./src/assets/images/imagemhome.png" alt="Imagem de macarons"/></div>
        <div className="texthome"><h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p></div>
      </div>

      <h1>Refeições</h1>
      <div className="refeições">        
        <div className="card1">
          <img src="./src/assets/images/saladaravanello.png" alt="Imagem de salada ravanello"/>
          <h2>Salada Ravanello</h2>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergilim</p>
            <span>R$ 49,97</span>
            <div className="info">
            <button>-</button>
            <p>01</p>
            <button>+</button>
            <button className="incluir "type="submit">incluir</button>
            </div>
        </div>

        <div className="card2">
          <img src="./src/assets/images/spaguettigamba.png" alt="Imagem de spaguetti gamba"/>
          <h2>Spaguetti Gambe </h2>
          <p>Massa fresca com camarões e pesto</p>
          <span>R$ 79,97</span>
          <div className="info">
            <button>-</button>
            <p>01</p>
            <button>+</button>
            <button className="incluir "type="submit">incluir</button>
            </div>
        </div>

        <div className="card3">
          <img src="./src/assets/images/torradaparma.png" alt="Imagem de torrada parma"/>
          <h2>Torradas de Parma</h2>
          <p>Presunto de parma e rúcula em pão com fermentação natural</p>
          <span>R$ 25,97</span>
          <div className="info">
            <button>-</button>
            <p>01</p>
            <button>+</button>
            <button className="incluir "type="submit">incluir</button>
            </div>
        </div>

        <div className="card4">
          <img src="./src/assets/images/salada2.png" alt="Imagem de salada fresca"/>
          <h2>Salada Fresca</h2>
          <p>Folhas verdes, cebola roxa, abobrinha e tomates</p>
          <span>R$ 15,90</span>
          <div className="info">
            <button>-</button>
            <p>01</p>
            <button>+</button>
            <button className="incluir "type="submit">incluir</button>
            </div>
        </div>
      </div>

      <h1>Sobremesas</h1>
      <div className="sobremesas">
        

        <div className="card1">
          <img src="./src/assets/images/prugnapie.png" alt="Imagem de torta prugna pie"/>
          <h2>Prugna Pie</h2>
          <p>Torta de ameixa com massa amanteigada, polvilho e açúcar</p>
          <span>R$ 79,97</span>
          <div className="info">
            <button>-</button>
            <p>01</p>
            <button>+</button>
            <button className="incluir "type="submit">incluir</button>
            </div>
        </div>

        <div className="card2">
          <img src="./src/assets/images/peachypastrie.png" alt="Imagem de torta peachy pastrie"/>
          <h2>Peachy Pastrie</h2>
          <p>Torta de ameixa com massa amanteigada, polvilho e açúcar</p>
          <span>R$ 32,97</span>
          <div className="info">
            <button>-</button>
            <p>01</p>
            <button>+</button>
            <button className="incluir "type="submit">incluir</button>
            </div>
        </div>

        <div className="card3">
          <img src="./src/assets/images/macarons.png" alt="Imagem de macarons"/>
          <h2>Macarons</h2>
          <p>Farinha de amêndoas, claras e açúcar</p>
          <span>R$ 10,00</span>
          <div className="info">
            <button>-</button>
            <p>01</p>
            <button>+</button>
            <button className="incluir "type="submit">incluir</button>
            </div>
        </div>

        <div className="card4">
          <img src="./src/assets/images/tortadefigo.png" alt="Imagem de torta de figos"/>
          <h2>Fig Pie</h2>
          <p>Torta de massa folhada, creme patissière e figos</p>
          <span>R$ 49,90</span>
          <div className="info">
            <button>-</button>
            <p>01</p>
            <button>+</button>
            <button className="incluir "type="submit">incluir</button>
            </div>
        </div>
        
      </div>

      <h1>Bebidas</h1>
      <div className="bebidas">
        <div className="card1">
          <img src="./src/assets/images/espresso.png" alt="Imagem de café espresso"/>
          <h2>Espresso</h2>
          <p>Café cremoso feito na temperatura e pressões perfeitas</p>
          <span>R$ 15,97</span>
          <div className="info">
            <button>-</button>
            <p>01</p>
            <button>+</button>
            <button className="incluir "type="submit">incluir</button>
            </div>
        </div>

        <div className="card2">
          <img src="./src/assets/images/sucomaracuja.png" alt="Imagem de suco de maracujá"/>
          <h2>Suco Maracujá </h2>
          <p>Suco de maracujá gelado, cremoso e docinho</p>
          <span>R$ 13,97</span>
          <div className="info">
            <button>-</button>
            <p>01</p>
            <button>+</button>
            <button className="incluir "type="submit">incluir</button>
            </div>
        </div>

        <div className="card3">
          <img src="./src/assets/images/chaoutono.png" alt="Imagem de chá Tè d'autunno"/>
          <h2>Tè d'autunno</h2>
          <p>Chá de anis, canela e limão. Sinta o outono italiano</p>
          <span>R$ 19,97</span>
          <div className="info">
            <button>-</button>
            <p>01</p>
            <button>+</button>
            <button className="incluir "type="submit">incluir</button>
            </div>
        </div>

        <div className="card4">
          <img src="./src/assets/images/coquetel.png" alt="Imagem de coquetel de maçã"/>
          <h2>Apple Me</h2>
          <p>Coquetel de maçã com gelo, maçã, canela e tônica</p>
          <span>R$ 18,50</span>
          <div className="info">
            <button>-</button>
            <p>01</p>
            <button>+</button>
            <button className="incluir "type="submit">incluir</button>
            </div>
        </div>
      </div>


    </div>
    <ContainerFooter />
    </ContainerHome>

  ) 
}
  
export default HomeDishes