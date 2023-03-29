import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Foorm from './Components/Form/Form'
import { Route,Routes } from 'react-router-dom';
import About from './pages/aboutus'
import Contact from './pages/contactus'
import Home from './Components/Home/Home'
import Form from './pages/form'
import Error from './pages/error'

const App=()=>{
  return(
    <>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route element={<Error/>}/>
    </Routes>
    </>
  )
}
// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <Foorm/>
//     </div>
//   );
// }

export default App;
