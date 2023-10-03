import React from 'react'
import { Route, Routes, Navigate} from "react-router-dom";
import { Perfil } from '../COMPONENTES/Perfil/Perfil';
import {Carrito} from '../COMPONENTES/Carrito/Carrito';
import { UserList } from '../COMPONENTES/UserList/UserList';
import { Home } from '../COMPONENTES/Home/Home';

export const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path='/Home' element={ <Home />} />
        <Route path='/perfil' element={ <Perfil />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='*' element={<Navigate to='/' replace />} />
        <Route path='/userlist' element={<UserList />} />
        
    </Routes>
  )
}