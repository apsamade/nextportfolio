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
                    <p className="font-light">Je suis <strong>Abdel-Samade Bouderga</strong>, un <strong>développeur web</strong> recherchant activement une alternance en développement web <strong>JavaScript</strong> avec <strong>React.js</strong>. Fort de mes compétences et de ma spécialisation en <strong>Next.js</strong> depuis plus d'un an, je suis passionné, performant et rapide à apprendre. Si mon profil vous intéresse, n'hésitez pas à <strong>me contacter</strong> pour discuter davantage.</p>
                    <div className="flex items-center justify-center flex-wrap">
                    <Link
                        href="/assets/CV_Bouderga_Abdel-samade_2.pdf"
                        className="p-4 basis-[350px] grow hover:basis-[400px] mr-2 rounded-md uppercase hover:px-12 hover:bg-orange-600 duration-200 bg-orange-500 mt-4 block"
                        target="_blank"
                    >
                        Mon CV
                    </Link>
                    <Link
                        href="/contact"
                        className="p-4 basis-[350px] grow hover:basis-[400px] rounded-md uppercase hover:px-12 hover:bg-orange-600 duration-200 bg-orange-500 mt-4 block"
                    >
                        Me contacter
                    </Link>
                    </div>
                    
                </div>
                <BackgroundAnime />
            </header>
            <section className="p-5 mx-auto max-w-[1200px] my-5">
                <div className="flex items-center justify-center outline outline-2 outline-offset-4 outline-transparent hover:outline-orange-500 duration-200 flex-wrap bg-fond-3 p-6 rounded-md shadow-2xl">
                    <Image
                        alt="Photo de Abdel-samade Bouderga Développeur web"
                        src="/assets/elements/photo_presentation_2.jpg"
                        width={500}
                        height={500}
                        className="rounded-md"
                    />
                    <div className="lg:pt-0 pt-16 px-4 grow xl:min-h-[500px] basis-[500px]">
                        <h2 className="text-3xl text-center my-4"><strong className="bg-gradient-to-r uppercase from-orange-300 to-orange-600 text-transparent bg-clip-text">Qui suis-je ?</strong></h2>
                        <p className="my-3 leading-6 font-extralight">Moi c'est Abdel-Samade, 22 ans. J'aime coder, jouer à League of Legends, faire de la musculation, du basket-ball et de la boxe, ainsi que l'humour avec un grand H.</p>
                        <p className="my-3 leading-6 font-extralight">Je me suis spécialisé depuis plus d'un an en JavaScript. Je code en Next.js et React car ces frameworks sont très avantageux en termes d'optimisation pour le SEO et les performances, ce qui rend mes sites beaucoup plus fluides et mieux référencés.</p>
                        <p className="my-3 leading-6 font-extralight">J'ai pour objectif de créer un projet sur l'organisation et la création de tournois autour des jeux populaires de compétition comme Call of Duty, League of Legends, Valorant, etc.</p>
                        <hr className="mt-6" />
                        <div>
                            <Link
                                href="/assets/CV_Bouderga_Abdel-samade_2.pdf"
                                className="p-4 rounded-md uppercase hover:px-12 hover:bg-orange-600 duration-200 bg-orange-500 mt-4 block"
                                target="_blank"
                            >
                                Mon CV
                            </Link>
                            <Link
                                href="/decouvrir"
                                className="p-4 rounded-md uppercase hover:px-12 hover:bg-orange-600 duration-200 bg-orange-500 mt-4 block"
                            >Découvrez en plus sur moi
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home