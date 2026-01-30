import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  variant: string;
  price: number | 'TBD';
  quantity: number;
  image: string;
  customWeight?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, variant: string) => void;
  updateQuantity: (id: string, variant: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number | 'TBD'; // ✅ can now be TBD
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === item.id && i.variant === item.variant
      );

      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.variant === item.variant
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }

      return [...prev, item];
    });
  };

  const removeItem = (id: string, variant: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.id === id && i.variant === variant))
    );
  };

  const updateQuantity = (id: string, variant: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id, variant);
      return;
    }

    setItems((prev) =>
      prev.map((i) =>
        i.id === id && i.variant === variant ? { ...i, quantity } : i
      )
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  // ⭐ NEW TOTAL LOGIC
  const totalPrice: number | 'TBD' = (() => {
    const hasTBD = items.some((item) => item.price === 'TBD');
    if (hasTBD) return 'TBD';

    return items.reduce((sum, item) => {
      if (typeof item.price === 'number') {
        return sum + item.price * item.quantity;
      }
      return sum;
    }, 0);
  })();

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
