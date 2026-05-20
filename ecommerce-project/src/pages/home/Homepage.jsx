import axios from 'axios';
import {useEffect, useState} from 'react';
import {Header} from '../../components/Header'; 
import { ProductsGrid } from './ProductsGrid';
import HomeIcon from '../../assets/images/home-favicon.png';
import './Homepage.css';

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);
  

  useEffect(() =>{
    axios.get('/api/products')
    .then((response)=>{
       setProducts(response.data);
      });
      
      },[]);

  
     
    return(
        <>
        <title>Home</title>
         <Header cart = {cart}/>
       <link rel="icon" type="image/svg+xml" href={HomeIcon} />
    <div className="home-page">
      <ProductsGrid products={products} />
    </div>
        </>
    );
}