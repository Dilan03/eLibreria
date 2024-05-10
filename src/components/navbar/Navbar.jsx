import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";


const Navbar = () => {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // navList Data
    const navList = (
        <ul className="flex space-x-3 text-brown-dark font-medium text-md px-5 ">
            <li>
                <Link className="relative top-6 text-brown-dark font-Bitter font-bold" to={'/allproduct'}>Catálogo</Link>
            </li>

            {!user ? <li className="cursor-pointer relative top-3 font-Bitter font-regular h-10 text-trueWite bg-blue inline-block text-l px-3 text-center py-2" >
                <Link to={'/login'}>Login</Link>
            </li> : ""}

            {user?.role === "user" && <li>

                <Link to={'/user-dashboard'}>
                    <div className="flex">
                        <span className="relative top-6 text-brown-dark font-Bitter font-bold text-l mx-5">{user?.name}</span>
                        <img src="../img/Usuario.png" alt="user" />
                    </div>
                </Link>
            </li>}

            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'}>
                    <div className="flex">
                        <span className="relative top-6 text-brown-dark font-Bitter font-bold text-l mx-5">{user?.name}(admin)</span>
                        <img src="../img/Usuario.png" alt="user" />
                    </div>
                </Link>
            </li>}

            <li >
                <Link to={'/cart'}>
                    <div className="flex">
                        <img src="../img/Carrito.png" alt="carrito" />
                        <span className="relative top-8 text-red font-Lustria font-bold">{cartItems.length}</span>
                    </div>
                </Link>
            </li>

            {user && <li className="cursor-pointer relative top-3 font-Bitter font-regular h-10 text-trueWite bg-blue inline-block text-l px-3 text-center py-2" onClick={logout}>
                logout
            </li>}

        </ul>
    )
    return (
        <nav className="bg-white sticky top-0 border-b border-brown-dark mb-4 pt-3">
            {/* main  */}
            <div className="container px-2 py-2 mx-auto">
                <div className="lg:flex lg:justify-between items-center lg:px-3 ">
                    {/* left  */}
                    <div className="left py-3 lg:py-0">
                        <Link to={'/'}>
                            <span className="flex">
                                <img className="h-[50px]" src="../img/ciculillo.svg" alt="logo" /><span className="pt-7 text-brown-dark font-semibold text-sm">e-libreria</span>
                            </span>
                        </Link>
                    </div>
                    <SearchBar />
                    {/* right  */}
                    <div className="right flex justify-center mb-4 lg:mb-0">
                        {navList}
                    </div>

                    {/* Search Bar  */}

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
