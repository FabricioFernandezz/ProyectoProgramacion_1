import React from 'react'
import { Route, Routes} from "react-router-dom";
import { Perfil } from '../COMPONENTES/Perfil/Perfil';
import {Carrito} from '../COMPONENTES/Carrito/Carrito';
import { UserList } from '../COMPONENTES/UserList/UserList';
import { Home } from '../COMPONENTES/Home/Home';
import { Offers } from '../COMPONENTES/Offers/Offers';
import { AddProduct } from '../COMPONENTES/AddProduct/AddProduct';
import { ProductList } from '../COMPONENTES/ProductList/ProductList';




export const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path='/Home' element={ <Home />} />
        <Route path='/perfil' element={ <Perfil />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/userlist' element={<UserList />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/AddProduct' element={<AddProduct />} />
        <Route path='/ProductList' element={<ProductList />} />
        
    </Routes>
  )
}