import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import { Trash } from 'lucide-react'
import { decrementQuantity, deleteFromCart, incrementQuantity } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import myContext from "../../context/myContext";
import { useEffect, useState, useContext, } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import BuyNowModal from "../../components/buyNowModal/BuyNowModal";
import { Navigate } from "react-router";

const CartPage = () => {
    const context = useContext(myContext);
    const { productDecrementStock } = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete cart")
    }

    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id));
    };

    // const cartQuantity = cartItems.length;

    const cartItemTotal = cartItems.map(item => item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);
    //const ItemStock = cartItems.map(item => item.stock).reduce((prevValue, currValue) => prevValue + currValue, 0);
    const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

    // user
    const user = JSON.parse(localStorage.getItem('users'))

    // Buy Now Function
    const [addressInfo, setAddressInfo] = useState({
        name: user.name,
        address: "",
        pincode: "",
        mobileNumber: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });

    const buyNowFunction = () => {
        // validation 
        if (addressInfo.name === "" || addressInfo.address === "" || addressInfo.pincode === "" || addressInfo.mobileNumber === "") {
            return toast.error("todos los campos son requridos")
        }

        // Order Info 
        const orderInfo = {
            cartItems,
            addressInfo,
            email: user.email,
            userid: user.uid,
            status: "Pendiente",
            time: Timestamp.now(),
            date: new Date().toLocaleString(
                "en-US",
                {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                }
            )
        }
        try {
            const orderRef = collection(fireDB, 'order');
            addDoc(orderRef, orderInfo);
            setAddressInfo({
                name: "",
                address: "",
                pincode: "",
                mobileNumber: "",
            })
            cartItems.map((item) => {
                const { id, quantity } = item
                productDecrementStock(id, quantity)
            })
            toast.success("Pedido realizado exitosamente")
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Layout>
            <div className="container mx-auto px-4 max-w-7xl lg:px-0">
                <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                    <h1 className="text-3xl font-Bitter font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Carrito de compra
                    </h1>
                    <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                        <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
                            <ul role="list" className="divide-y divide-gray-200">
                                {cartItems.length > 0 ?

                                    <>
                                        {cartItems.map((item, index) => {
                                            const { id, title, price, productImageUrl, quantity } = item

                                            return (
                                                <div key={index} className="">
                                                    <li className="flex py-8 sm:py-10 border-b border-brown-dark">
                                                        <div className="flex-shrink-0 bg-gray-500 border border-gray-800">
                                                            <img
                                                                src={productImageUrl}
                                                                alt="img"
                                                                className="sm:h-38 sm:w-38 h-40 w-40 rounded-md object-contain object-center"
                                                            />
                                                        </div>

                                                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                                            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                                <div>
                                                                    <div className="flex justify-between">
                                                                        <h3 className="font-Bitter font-semibold text-3xl mb-6">
                                                                            <div className="font-semibold text-black">
                                                                                {title}
                                                                            </div>
                                                                        </h3>
                                                                    </div>
                                                                    <div className="mt-1 flex items-end ">
                                                                        <p className="text-2xl font-medium text-blue font-Bitter">
                                                                            ${price}
                                                                        </p>
                                                                    </div>
                                                                    <div className="mb-2 flex">
                                                                        <div className="min-w-24 flex">
                                                                            <button onClick={() => handleDecrement(id)} type="button" className="h-7 w-7" >
                                                                                -
                                                                            </button>
                                                                            <input
                                                                                type="text"
                                                                                className="mx-1 h-7 w-9 rounded-md border text-center"
                                                                                value={quantity}
                                                                            />
                                                                            <button onClick={() => handleIncrement(id)} type="button" className="flex h-7 w-7 items-center justify-center">
                                                                                +
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex text-sm ">
                                                                        <button onClick={() => deleteCart(item)} type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
                                                                            <Trash size={12} className="text-red" />
                                                                            <span className="text-xs font-medium text-red">Quitar</span>
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </li>
                                                </div>
                                            )
                                        })}
                                    </>
                                    :

                                    <h1>No ha añadido productos</h1>}
                            </ul>
                        </section>
                        {/* Order summary */}
                        <section
                            aria-labelledby="summary-heading"
                            className="mt-16 border-brown-dark border-2 bg-white lg:col-span-4 lg:mt-0 lg:p-5 p-5"
                        >
                            <h2
                                id="summary-heading"
                                className="font-Bitter border-b border-brown-dark px-4 py-3 text-lg font-bold text-gray-900 sm:p-4"
                            >
                                Total de la orden
                            </h2>
                            <div>
                                <dl className=" space-y-1 px-2 py-4">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm text-black font-Bitter">Subtotal ({cartItemTotal} productos)</dt>
                                        <dd className="text-sm font-medium text-black font-Bitter">$ {cartTotal}</dd>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <dt className="flex text-sm text-black font-Bitter">
                                            <span>Envío</span>
                                        </dt>
                                        <dd className="text-sm font-medium text-green-700">$0</dd>
                                    </div>
                                    <div className="flex items-center justify-between border-y border-dashed py-4 ">
                                        <dt className="text-base font-medium text-black font-Bitter">Total</dt>
                                        <dd className="text-base font-medium text-black font-Bitter">$ {cartTotal}</dd>
                                    </div>
                                </dl>
                                <div className="px-2 pb-4 font-medium text-green-700">
                                    <div className="list-none font-Bitter font-semibold text-trueWite bg-red inline-block text-4xl py-1 px-3 w-full">
                                        {user
                                            ? <BuyNowModal
                                                addressInfo={addressInfo}
                                                setAddressInfo={setAddressInfo}
                                                buyNowFunction={buyNowFunction}
                                            /> : <Navigate to={'/login'} />
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default CartPage;


