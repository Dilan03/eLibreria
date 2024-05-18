import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect } from "react";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";


const HomePageProductCard = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const { loading, getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);

    // console.log(cartItems);

    const dispatch = useDispatch();

    // add to cart function
    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Añadido")
    }


    // delete from cart function
    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Eliminado")
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <div className="mt-5">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Best Sellers</h1>
            </div>

            {/* main 1 */}
            <section className="text-gray-600 body-font">
                {/* main 2 */}
                <div className="container px-5 py-5 mx-auto">

                    <div className="flex justify-center">
                        {loading && <Loader />}
                    </div>
                    {/* main 3  */}
                    <div className="flex flex-wrap -m-4">
                        {getAllProduct.slice(0, 5).map((item, index) => {
                            const { id, title, price, productImageUrl } = item;
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 overflow-hidden shadow-md cursor-pointer">
                                        <img
                                            onClick={() => navigate(`/productinfo/${id}`)}
                                            className="lg:h-90  h-96 w-full"
                                            src={productImageUrl}
                                            alt="img"
                                        />
                                        <div className="p-6">
                                            <h1 className="title-font text-2xl font-Bitter font-semibold text-brown-dark mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-l font-Bitter font-semibold text-black mb-3">
                                                ${price}
                                            </h1>

                                            <div className="flex justify-center ">
                                                {cartItems.some((p) => p.id === item.id)

                                                    ?
                                                    <button
                                                        onClick={() => deleteCart(item)}
                                                        className="list-none font-Bitter font-semibold text-trueWite bg-blue inline-block text-2xl py-1 px-3">

                                                        Eliminar del carrito
                                                    </button>

                                                    :

                                                    <button
                                                        onClick={() => addCart(item)}
                                                        className="list-none font-Bitter font-semibold text-trueWite bg-red inline-block text-2xl py-1 px-3 ">
                                                        Añadir al carrito
                                                    </button>

                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageProductCard;