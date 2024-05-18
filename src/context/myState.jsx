/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import MyContext from './myContext';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc, getDoc } from 'firebase/firestore';
import { fireDB } from '../firebase/FirebaseConfig';
import toast from 'react-hot-toast';

function MyState({ children }) {
    // Loading State 
    const [loading, setLoading] = useState(false);

    // User State
    const [getAllProduct, setGetAllProduct] = useState([]);

    /**========================================================================
     *                          GET All Product Function
     *========================================================================**/

    const getAllProductFunction = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, "products"),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                QuerySnapshot.forEach((doc) => {
                    productArray.push({ ...doc.data(), id: doc.id });
                });
                setGetAllProduct(productArray);
                setLoading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }


    // Order State 
    const [getAllOrder, setGetAllOrder] = useState([]);


    /**========================================================================
     *                           GET All Order Function
     *========================================================================**/

    const getAllOrderFunction = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, "order"),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let orderArray = [];
                QuerySnapshot.forEach((doc) => {
                    orderArray.push({ ...doc.data(), id: doc.id });
                });
                setGetAllOrder(orderArray);
                setLoading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const getOrderById = async (orderId) => {
        try {
            // Obtener referencia al documento con el ID dado
            const orderRef = doc(fireDB, "order", orderId);

            // Obtener los datos del documento
            const orderSnapshot = await getDoc(orderRef);

            // Verificar si el documento existe
            if (orderSnapshot.exists()) {
                // Extraer los datos del documento y agregar el ID
                const orderData = { ...orderSnapshot.data(), id: orderSnapshot.id };
                return orderData;
            } else {
                //console.log("No se encontró ninguna orden con el ID proporcionado");
                return null;
            }
        } catch (error) {
            console.error("Error al obtener la orden:", error);
            throw error;
        }
    };

    const getProductByIdFunction = async (productId) => {
        try {
            // Referencia al documento específico por su ID
            const productRef = doc(fireDB, "products", productId);

            // Obtiene el documento
            const productDoc = await getDoc(productRef);

            if (productDoc.exists()) {
                // Si el documento existe, obtenemos los datos
                const productData = { ...productDoc.data(), id: productDoc.id };
                return productData// Suponiendo que tengas una función para establecer un solo producto
            } else {
                console.log("No such document!");
                return null
            }
        } catch (error) {
            console.log(error);
        }
    };


    // Delete oder Function
    const orderDelete = async (id) => {
        setLoading(true)
        try {
            await deleteDoc(doc(fireDB, 'order', id))
            toast.success('Pedido eliminado')
            getAllOrderFunction();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const orderEnviar = async (id) => {
        let infoOrder = {};
        infoOrder = getOrderById(id);
        setLoading(true)
        try {
            const orderRef = doc(fireDB, "order", id);
            await setDoc(orderRef, { ...infoOrder, status: "Enviado" }, { merge: true });
            toast.success('Libro enviado')
            getAllOrderFunction();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const productDecrementStock = async (id, quantity) => {
        let productInfo = {};
        productInfo = await getProductByIdFunction(id);
        let newStock = 0;
        if (productInfo.stock > 0) {
            newStock = productInfo.stock - quantity;
            console.log(productInfo.stock)
            setLoading(true)
            try {
                const productRef = doc(fireDB, "products", id);
                await setDoc(productRef, { ...productInfo, stock: newStock }, { merge: true });
            } catch (error) {
                console.log(error)
            }
        } else {
            toast.success('No se puede realizar la compra')
        }
    }

    const orderCancelar = async (id) => {
        let infoOrder = {};
        infoOrder = getOrderById(id);
        setLoading(true)
        try {
            const orderRef = doc(fireDB, "order", id);
            console.log(infoOrder);
            await setDoc(orderRef, { ...infoOrder, status: "Cancelado" }, { merge: true });
            toast.success('Orden cancelada')
            getAllOrderFunction();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    // user State 
    const [getAllUser, setGetAllUser] = useState([]);


    /**========================================================================
     *                           GET All User Function
     *========================================================================**/

    const getAllUserFunction = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, "user"),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let userArray = [];
                QuerySnapshot.forEach((doc) => {
                    userArray.push({ ...doc.data(), id: doc.id });
                });
                setGetAllUser(userArray);
                setLoading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllProductFunction();
        getAllOrderFunction();
        getAllUserFunction();
    }, []);
    return (
        <MyContext.Provider value={{
            loading,
            setLoading,
            getAllProduct,
            getAllProductFunction,
            getAllOrder,
            orderDelete,
            orderEnviar,
            getOrderById,
            orderCancelar,
            productDecrementStock,
            getAllUser
        }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyState