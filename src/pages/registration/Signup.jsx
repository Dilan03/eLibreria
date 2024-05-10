/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const Signup = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    });

    /**========================================================================
     *                          User Signup Function 
    *========================================================================**/

    const userSignupFunction = async () => {
        // validation 
        if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
            toast.error("All Fields are required")
        }

        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            // create user object
            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
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

            // create user Refrence
            const userRefrence = collection(fireDB, "user")

            // Add User Detail
            addDoc(userRefrence, user);

            setUserSignup({
                name: "",
                email: "",
                password: ""
            })

            toast.success("Signup Successfully");

            setLoading(false);
            navigate('/login')
        } catch (error) {
            console.log(error);
            setLoading(false);
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
                        Signup
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3">
                    <span className="flex flex-col">
                        <label htmlFor="email" className="font-Bitter font-semibold text-brown-dark">Nombre de usuario</label>
                        <input
                            type="text"
                            placeholder='Ingresa tu nombre de usuario'
                            value={userSignup.name}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    name: e.target.value
                                })
                            }}
                            className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 outline-none placeholder-pink-200 mb-8'
                        />
                    </span>
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <span className="flex flex-col">
                        <label htmlFor="email" className="font-Bitter font-semibold text-brown-dark">Correo electronico</label>
                        <input
                            type="email"
                            placeholder='Ingresa tu correo'
                            value={userSignup.email}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    email: e.target.value
                                })
                            }}
                            className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 outline-none placeholder-pink-200 mb-8'
                        />
                    </span>
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <span className="flex flex-col">
                        <label htmlFor="email" className="font-Bitter font-semibold text-brown-dark">Contraseña</label>
                        <input
                            type="password"
                            placeholder='Contraseña'
                            value={userSignup.password}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    password: e.target.value
                                })
                            }}
                            className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 outline-none placeholder-pink-200 mb-8'
                        />
                    </span>
                </div>

                {/* Signup Button  */}
                <div className="mb-5 mx-auto w-1/2">
                    <button
                        type='button'
                        onClick={userSignupFunction}
                        className='font-Bitter font-semibold text-trueWite bg-red inline-block text-2xl px-3 hover:bg-pink-600 w-full text-center py-2'
                    >
                        Crear Cuenta
                    </button>
                </div>

                <div>
                    <h2 className='font-Bitter font-regular text-brown-dark'>Tienes cuenta? <Link className='font-Bitter font-semibold text-brown-dark my-4' to={'/login'}>Login</Link></h2>
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

export default Signup;
