import { useContext } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router";

const OverView = () => {
   const user = JSON.parse(localStorage.getItem('users'));
   const context = useContext(myContext);
   const { getAllProduct, getAllOrder, getAllUser } = context;
   const navigate = useNavigate();

   // console.log(getAllOrder)
   return (
      <div className="">
         <div className="py-5">
            {/* text  */}
            <h1 className=" text-xl text-pink-300 font-bold">OverView</h1>
         </div>

         <div className="flex justify-between lg:w-[1300px]">
            <div className="bg-white py-10 flex mx-auto">
               <span className="">
                  <div className="border bg-gray-300 border-brown-dark px-4 py-2 rounded-xl flex mr-10 my-10" >
                     <div className="text-pink-500 h-[200px] mb-3 flex w-[300px] justify-center mx-auto" >
                        <span>
                           <p className=" text-brown-dark font-Bitter font-bold mt-3 mx-2 text-2xl" >Todas las pedidos</p>
                           <h2 className="font-Bitter title-font font-bold text-8xl text-red fonts1 mt-2 text-center" >{getAllOrder.length}</h2>
                        </span>
                     </div>
                  </div>
                  <div className="border bg-gray-300 border-brown-dark px-4 py-2 rounded-xl flex mr-10 my-10" >
                     <div className="text-pink-500 h-[200px] mb-3 flex w-[300px] justify-center mx-auto" >
                        <span>
                           <p className=" text-brown-dark font-Bitter font-bold mt-3 mx-2 text-2xl" >Todos los productos</p>
                           <h2 className="font-Bitter title-font font-bold text-8xl text-red fonts1 mt-2 text-center" >{getAllProduct.length}</h2>
                        </span>
                     </div>
                  </div>
               </span>
               <span>
                  <div className="border bg-gray-300 border-brown-dark px-4 py-2 rounded-xl flex mr-10 my-10" >
                     <div className="text-pink-500 h-[200px] mb-3 flex w-[300px] justify-center mx-auto" >
                        <span>
                           <p className=" text-brown-dark font-Bitter font-bold mt-3 mx-2 text-2xl" >Usuarios</p>
                           <h2 className="font-Bitter title-font font-bold text-8xl text-red fonts1 mt-2 text-center" >{getAllUser.length}</h2>
                        </span>
                     </div>
                  </div>
                  <div className="border bg-gray-300 border-brown-dark px-4 py-2 rounded-xl flex mr-10 my-10" >
                     <div className="text-pink-500 h-[200px] mb-3 flex w-[300px] justify-center mx-auto" >
                        <span>
                           <p className=" text-brown-dark font-Bitter font-bold mt-3 mx-2 text-2xl" >Pedidos Enviados</p>
                           <h2 className="font-Bitter title-font font-bold text-8xl text-red fonts1 mt-2 text-center" >{getAllOrder.length}</h2>
                        </span>
                     </div>
                  </div>
               </span>
            </div>
            <div className="relative py-10 px-5 m-5 border border-brown-dark right-0">
               {/* image  */}
               <div className="flex justify-center h-[150px]">
                  <img src="https://www.nicepng.com/png/full/128-1280406_view-user-icon-png-user-circle-icon-png.png" alt="" />
               </div>
               {/* text  */}
               <div className="">
                  {/* Name  */}
                  <h1 className=" text-center text-lg">
                     <span className=" font-bold">Nombre : </span>
                     {user?.name}
                  </h1>

                  {/* Email  */}
                  <h1 className=" text-center text-lg">
                     <span className=" font-bold">Email : </span>
                     {user?.email}
                  </h1>

                  {/* Date  */}
                  <h1 className=" text-center text-lg">
                     <span className=" font-bold">Fecha de registro : </span>
                     {user?.date}
                  </h1>

                  {/* Role  */}
                  <h1 className=" text-center text-lg">
                     <span className=" font-bold">Rol : </span>
                     {user?.role}
                  </h1>

                  <td onClick={() => navigate(`/updateuserinfo/ ${user.uid}`)} className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer ">
                     Edit
                  </td>
               </div>
            </div>


         </div>
      </div>
   );
}

export default OverView;