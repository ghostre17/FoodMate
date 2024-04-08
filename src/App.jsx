import react, {Component} from 'react'
import Header from './FoodMate/Header';
import Navigation from './FoodMate/Navigation';
import Footer from './FoodMate/Footer';

class App extends Component {
  render(){
    return(
      <div>
        <Header/>
        <Navigation/>
        <Footer/>
      </div>
    )
  }
}

export default App;
