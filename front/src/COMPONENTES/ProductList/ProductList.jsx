import './ProductList.css'
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../CONTEXT/UserContext'




export const ProductList = () => {

    const { user } = useContext(UserContext);

    const [Products, setProducts] = useState([]);


    useEffect(() => {
        fetchProduct();
      }, []);

      
    const fetchProduct = async () => {
        try {
            const response = await axios.get('http://localhost:5000/product');
            console.log(response)
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    

    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre del vino</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Descripcion</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                Products.map(product => (
                                    <tr key={product.id}>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.stock}</td>
                                        <td>{product.description}</td>
                                        {
                                            // usuario comun solo puede postularse a la oferta
                                            user.role === '2' ? (
                                                <div>
                                                    <td> 
                                                        <button type="button" className="btn btn-success" > Comprar </button>
                                                    </td>
                                                </div>
                                            // admin puede editar y eliminar
                                            ):(
                                                <div>
                                                    <td> 
                                                        <button type="button" className="btn btn-warning"> Editar </button>
                                                    </td>
                                                    <td> 
                                                        <button type="button" className="btn btn-danger">Eliminar</button>
                                                    </td>  
                                                </div>
                                            )
                                        }
                                    </tr>
                                ))
                            }  
                                                
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}