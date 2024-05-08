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
            {/* Home */}
            <li>
                <Link to={'/'}>Home</Link>
            </li>

            {/* All Product */}
            <li>
                <Link to={'/allproduct'}>All Product</Link>
            </li>

            {/* Signup */}
            {!user ? <li>
                <Link to={'/signup'}>Signup</Link>
            </li> : ""}

            {/* Signup */}
            {!user ? <li>
                <Link to={'/login'}>Login</Link>
            </li> : ""}

            {/* User */}
            {user?.role === "user" && <li>
                <Link to={'/user-dashboard'}>User</Link>
            </li>}

            {/* Admin */}
            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'}>Admin</Link>
            </li>}

            {/* logout */}
            {user && <li className=" cursor-pointer" onClick={logout}>
                logout
            </li>}

            {/* Cart */}
            <li>
                <Link to={'/cart'}>
                    Cart({cartItems.length})
                </Link>
            </li>
        </ul>
    )
    return (
        <nav className="bg-white sticky top-0 border-b border-brown-dark mb-4 pt-3">
            {/* main  */}
            <div className="container px-5 py-5 mx-auto">
                <div className="lg:flex lg:justify-between items-center lg:px-3 ">
                    {/* left  */}
                    <div className="left py-3 lg:py-0">
                        <Link to={'/'}>
                            <img className="h-[50px]" src="../img/ciculillo.svg" alt="" />
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
