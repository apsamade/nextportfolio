'use client'

import Link from "next/link"
import Image from "next/image"
import BackgroundAnime from "@components/BackgroundAnime"

const Home = () => {
    return (
        <main>
            <header className='min-h-[75vh] pb-8 pt-16 md:pt-32 bg-header bg-cover bg-top relative z-10'>
                <div className='max-w-[800px] lg:ml-64 lg:mt-32 mx-auto p-4'>
                    <h1 className='text-3xl lg:text-4xl'>Portfolio Bouderga Abdel-samade <br /><strong class="bg-gradient-to-r uppercase from-orange-300 to-orange-600 text-transparent bg-clip-text">Développeur web</strong></h1>
                    <hr className='max-w-[100px] mt-8 mb-3' />
                    <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aperiam rerum atque, ad labore ipsa sit impedit expedita sed quam quaerat, obcaecati aspernatur optio eligendi reiciendis odio sequi deleniti accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sapiente, perferendis soluta eum id.</p>
                    <Link 
                    href="/assets/CV_Bouderga_Abdel-samade_2.pdf"
                    className="p-4 rounded-md uppercase hover:px-12 hover:bg-orange-600 duration-200 bg-orange-500 mt-4 block"
                    target="_blank"
                    >
                        Mon CV
                    </Link>
                </div>
                <BackgroundAnime />
            </header>
            <section className="p-5 mx-auto max-w-[1200px] my-5">
                <Image
                    alt="Photo de Abdel-samade Bouderga Développeur web"
                    src="/assets/elements/photo_presentation_2.jpg"
                    width={500}
                    height={500}
                    className="rounded-md"
                />
            </section>
        </main>
    )
}

export default Home