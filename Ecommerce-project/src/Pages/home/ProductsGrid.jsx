import { Product } from './Product';
export function ProductsGrid({products, fetchCartData}) {
    return (
        <div className="products-grid">
            {products.map((product) => { 
                return (
                    <Product key={product.id} product={product} fetchCartData={fetchCartData} />
                );
            })}
        </div>
    );
}