import React from "react";
import PropTypes from "prop-types"


const Curso=({title, image, price, profesor})=>(
<>

<article clasName="card">
  <div clasName="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src={image} alt={title}/>
  </div>
  <div clasName="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 clasName="t5 s-mb-2 s-center">
        {title} 
    </h3>
    <div clasName="s-mb-2 s-main-center">
      <div clasName="card__teacher s-cross-center">
        <span clasName="small">
            {profesor}
            </span>
      </div>
    </div>
    <div clasName="s-main-center">
      <a clasName="button--ghost-alert button--tiny" href="uaemex.com">{price}</a>
    </div>
  </div>
</article>

</>

)

Curso.propTypes = {
    tittle: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    profesor: PropTypes.string
}


Curso.defaultProps = {
tittle:"No se encontro la información",
image:"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/32138012/b9dbd5f20642ca8ac594801ffc17ca8760f347c0_400x225.png",
price:"--",
profesor:"Sin Profesor"
}


export default Curso

