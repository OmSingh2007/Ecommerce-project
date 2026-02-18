import { API_URL } from '../../config'
import axios from 'axios';
import { useEffect, useState } from 'react'
import './HomePage.css'
import { Header } from '../../components/Header'
import { ProductsGrid } from './ProductsGrid'
export function HomePage({ cart, fetchCartData }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchHomeData = async ()=>{
            const response = await axios.get(`${API_URL}/api/products`);
        setProducts(response.data);
        }
        fetchHomeData();
    }, []);

    return (
        <>

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} fetchCartData={fetchCartData} />
            </div>
        </>

    );
}