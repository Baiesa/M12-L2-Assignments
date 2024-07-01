import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../features/productsSlice';

const ShoppingCart = ({ cartItems }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    cartItems.forEach((itemId) => {
      dispatch(fetchProductById(itemId));
    });
  }, [cartItems, dispatch]);

  return (
    <div>
      {products.status === 'loading' && <p>Loading...</p>}
      {products.status === 'failed' && <p>Error: {products.error}</p>}
      {products.status === 'succeeded' && (
        <ul>
          {cartItems.map((itemId) => (
            <li key={itemId}>{products[itemId].title} - ${products[itemId].price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;