import './styles/style.scss';
import Curso from './Curso.jsx';
import Banner from './Banner.jsx';

//la información la puedes tomar desde una API
const cursos= [
  {
    "title": "Ubica tu Gym",
    "image":"https://www.elfinanciero.com.mx/resizer/myyQpL7H_Nd0VCNIYkImIFUCV1o=/400x225/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/ZRDKONC3A7TQ7XRJZKYCRCY3VI.png",
    "price":"Entrar",
    "profesor":"CDMX y Área metropolitana."
  },
  {
    "title": "Plan de entrenamiento",
    "image":"https://www.bodybuilding.com/images/2021/march/what-is-the-best-5-day-workout-split-header-400x225.jpg",
    "price":"Entrar",
    "profesor":"Con los mejores especialistas"
  },
  {
    "title": "Suplementos y vitaminas",
    "image":"https://cdn.shopify.com/s/files/1/0549/3882/8969/files/Supplement_tab_400x.jpg?v=1629877818",
    "price":"Entrar",
    "profesor":"Consigue el cuerpo que deseas de manera natural"
  },
   {
    "title": "Quienes somos",
    "image":"https://www.elfinanciero.com.mx/resizer/8qhkZzyrbHb4jwYETu17uetOsdM=/400x225/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/ETXZNQGEJJBNDNV7HYVL3RS2YI.jpeg",
    "price":"Más Información",
    "profesor":"Conocenos"
  },
  {
    "title": "Tienda en linea",
    "image":"https://thumbs.dreamstime.com/x/shenzhen-china-paisaje-interior-de-la-tienda-ropa-los-deportes-en-noche-el-jordan-sports-apparel-store-las-mujeres-est%C3%A1n-151130958.jpg",
    "price":"Comprar",
    "profesor":"Accesorios y más"
  },
  {
    "title": "Nuestras Redes",
    "image":"https://www.elmundofinanciero.com/fotos/472/Pedido__4139_thumb_400.jpg",
    "price":"Siguenos",
    "profesor":"Comparte tu experiencia"
  }
]


const App=() =>
<>
 <Banner/>
 <div className="ed-grid m-grid-3">
   {
     cursos.map(c => <Curso title={c.title} image={c.image} price= {c.price} profesor={c.profesor}/>)
   }
 </div>

</>
 

export default App;
