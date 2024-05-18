/* eslint-disable react/no-unescaped-entities */
import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, setDoc, doc, getDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";


const UpdateUserInfo = () => {
   const context = useContext(myContext);
   const { loading, setLoading } = context;
   const user = JSON.parse(localStorage.getItem('users'));

   const { id } = useParams()
   console.log(id)
   // navigate 
   const navigate = useNavigate();

   // User Signup State 
   const [userUpdated, setUserSignup] = useState({
      name: "",
      email: "",
      role: "user",
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

   const getSingleUser = async () => {
      try {
         const userUpdatedTemp = await getDoc(doc(fireDB, "user", user.uid))
         console.log(userUpdatedTemp.data())
         const userUpdated = userUpdatedTemp.data();
         setUserSignup({
            name: userUpdated?.name,
            email: userUpdated?.email,
            role: userUpdated?.role,
            time: Timestamp.now(),
            date: userUpdated?.date
         });
      } catch (error) {
         console.log(error);
         setLoading(false);
      }
   }

   const updateUser = async () => {
      navigate('/')
   }



   useEffect(() => {
      getSingleUser();
   }, []);

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
                     value={userUpdated.name}
                     onChange={(e) => {
                        setUserSignup({
                           ...userUpdated,
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
                     value={userUpdated.email}
                     onChange={(e) => {
                        setUserSignup({
                           ...userUpdated,
                           email: e.target.value
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
                  onClick={updateUser}
                  className='font-Bitter font-semibold text-trueWite bg-red inline-block text-2xl px-3 hover:bg-pink-600 w-full text-center py-2'
               >
                  Confirmar
               </button>
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

export default UpdateUserInfo;
