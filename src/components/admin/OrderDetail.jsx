import { useContext } from "react";
import myContext from "../../context/myContext";

const OrderDetail = () => {
    const context = useContext(myContext);
    const { getAllOrder, orderDelete, orderEnviar, orderCancelar } = context;

    // console.log(getAllOrder)
    return (
        <div className="">
            <div className="bg-white">
                <div className="py-5 flex justify-between items-center">
                    {/* text  */}
                    <h1 className=" text-xl text-pink-300 font-bold">Todos los pedidos</h1>
                </div>

                {/* table  */}
                <div className="w-full overflow-x-auto mb-[100px]">
                    <table className="max-w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400" >
                        <tbody>
                            <tr>
                                <th scope="col" className="h-12 px-2 text-sm border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">
                                    No.
                                </th>

                                <th scope="col"
                                    className="h-12 px-2 text-sm font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                    Id del pedido
                                </th>

                                <th scope="col"
                                    className="h-12 px-2 text-sm font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                    Imagen
                                </th>

                                <th scope="col"
                                    className="h-12 px-2 text-sm font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                    Titulo
                                </th>

                                <th scope="col"
                                    className="h-12 px-2 text-sm font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                    Género
                                </th>

                                <th scope="col"
                                    className="h-12 px-2 text-sm font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                    Precio
                                </th>

                                <th scope="col"
                                    className="h-12 px-2 text-sm font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                    Cantidad
                                </th>

                                <th scope="col"
                                    className="h-12 px-2 text-sm font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                    Total
                                </th>

                                <th scope="col"
                                    className="h-12 px-2 text-sm font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                    Estatus
                                </th>

                                <th scope="col"
                                    className="h-12 px-2 text-sm font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                    Comprador
                                </th>

                                <th scope="col"
                                    className="h-12 px-2 text-sm font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                    Dirección
                                </th>

                                <th scope="col"
                                    className="h-12 px-2 text-sm font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                    C.Postal
                                </th>

                                <th scope="col"
                                    className="h-12 px-2 text-sm font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                    Tarjeta
                                </th>

                                <th scope="col"
                                    className="h-12 px-2 text-sm font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                    Email
                                </th>

                                <th scope="col"
                                    className="h-12 px-2 text-sm font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                    Fecha
                                </th>

                                <th scope="col"
                                    className="h-12 px-2 text-sm font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                    Acción
                                </th>


                            </tr>
                            {getAllOrder.map((order, index) => {
                                console.log(order)
                                return (
                                    <>
                                        {order.cartItems.map((item) => {
                                            const { productImageUrl, title, category, price, quantity, id } = item
                                            return (
                                                <tr key={index} className="text-pink-300 font-sm">
                                                    <td className="h-12 px-2 text-sm transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 ">
                                                        {index + 1}
                                                    </td>

                                                    <td className="h-12 px-2 text-sm transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500">
                                                        {order.id}
                                                    </td>

                                                    <td className="h-12 px-2 text-sm transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        <img className="h-10" src={productImageUrl} alt="img" />
                                                    </td>

                                                    <td className="h-12 px-2 text-sm transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        {title}
                                                    </td>

                                                    <td className="h-12 px-2 text-sm transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        {category}
                                                    </td>

                                                    <td className="h-12 px-2 text-sm transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        ${price}
                                                    </td>

                                                    <td className="h-12 px-2 text-sm transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        {quantity}
                                                    </td>

                                                    <td className="h-12 px-2 text-sm transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        ${price * quantity}
                                                    </td>

                                                    <td className={`h-12 px-2 text-sm transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ${order.status === 'Pendiente' ? 'text-orange-600' : order.status === 'Enviado' ? 'text-green-600' : 'text-gray-600'} `}>
                                                        {order.status}
                                                    </td>

                                                    <td className="h-12 px-2 text-sm transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        {order.addressInfo.name}
                                                    </td>

                                                    <td className="h-12 px-2 text-sm transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        {order.addressInfo.address}
                                                    </td>

                                                    <td className="h-12 px-2 text-sm transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        {order.addressInfo.pincode}
                                                    </td>

                                                    <td className="h-12 px-2 text-sm transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        {order.addressInfo.mobileNumber}
                                                    </td>

                                                    <td className="h-12 px-2 text-sm transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 ">
                                                        {order.email}
                                                    </td>

                                                    <td className="h-12 px-2 text-sm transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        {order.date}
                                                    </td>

                                                    <td onClick={() => orderEnviar(order.id)} className="h-12 px-2 text-sm transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-green-600 cursor-pointer ">
                                                        Enviar
                                                    </td>

                                                    <td onClick={() => orderCancelar(order.id, id)} className="h-12 px-2 text-sm transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-brown-dark cursor-pointer ">
                                                        Cancelar
                                                    </td>

                                                    <td onClick={() => orderDelete(order.id)} className="h-12 px-2 text-sm transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-red font bold cursor-pointer ">
                                                        Eliminar
                                                    </td>

                                                </tr>
                                            )
                                        })}
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;
