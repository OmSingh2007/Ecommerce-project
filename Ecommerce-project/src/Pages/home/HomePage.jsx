import axios from 'axios';
import { useEffect, useState } from 'react'
import './HomePage.css'
import { Header } from '../../components/Header'
import { ProductsGrid } from './ProductsGrid'
export function HomePage({ cart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchHomeData = async ()=>{
            const response = await axios.get("/api/products");
        setProducts(response.data);
        }
        fetchHomeData();
    }, []);

    return (
        <>

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} />
            </div>
        </>

    );
}