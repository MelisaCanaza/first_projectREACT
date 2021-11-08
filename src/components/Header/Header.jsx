import './index.css'

const Header = () =>{
    return(
        <nav>                          
        <ul class="header__lista">        

          <li><a href="index.html">inicio</a></li>
          <li><a href="productos.html">productos</a>
            <ul>
              <li><a href="productos.html #productos__new"  >Nueva temporada</a></li>
              <li><a href="productos.html #productos__accesorios" >Accesorios</a></li>
              <li><a href="productos.html #productos__hotsale">Hot Sale</a></li>
            </ul>
          </li>
          
          <li><a href="talles-y-medidas.html">talles y medidas</a></li>
          <li><a href="contactanos.html"> contactanos</a></li>
          <li><a href="preguntas-frecuentes.html"> preguntas frecuentes</a></li>
        </ul>


      </nav>  
    )
}

export default Header