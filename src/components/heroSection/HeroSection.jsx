import { Link } from "react-router-dom";

const HeroSection = () => {
    //const navigate = useNavigate();
    return (
        <div className="container px-5 pt-20 mx-auto bg-white h-screen">
            <div className="flex">
                <div>
                    <h1 className="font-Bitter font-extrabold text-brown-dark text-8xl mt-[120px]">Lee, Aprende, Disfruta</h1>
                    <p className="font-Lustria text-3xl text-brown-dark my-[20px]">Libros para todas las edades y gustos, a solo un clic de distancia</p>
                    <li className="list-none font-Bitter font-semibold text-trueWite bg-red inline-block text-4xl py-1 px-3 ">
                        <Link to={'/allproduct'}>Catálogo</Link>
                    </li>
                </div>
                <img className=" h-[500px] " src="../img/HeroImagen.png" alt="" />
            </div>
        </div>
    );
}

export default HeroSection;
