'use client'

import Image from "next/image"

const BackgroundAnime = () => {
    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 z-[-5]'>
            <Image
                alt="Image de abdel-samade le développeur web"
                src="/assets/elements/rondorange.png"
                width={50}
                height={50}
                className="move-elem-1 hover:top-[32%] hover:right-[27%] duration-1000 absolute top-[30%] right-[25%] z-0"

            />
            <Image
                alt="Image de abdel-samade le développeur web"
                src="/assets/elements/elem3.png"
                width={140}
                height={140}
                className="move-elem-4 hover:bottom-[27%] hover:left-[12%] duration-1000 absolute bottom-[25%] left-[10%] z-0"

            />
            <Image
                alt="Image de abdel-samade le développeur web"
                src="/assets/elements/elem2.png"
                width={120}
                height={120}
                className="move-elem-3 hover:bottom-[27%] hover:right-[12%] duration-1000 absolute bottom-[25%] right-[10%] z-0"
            />
            <Image
                alt="Image de abdel-samade le développeur web"
                src="/assets/elements/elem1.png"
                width={110}
                height={110}
                className="move-elem-2 hover:top-[27%] hover:left-[27%] duration-1000 absolute top-[25%] left-[25%] z-0"
            />
            <Image
                alt="Image de abdel-samade le développeur web"
                src="/assets/elements/elem1.png"
                width={110}
                height={110}
                className="move-elem-2 hover:top-[52%] hover:left-[52%] duration-1000 absolute top-[50%] left-[50%] z-0"
            />
        </div>
    )
}

export default BackgroundAnime