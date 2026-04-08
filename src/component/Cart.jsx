
const Cart = ({carts}) => {
    console.log(carts)
    return (
        <div>
            <div className="className">
                {
                carts.map( item=>
                    <div className="bg-amber-200" key={item.id}>
                        {item.title}
                    </div>
                )
                }
            </div>
        </div>
    );
};

export default Cart;