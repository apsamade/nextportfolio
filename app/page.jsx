'use client'

import Link from "next/link"
import Image from "next/image"
import BackgroundAnime from "@components/BackgroundAnime"

const Home = () => {
    return (
        <main>
            <header className='min-h-[75vh] pt-32 bg-header relative'>
                <div className='max-w-[800px] ml-64 mt-32'>
                    <h1 className='text-4xl'>Portfolio Bouderga Abdel-samade <strong class="bg-gradient-to-r uppercase from-orange-300 to-orange-600 text-transparent bg-clip-text">Développeur web</strong></h1>
                    <hr className='max-w-[100px] mt-8 mb-3' />
                    <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aperiam rerum atque, ad labore ipsa sit impedit expedita sed quam quaerat, obcaecati aspernatur optio eligendi reiciendis odio sequi deleniti accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sapiente, perferendis soluta eum id.</p>
                </div>
                <BackgroundAnime />
            </header>
        </main>
    )
}

export default Home