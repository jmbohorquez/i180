import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/pages/QuienSoy.module.scss'

import Velocidad from '../public/images/velocidad.svg'
import Responsivo from '../public/images/responsivo.svg'
import Intuitivo from '../public/images/intuitivo.svg'
import Dinamico from '../public/images/dinamico.svg'
import Experiencia from '../public/images/experiencia.svg'
import Habilidades from '../public/images/habilidades.svg'

const QuienSoy = () => {

    return(
        <>
            <Head>
                <title>Julian Bohorquez | Frontend - Backend developer</title>
                <meta name="description" content="Tengo más de 20 años de experiencia en diseño web, diseño de interfaces de usuario, estrategia para medios digitales y programación del lado del servidor" />
            </Head>
            <div className={`panel full-height ${ styles.quien_soy_banner }`}>
                <div className="image-container">
                    
                </div>
                <div className={`banner-header-text-container ${ styles.quien_soy_banner_text_container }`}>
                    <div className="site-wrap">
                        <div className="inicio-header-text-container ancho-50">
                            <p className={ styles.intro }>Hola, soy Julian Bohorquez</p>
                            <h3>Diseñador, programador y fotógrafo, ubicado actualmente en bogotá, colombia.</h3>
                            <p className={ styles.descripcion }>Tengo más de 20 años de experiencia en diseño web, diseño de interfaces de usuario, estrategia para medios digitales y programación.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${ styles.disenos }`}>
                <div className="site-wrap">
                    <h2 className="text-color-1 uppercase text-center">Mis diseños y desarrollos se caracterizan por:</h2>
                    <div className={`columns-container has-3-columns ${ styles.disenos_items_container }`}>
                        <div className={`column ${ styles.disenos_item }`}>
                            <Velocidad />
                            <h3>Velocidad</h3>
                            <p>Mi prioridad siempre son los tiempos rápidos de carga del sitio web.</p>
                        </div>
                        <div className={`column ${ styles.disenos_item }`}>
                            <Responsivo />
                            <h3>Responsivos</h3>
                            <p>Mis diseños de adaptarán apropiadamente a cualquier dispositivo.</p>
                        </div>
                        <div className={`column ${ styles.disenos_item }`}>
                            <Intuitivo />
                            <h3>Intuitivos</h3>
                            <p>En mis sitios web los usuarios encuentran fácilmente el camino a lo que buscan.</p>
                        </div>
                        <div className={`column ${ styles.disenos_item }`}>
                            <Dinamico />
                            <h3>Dinámicos</h3>
                            <p>Me encanta hacer que las páginas web cobren vida.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${ styles.experiencia_container }`}>
                <div className={`bg-color-5 ${ styles.experiencia }`}>
                    <Experiencia />
                    <h3>Experiencia_</h3>
                    <p>Tengo amplia experiencia en el sector de tiendas y comercio electrónico, sector de turismo (Hoteles, bares restaurantes y operadores turísticos), sector salud (clínicas, medicina biológica, deporte y vida saludable) no solo en el diseño y desarrollo de sus plataformas sino con la implementación de estrategias de mercadeo que impulsan sus ventas y generan nuevas oportunidades de negocios.</p>
                </div>
                <div className={`bg-color-4 ${ styles.habilidades }`}>
                    <Habilidades />
                    <h3>Habilidades_</h3>
                    <p>La mayor parte de mi carrera la he hecho como experto en Wordpress. En este CMS he construido themes profesionales a medida, plugins y en las últimas versiones bloques para el editor Gutenberg. Los últimos años he migrado hacia Next, Gatsby, Strapy, Ghost, Node y tecnologías basadas en javaScript y creación e integración de REST Api.</p>
                </div>
            </div>
            <div className={`bg-color-3 ${ styles.cta_cierre_container }`}>
                <div className={`site-wrap ${ styles.cta_cierre_wrap }`}>
        
                    <p className={ styles.cta_copy }>Siempre experimentando, <br />siempre aprendiendo…</p>
                </div>
            </div>
            <div className={`full-height ${ styles.engage_container }`}>
                <div className={ styles.engage_image }>
                    <Image 
                        src="/images/rescate-perros.jpg"
                        alt="Rescate de perros"
                        layout="responsive"
                        height={ 1080 }
                        width={ 1920 }
                        quality={ 100 }
                    />
                </div>
                <div className={ styles.engage_text_container }>
                    <p>Mis clientes han encontrado en mi responsabilidad,  puntualidad, disciplina, compromiso, discreción y sobre todo, una persona de confianza.</p>
                    <p>A parte de mi profesión, me apasionan el cine, la fotografía el deporte y ayudar a los perros de la calle. </p>
                </div>
            </div>
        </>
    )

}

export default QuienSoy