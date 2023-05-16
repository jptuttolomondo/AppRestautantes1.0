import './App.css';
import {Route,Routes} from 'react-router-dom'
import { Provider } from 'react-redux';
import {store }from './store/index'
import { LandingPage } from './components/landPage/landPage';
import  {Home}from './components/home/home'
import { Comanda } from './components/comanda';
import { NuevaComanda } from './components/nuevaComanda';
import NotFound  from'./components/notfound/404'
function App() {

  return (
    <div className="App">
      <Provider store={store}>
     <Routes> 
      <Route path="*" element={<LandingPage/>} > </Route> 
      <Route path="/notfound" element={<NotFound/>} > </Route> 
      <Route path="/comanda" element={<Comanda/>} > </Route> 
      <Route path="/postComanda" element={<NuevaComanda/>} > </Route> 
    <Route exact path="/home" element={<Home/>} > </Route> 
     </Routes>
     </Provider>
    </div>
  );
 
}

export default App;
