import React, { createContext, useState, type ReactNode } from 'react';

interface MenuItem {
  menuItemId: string;
  name: string;
  price: number;
  quantity?: number;
}

interface CartContextType {
  cartItems: MenuItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {}
});

interface Props {
  children: ReactNode;
}

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useState<MenuItem[]>([]);

  const addToCart = (item: MenuItem) => {
    const existing = cartItems.find(i => i.menuItemId === item.menuItemId);
    if (existing) {
      setCartItems(cartItems.map(i => i.menuItemId === item.menuItemId ? { ...i, quantity: (i.quantity || 1) + 1 } : i));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter(i => i.menuItemId !== id));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
