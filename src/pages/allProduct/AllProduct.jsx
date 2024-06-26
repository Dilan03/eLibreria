import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import Loader from "../../components/loader/Loader";
import Category from "../../components/category/Category";

const AllProduct = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const { loading, getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        // console.log(item)
        dispatch(addToCart(item));
        toast.success("Añadido")
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Eliminado")
    }

    // console.log(cartItems)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
    return (
        <Layout>
            <div className="py-8">
                {/* Heading  */}
                <div className="">
                    <h1 className=" text-center mb-5 text-2xl font-semibold">Todos los productos</h1>
                </div>

                {/* main  */}
                <section className="text-gray-600 body-font flex">
                    <Category />
                    <div className="container px-5 lg:px-0 py-5 mx-auto">
                        <div className="flex justify-center">
                            {loading && <Loader />}
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {getAllProduct.map((item, index) => {
                                const { id, title, price, productImageUrl } = item
                                return (
                                    <div key={index} className="p-4 w-full md:w-1/4">
                                        <div className="h-full border border-gray-300 overflow-hidden shadow-md cursor-pointer">
                                            <img
                                                onClick={() => navigate(`/productinfo/${id}`)}
                                                className="lg:h-90  h-96 w-full"
                                                src={productImageUrl}
                                                alt="blog"
                                            />
                                            <div className="p-6">
                                                <h1 className="title-font text-2xl font-Bitter font-semibold text-brown-dark mb-3">
                                                    {title.substring(0, 25)}
                                                </h1>
                                                <h1 className="title-font text-l font-Bitter font-semibold text-black mb-3">
                                                    ${price}
                                                </h1>

                                                <div
                                                    className="flex justify-center ">
                                                    {cartItems.some((p) => p.id === item.id)

                                                        ?
                                                        <button
                                                            onClick={() => deleteCart(item)}
                                                            className=" list-none font-Bitter font-semibold text-trueWite bg-blue inline-block text-2xl py-1 px-3">
                                                            Elimniar del carrito
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
        </Layout>
    );
}

export default AllProduct;