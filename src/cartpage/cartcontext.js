// --- START OF FILE cartcontext.js ---

import React, { createContext, useState } from 'react'; // Removed useContext as it's not needed in the provider definition itself

// Create the Context
export const CartContext = createContext();

// Create a Provider component
export const CartProvider = ({ children }) => {
    // Change this line: Initialize cartItems as an empty array
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                // If item exists, increase quantity
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // If item is new, add it with quantity 1
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const increaseQuantity = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            ).filter(item => item.quantity > 0)
        );
    };

    const removeItem = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};