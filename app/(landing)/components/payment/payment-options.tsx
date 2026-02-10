import { FiCreditCard } from "react-icons/fi";
import CartWithHeader from "../ui/cart-with-header";
import { getAllBank } from "../../services/bank.service";


const PaymentOptions = async() => {
      const banks = await getAllBank();
    return (
    <CartWithHeader title="Payment Options">
        {banks.map((payment, index) => {
            return (
<div className="flex gap-5" key={index}>
                    <div className="bg-blue-100 p-4 text-blue-500 border-b border-gray-100">
                        <FiCreditCard size={20}/>
                    </div>
                    <div className="self-center">
                        <div className="font-bold">{payment.bankName}</div>
                        <div className="text-sm">{payment.accountNumber}</div>
                        <div className="text-sm opacity-70">{payment.accountName}</div>
                    </div>
                    <div className="ml-auto bg-blue-50 text-gray-800 text-xs h-fit self-center px-2 py-1">
                        Bank Transfer
                    </div>
                </div>
            )
                
            

            })} 
    </CartWithHeader>
 );
}


export default PaymentOptions;