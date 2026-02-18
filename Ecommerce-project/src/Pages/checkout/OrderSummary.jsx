import { API_URL } from '../../config'
import axios from 'axios';
import { DeliveryOptions } from './DeliveryOptions'
import { formatMoney } from '../../utils/money'
import dayjs from 'dayjs'
export function OrderSummary({cart , deliveryOptions , fetchCartData }) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
                    return deliveryOption.id === cartItem.deliveryOptionId;
                });
                const deleteCartItem = async ()=>{
                    await axios.delete(`${API_URL}/api/cart-items/${cartItem.productId}`)
                    await fetchCartData();
                }
                const updateCartItem= async ()=>{
                    const newQuantity=cartItem.quantity+1;
                    await axios.put(`${API_URL}/api/cart-items/${cartItem.productId}`,{quantity:newQuantity})
                    fetchCartData();
                }
                return (
                    <div key={cartItem.productId} className="cart-item-container">
                        <div className="delivery-date">
                            Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd MMMM D')}
                        </div>

                        <div className="cart-item-details-grid">
                            <img className="product-image"
                                src={cartItem.product.image} />

                            <div className="cart-item-details">
                                <div className="product-name">
                                    {cartItem.product.name}
                                </div>
                                <div className="product-price">
                                    {formatMoney(cartItem.product.priceCents)}
                                </div>
                                <div className="product-quantity">
                                    <span>
                                        Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                                    </span>
                                    <span className="update-quantity-link link-primary" onClick={updateCartItem}>
                                        Update
                                    </span>
                                    <span className="delete-quantity-link link-primary" onClick={deleteCartItem}>
                                        Delete
                                    </span>
                                </div>
                            </div>
                            < DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} fetchCartData={fetchCartData} />
                        </div>
                    </div>
                );
            })}



        </div>
    );
}