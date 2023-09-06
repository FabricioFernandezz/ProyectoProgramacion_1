// import React from 'react'
// import PaginaConFondo from './COMPONENTES/PaginaConFondo/PaginaConFondo'
// import  Navbar  from './COMPONENTES/Navbar/Navbar.jsx'

// import './IMAGENES/VinoBlanco.jpeg'
// import './IMAGENES/VinoRosado.jpeg'
// import'./IMAGENES/VinoTinto.jpeg'
// import { CardContainer } from './COMPONENTES/CardContainer/CardContainer.jsx'

// export const App = () => {
//   return (
//     <div>
//     <Navbar/>
//     <PaginaConFondo/>
//     <div className='row'>
//           <div className='col'>
//             <CardContainer/>
//         </div>
//       </div>
//       </div>
//   )
// }
// export default App

import React from "react";
import "./IMAGENES/VinoBlanco.jpeg";
import "./IMAGENES/VinoRosado.jpeg";
import "./IMAGENES/VinoTinto.jpeg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./COMPONENTES/Home/Home";
import Navbar from "./COMPONENTES/Navbar/Navbar.jsx";
import LoginForm from "./COMPONENTES/LoginForm/LoginForm";
import Register from "./COMPONENTES/Register/Register";


export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
