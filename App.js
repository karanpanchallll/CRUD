import './App.css';
import Navbar from './components/navbar.jsx';
import Create from './components/Create.jsx';
import Read from './components/Read.jsx';
import Update from './components/Update.jsx';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      
        <Routes>
          <Route exact path='/' element={ <Create /> }/>
          <Route path='/all' element={ <Read /> }/>
          <Route path='/:id' element={ <Update /> }/>
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
