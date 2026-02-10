"use client";
import {
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiShoppingBag,
} from "react-icons/fi";
import Button from "../ui/button";
import { useState } from "react";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { Product } from "@/app/types";
import { useRouter } from "next/navigation";


type  TProductActionProps = {
  product: Product; 
  stock: number;
}

const ProductsActions = ({product, stock}: TProductActionProps) => {
  const [qty, setQty] = useState(1);
  const {addItem} = useCartStore();
  const {push} = useRouter();

  const handleAddToCart = () => {
    addItem(product, qty);
  }
  


  return (
    <div className="flex gap-5">
      <div className="border border-gray-300 inline-flex w-fit min-w-20 5">
        <div className="aspect-square text-xl font-medium border-r border-gray-500 flex justify-center items-center">
          <span>{qty}</span>
        </div>
        <div className="flex flex-col">
          <button
            className="boder-b border-gray-500 cursor-pointer h-1/2 aspect-square flex items-center justify-center"
            onClick={() => setQty(qty < stock? qty + 1 : qty)}
          >
            <FiChevronUp />
          </button>
          <button
            className="cursor-pointer h-1/2 aspect-square flex items-center justify-center"
            onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
          >
            <FiChevronDown />
          </button>
        </div>
      </div>

      <Button className="px-20 w-full" onClick={handleAddToCart}>
        <FiShoppingBag size={24 }>Add to Cart</FiShoppingBag>
      </Button>
      <Button variant="dark" className="px-20 w-full" onClick={() => push("/checkout")}>
        Checkout Now
        <FiArrowRight size={24} />
      </Button>
    </div>
  );
};

export default ProductsActions;
