import type { Dispatch, SetStateAction } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ProductProp extends Product {
  handleAddCart: (cart: CartItem) => void
}

export interface CartCardProps extends CartItem {
  onDelete: (id: string) => void
}

export interface CartContextValue{
  submittedCart: CartItem[]
  setSubmittedCart: Dispatch<SetStateAction<CartItem[]>>
}


export type StyleProp = { style: string }

export type ButttonProp = {
    name: string
    style: string
    handleOperation: () => void
}