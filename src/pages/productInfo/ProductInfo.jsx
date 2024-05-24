import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import { useParams } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const ProductInfo = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [product, setProduct] = useState('')
    // console.log(product)

    const { id } = useParams()

    // console.log(product)

    // getProductData
    const getProductData = async () => {
        setLoading(true)
        try {
            const productTemp = await getDoc(doc(fireDB, "products", id))
            // console.log({...productTemp.data(), id : productTemp.id})
            setProduct({ ...productTemp.data(), id: productTemp.id })
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

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


    useEffect(() => {
        getProductData()

    }, [])
    return (
        <Layout>
            <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800">
                {loading ?
                    <>
                        <div className="flex justify-center items-center">
                            <Loader />
                        </div>
                    </>

                    :

                    <>
                        <div className="max-w-6xl px-4 mx-auto">
                            <div className="flex flex-wrap mb-24 -mx-4">
                                <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                                    <div className="">
                                        <div className="w-full lg:h-[39em] rounded-lg bg-gray-400 px-10 py-5">
                                            <img
                                                className=" lg:h-full mx-auto"
                                                src={product?.productImageUrl}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2">
                                    <div className="lg:pl-20">
                                        <div className="mb-6 ">
                                            <h2 className="max-w-xl mb-6 text-4xl font-semibold font-Bitter leading-loose tracking-wide text-black md:text-5xl dark:text-gray-300 mt-20">
                                                {product?.title}
                                            </h2>
                                            <h3 className="max-w-xl mb-6 text-l font-regular font-Lustria leading-loose tracking-wide text-gray-500 md:text-3xl dark:text-gray-300">
                                                {product?.category}
                                            </h3>
                                            <h3 className="max-w-xl mb-6 text-2xl font-regular font-Lustria leading-loose tracking-wide text-gray-800 md:text-3xl dark:text-gray-700">
                                                {product?.autor}
                                            </h3>
                                            <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                                                <span className="text-3xl font-bold text-red font-Bitter">$ {product?.price}</span>
                                            </p>
                                        </div>


                                        <div className="mb-6 " />
                                        <div className="flex flex-wrap items-center mb-6">
                                            {cartItems.some((p) => p.id === product.id)
                                                ?
                                                <button
                                                    onClick={() => deleteCart(product)}
                                                    className="list-none font-Bitter font-semibold text-trueWite bg-blue inline-block text-2xl py-1 px-3"
                                                >
                                                    Eliminar del carrito
                                                </button>
                                                :
                                                <button
                                                    onClick={() => addCart(product)}
                                                    className="list-none font-Bitter font-semibold text-trueWite bg-blue inline-block text-2xl py-1 px-3"
                                                >
                                                    Añadir al carrito
                                                </button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2 className="mb-2 text-lg font-bold text-black font-Bitter dark:text-gray-400">
                                Acerca del libro
                            </h2>
                            <div className="mb-6 container rounded-lg text-black px-8 py-5 mx-auto font-Bitter font-regular bg-gray-400">
                                <p>{product?.description}</p>
                            </div>
                        </div>
                    </>}
            </section>

        </Layout>
    );
}

export default ProductInfo;
