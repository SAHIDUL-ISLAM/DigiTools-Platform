import { toast } from "react-toastify";


const Cart = ({carts, setCarts}) => {
    const totalPrice = carts.reduce((sum, item) => sum + Number(item.price), 0);
    const handlePayment = () => {
        setCarts([]);
        toast.success("Payment Successfully! Thank You :)")
    }
    const handleDelete = (item)=> {
        const filterdArray = carts.filter(c => c.id !== item.id)
        setCarts(filterdArray)
        toast.success("Item Deleted From Cart!")
    }

    
    return (
        <div className="flex items-center justify-center pb-4 px-4 my-8">
            <div className="card w-full max-w-2xl bg-white shadow-sm border border-gray-100 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Your Cart</h2>
                {
                    carts.length ===0 ? <h2 className="text-center text-3xl">Cart is Empty</h2>: 
                    <>
                                    {
                carts.map( item=>
                    <div key={item.id}>
                        <div className="">
                            <div className="">
                            <div className="space-y-4">
                            
                            <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl mb-5">
                                <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 text-2xl  text-pink-700">
                                    <i className={item.icon}></i>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-700">{item.title}</h3>
                                    <p className="text-slate-400 text-sm">${item.price}</p>
                                </div>
                                </div>
                                <button onClick={()=> handleDelete(item)} className="btn btn-ghost btn-sm text-secondary normal-case hover:bg-transparent">Remove</button>
                            </div>

                            </div>
                            
                        </div>
                        </div>
                    </div>
                )
                }
                <div className="mt-10 flex justify-between items-end mb-6">
                    <span className="text-slate-400 font-medium">Total:</span>
                    <span className="text-3xl font-bold text-slate-800">{totalPrice}</span>
                </div>

                <button onClick={handlePayment} className="btn btn-primary w-full rounded-full border-none bg-[#7C2DFF] hover:bg-[#6b21eb] text-white normal-case text-lg h-14">Proceed To Checkout</button>
                    </>
                }

            </div>
        </div>
    );
};

export default Cart;