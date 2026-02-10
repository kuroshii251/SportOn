"use client";

import Image from "next/image";
import Button from "../ui/button";
import { FiRefreshCw } from "react-icons/fi";

const OrderConfirmed = () => {
  return (
    <div className="bg-white w-160 p-16 flex flex-col justify-center mx-auto">
      <Image
        src={"/images/icon-order-confirmed.svg"}
        width={117}
        height={117}
        alt="Order Submitted"
        className="mb-4"
      >
        <h2 className="text-2xl font-semibold mb-2">Order Submitted!</h2>
        <p className="text-center mb-8">
          Your Order is recorded by our system, we are still confirming the
          payment status, please wait and your order will be updated in less
          than 12 hours.
        </p>
        <Button variant="dark" className="w-full">
          <FiRefreshCw />
          Refresh Order Status
        </Button>
      </Image>
    </div>
  );
};

export default OrderConfirmed;