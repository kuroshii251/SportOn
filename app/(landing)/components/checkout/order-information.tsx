import React from "react";
import CartWithHeader from "../ui/cart-with-header";
import { CustomerInfo } from "@/app/hooks/use-cart-store";

type TOrderInformation = {
    formData: CustomerInfo;
    setFormData: React.Dispatch<React.SetStateAction<CustomerInfo>>;
}

const OrderInformation = ({formData, setFormData} : TOrderInformation) => {
     const handleInputChange = (e:React.ChangeEvent<HTMLInputElement |  HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name] : e.target.value});
    }
    
  
   
    return (
       <CartWithHeader title="Order Information">
         <div className="bg-white">
            <div className="p-5 py-4 border-b border-gray-200">
                <h2 className="font-bold text-lg">
                    Order Information
                </h2>
            </div>
            <div className="p-5">
                <div className="input-group">
                    <label htmlFor="customerName">Full Name</label>
                    <input type="text" placeholder="Type your full name" id="customerName" name="customerName" onChange={handleInputChange} value={formData.customerName ?? ""} />
                </div>
              <div className="input-group">
                    <label htmlFor="customerContact">Whatsapp Number</label>
                    <input type="text" placeholder="Type your Whatsapp Number" id="customerContact" name="customerContact" onChange={handleInputChange} value={formData.customerContact ?? ""} />
                </div>

                <div className="input-group">
                    <label htmlFor="customerAddress">Shipping Address</label>
                    <textarea placeholder="Type your shipping address" id="customerAddress" name="customerAddress" onChange={handleInputChange} value={formData.customerAddress ?? ""} rows={7}/>
                </div>
            </div>
        </div>
       </CartWithHeader>
    )

}

export default OrderInformation;