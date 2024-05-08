import { Link } from "react-router-dom";

const HeroSection = () => {
    //const navigate = useNavigate();
    return (
        <div className="container px-5 py-5 mx-auto bg-white">
            <div className="flex">
                <div>
                    <h1 className="font-Bitter font-extrabold text-brown-dark text-8xl mt-[150px]">HOLA VENDO LIBROS </h1>
                    <p className="font-Lustria text-3xl text-brown-dark my-[20px]">Perrones</p>
                    <li className="list-none font-Bitter font-semibold text-trueWite bg-red inline-block text-4xl py-1 px-3 ">
                        <Link to={'/allproduct'}>Catálogo</Link>
                    </li>
                </div>
                <img className=" h-[650px] " src="../img/HeroImagen.png" alt="" />
            </div>
        </div>
    );
}

export default HeroSection;
