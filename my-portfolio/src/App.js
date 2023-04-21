import './App.css';
import { Banner, Contact, Skills } from './components';
import Projects from './components/Projects';
import {Footer, NavBar} from './components/ui/';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;
