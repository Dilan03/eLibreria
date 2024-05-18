
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProductDetail from '../../components/admin/ProductDetail';
import OrderDetail from '../../components/admin/OrderDetail';
import UserDetail from '../../components/admin/UserDetail';
import OverView from '../../components/admin/Overview';
import Navbar from "../../components/navbar/Navbar";


const AdminDashboard = () => {


    return (
        <>
            <div className="">
                <div className="bg-white">
                    <Navbar />


                    <div className="px-5">
                        {/* Mid  */}

                        {/* Bottom */}
                        <div className="">
                            <Tabs className="flex">
                                <TabList className="flex flex-col text-center justify-center">

                                    <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer flex">
                                        <div className="border bg-gray-300 border-brown-dark px-4 py-2 rounded-xl flex mr-10" >
                                            <div className="text-pink-500 h-12 mb-3 flex w-[150px]" >
                                                <img src="../img/home.svg" alt="" />
                                                <p className=" text-brown-dark font-Bitter font-bold mt-3 mx-2" >Home</p>
                                            </div>
                                        </div>
                                    </Tab>
                                    {/* Total Products */}
                                    <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer flex">
                                        <div className="border bg-gray-300 border-brown-dark px-4 py-2 rounded-xl flex mr-10" >
                                            <div className="text-pink-500 h-12 mb-3 flex w-[150px]" >
                                                <img src="../img/inventario.svg" alt="" />
                                                <p className=" text-brown-dark font-Bitter font-bold mt-3 mx-2" >Inventario</p>
                                            </div>
                                        </div>
                                    </Tab>

                                    {/* Total Order  */}
                                    <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer flex">
                                        <div className=" border bg-gray-300 border-brown-dark px-4 py-2 rounded-xl flex mr-10 " >
                                            <div className="text-pink-500 h-12 mb-3 flex w-[150px]" >
                                                <img src="../img/pedidos.svg" alt="" />
                                                <p className=" text-brown-dark font-Bitter font-bold mt-4 mx-2" >Pedidos</p>
                                            </div>
                                        </div>
                                    </Tab>

                                    {/* Total User  */}
                                    <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer flex">
                                        <div className="border bg-gray-300 border-brown-dark px-4 py-2 rounded-xl flex mr-10" >
                                            <div className="text-pink-500 h-12 mb-3 flex w-[150px]" >
                                                <img src="../img/usuarios.svg" alt="" />
                                                <p className="text-brown-dark font-Bitter font-bold mt-3 mx-2" >Usuarios</p>
                                            </div>
                                        </div>
                                    </Tab>
                                </TabList>
                                <span className="max-w-[1100px]">
                                    <TabPanel>
                                        <OverView />
                                    </TabPanel>

                                    <TabPanel>
                                        <ProductDetail />
                                    </TabPanel>

                                    <TabPanel>
                                        <OrderDetail />
                                    </TabPanel>

                                    <TabPanel>
                                        <UserDetail />
                                    </TabPanel>

                                </span>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminDashboard;
