/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10 mt-[200px]">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black mb-10' >Opiniones de nuestros clientes</h1>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://ecommerce-sk.vercel.app/img/kamal.png" />
                                <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quasi optio ipsam consequuntur pariatur fugiat reiciendis necessitatibus cumque eius ipsum quidem, dolorum omnis nesciunt voluptate saepe, velit maiores perspiciatis natus?</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Mayo Padilla</h2>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://i.pinimg.com/736x/1d/5b/f9/1d5bf9d56b12c00452449432411ae582.jpg" />
                                <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et expedita quisquam, ad assumenda repellat rerum vero. Eligendi, culpa aliquid placeat impedit quis possimus, unde, animi quidem error commodi tenetur eaque!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">María</h2>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F497-4973038_profile-picture-circle-png-transparent-png.png&f=1&nofb=1&ipt=5f27098c7d585a09d4278de335f6b805983528269ce8dded422310f7c9eb2076&ipo=images" />
                                <p className="leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum numquam ipsam fuga odit perspiciatis. Repudiandae exercitationem quibusdam fuga perspiciatis enim accusamus dolorum, tempore, earum ipsum dolores consequatur voluptatem architecto qui?</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Luis Aguirre</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial