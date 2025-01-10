import './App.css'
import Card from './components/Card';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {


  return (
    <>
    <Navbar />
    <div className='container'>
      <Jumbotron />
      <div className="container my-4">
          <div className="row">
            <div className="col-md-3">
              <Card 
                title="Aguacate Hass" 
                image="https://www.simfruit.cl/wp-content/uploads/2019/08/palta-1-600x400.jpg"
                content="Pequeño pero poderoso, el aguacate Hass es como el superhéroe del desayuno: suave, cremoso y siempre listo para salvar tus tostadas."
              />
            </div>
            <div className="col-md-3">
              <Card 
                title="Aguacate Fuerte" 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReEXptQ8FaRHu9jgjsna9yciMJWXcULt44cQ&s"
                content="El Fuerte es como el compadre buena onda del carrete: siempre te salva el desayuno después de una larga noche."
              />
            </div>
            <div className="col-md-3">
              <Card 
                title="Aguacate Bacon" 
                image="https://www.lamanoverde.cl/wp-content/uploads/2021/09/palto-bacon.jpg"
                content="El Bacon es la palta más piola de la familia. Redondita y lista pa tus ensaladas. ¿Tocino? Nah, ¡esto es puro amor verde!"
              />
            </div>
            <div className="col-md-3">
              <Card 
                title="Aguacate Reed" 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqnwc8Aat7UBrGpS4aoa_tI-lrulkgbWGHgQ&s"
                content="La Reed es la reina redonda de las paltas. Gorda, jugosa y tan sabrosa que con una pura te armái un guacamole pa todos los cabros."
              />
            </div>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default App
