import { useNavigate } from "react-router";

// category 
const category = [
    {
        name: 'Ficción'
    },
    {
        name: 'No ficción'
    },
    {
        name: 'Biográfico'
    },
    {
        name: 'Fantasía'
    },
    {
        name: 'Misterio'
    },
    {
        name: 'Ciencia ficción'
    },
    {
        name: 'Adultos'
    },
    {
        name: 'Adolescentes'
    },
    {
        name: 'Niños'
    }
]

const Category = () => {
    // naviaget 
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5 w-[300px] h-100 bg-gray-c border border-brown-dark mx-6 py-10">
                <h2 className="font-Bitter font-semibold text-2xl text-brown-dark ml-8 mb-4">Géneros</h2>
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex flex-col">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    {/* Image  */}
                                    <div onClick={() => navigate(`/category/${item.name}`)} className="max-w-xs rounded-full  bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer mb-1 " >
                                        <h2 className=' text-sm lg:text-lg font-Lustria text-center font-regular text-brown-dark title-font first-letter:uppercase '>{item.name}</h2>
                                    </div>

                                    {/* Name Text  */}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
        </div>
    );
}

export default Category;