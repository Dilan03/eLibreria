/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Login = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    /**========================================================================
     *                          User Login Function 
    *========================================================================**/

    const userLoginFunction = async () => {
        // validation 
        if (userLogin.email === "" || userLogin.password === "") {
            toast.error("All Fields are required")
        }

        setLoading(true);
        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
            // console.log(users.user)

            try {
                const q = query(
                    collection(fireDB, "user"),
                    where('uid', '==', users?.user?.uid)
                );
                const data = onSnapshot(q, (QuerySnapshot) => {
                    let user;
                    QuerySnapshot.forEach((doc) => user = doc.data());
                    localStorage.setItem("users", JSON.stringify(user))
                    setUserLogin({
                        email: "",
                        password: ""
                    })
                    toast.success("Login Successfully");
                    setLoading(false);
                    if (user.role === "user") {
                        navigate('/user-dashboard');
                    } else {
                        navigate('/admin-dashboard');
                    }
                });
                return () => data;
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Login Failed");
        }

    }
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            {loading && <Loader />}
            {/* Login Form  */}
            <div className="login_Form bg-pink px-16 py-8 border border-pink-100 shadow-md mb-[50px]">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-4xl font-Bitter font-semibold text-brown-dark pb-10'>
                        Login
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3">
                    <span className="flex flex-col">
                        <label htmlFor="email" className="font-Bitter font-semibold text-brown-dark">Correo electronico</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder='Ingresa tu correo'
                            value={userLogin.email}
                            onChange={(e) => {
                                setUserLogin({
                                    ...userLogin,
                                    email: e.target.value
                                })
                            }}
                            className='bg-pink-50 border border-pink-200 px-2 py-2 w-96  outline-none placeholder-pink-200 mb-8'
                        />
                    </span>
                </div>

                {/* Input Two  */}
                <div className="mb-5">
                    <span className="flex flex-col">
                        <label htmlFor="password" className="font-Bitter font-semibold text-brown-dark">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            placeholder='Ingresa tu contraseña'
                            value={userLogin.password}
                            onChange={(e) => {
                                setUserLogin({
                                    ...userLogin,
                                    password: e.target.value
                                })
                            }}
                            className='bg-pink-50 border border-pink-200 px-2 py-2 w-96  outline-none placeholder-pink-200 mb-8'
                        />
                    </span>
                </div>

                {/* Signup Button  */}
                <div className="mb-5 mx-auto w-1/2 ">
                    <button
                        type='button'
                        onClick={userLoginFunction}
                        className='font-Bitter font-semibold text-trueWite bg-red inline-block text-2xl px-3 hover:bg-pink-600 w-full text-center py-2'
                    >
                        Login
                    </button>
                </div>

                <div className="">
                    <h2 className='font-Bitter font-regular text-brown-dark'>No tienes una cuenta? <Link className='font-Bitter font-semibold text-brown-dark my-4' to={'/signup'}>Registrarse</Link></h2>
                </div>

            </div>
            <div className="relative flex justify-between w-full">
                <img className="absolute h-[150px] left-40 bottom-6" src="../img/pila_libros1.png" alt="" />
                <img className="absolute h-[350px] right-20 bottom-0" src="../img/monillo1.png" alt="" />
            </div>
            <div className="border-b border-brown-dark w-full "></div>
        </div>
    );
}

export default Login;

