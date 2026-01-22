import { FiCreditCard } from "react-icons/fi";
import CartWithHeader from "../ui/cart-with-header";

const paymentList = [
    {
 bank_name: "BCA",
    account_number: 1231231231231,
    account_holder: "PT SportsOn Digital"
    },
    {
 bank_name: "Mandiri",
    account_number: 1231231231231,
    account_holder: "PT SportsOn Digital"
    },
    {
 bank_name: "BRI",
    account_number: 1231231231231,
    account_holder: "PT SportsOn Digital"
    },

   
]

const PaymentOptions = () => {
    return (
    <CartWithHeader title="Payment Options">
        {paymentList.map((payment, index) => {
            return (
<div className="flex gap-5" key={index}>
                    <div className="bg-blue-100 p-4 text-blue-500 border-b border-gray-100">
                        <FiCreditCard size={20}/>
                    </div>
                    <div className="self-center">
                        <div className="font-bold">{payment.bank_name}</div>
                        <div className="text-sm">{payment.account_number}</div>
                        <div className="text-sm opacity-70">{payment.account_holder}</div>
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