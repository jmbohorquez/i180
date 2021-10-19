import { useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Parallax from 'parallax-js'

import content from '../../content/portafolio.json'
import styles from '../../styles/pages/Proyecto.module.scss'
import Iconos from '../../components/portafolio/Iconos'

import IconVistaGeneral from '../../public/images/icon-vista-general.svg'
import IconDeveloper from '../../public/images/icon-developer.svg'
import IconHerramientas from '../../public/images/icon-herramientas.svg'
import IconTiempo from '../../public/images/icon-tiempo.svg'
import IconUsuario from '../../public/images/icon-usuarios.svg'
import IconPropuesta from '../../public/images/icon-ui-designer.svg'

const Proyecto = ({ page }) => {

    console.log( page )
    const scene = useRef( null )

    useEffect( () => {

        const parallaxInstance = new Parallax( scene.current, {
            relativeInput: true,
            hoverOnly: true
        } );

        parallaxInstance.enable();

        return () => parallaxInstance.disable();   

    }, [] )
    
    return(
        <>
            <Head>
                <title> { page.empresa } | Julian Bohorquez</title>
                <meta name="description" content="Tengo más de 20 años de experiencia en diseño web, diseño de interfaces de usuario, estrategia para medios digitales y programación del lado del servidor" />
            </Head>
            <section className={`panel ${ styles.cabecera_container }`}>
                <div id="scene" ref={ scene } className={ `${ styles.cabecera_parallax_container }` }>
                    <div data-depth="0.6" className={ `${ styles.cabecera_image_container }` }>
                        <div className={ styles.container }>
                            <Image
                                alt={ `${ page.titulo } version desktop` }
                                src={ page.page.cabecera.desktop }
                                layout="intrinsic"
                                width={ 1067 }
                                height={ 600 }
                            />
                        </div>
                    </div>
                    <div data-depth="0.4" className={ `${ styles.cabecera_image_container }` }>
                        <div className={ styles.container }>
                            <Image
                                alt={ `${ page.titulo } version tablet` }
                                src={ page.page.cabecera.tablet }
                                layout="intrinsic"
                                width={ 1067 }
                                height={ 600 }
                            />
                        </div>
                    </div>
                    <div data-depth="0.2" className={ `${ styles.cabecera_image_container }` }>
                        <div className={ styles.container }>
                            <Image
                                alt={ `${ page.titulo } version smartphone` }
                                src={ page.page.cabecera.phone }
                                layout="intrinsic"
                                width={ 1067 }
                                height={ 600 }
                            />
                        </div>
                    </div>
                </div>
                <div className={ styles.cabecera_text_container }>
                    <div className="site-wrap">
                        <h1 className={ styles.cabecera_titulo }>{ page.empresa }</h1>
                        <h3 className={ styles.cabecera_subtitulo }>{ page.titulo }</h3>
                        <p className={ styles.cabecera_descipcion }>{ page.page.intro }</p>
                    </div>
                </div>
            </section>
            <div className={`bg-color-4 ${ styles.proyecto_main_body }`}>
                <div className="site-wrap">
                    <div className={ styles.proyecto_panel }>
                        <div className={ styles.proyecto_vista_general }>
                            <IconVistaGeneral />
                            <h2 className="text-color-1 uppercase title-xl">Vista General_</h2>
                            <p className="text-color-7">{ page.page.vista_general }</p>
                        </div>
                    </div>
                    <div className={ styles.role_herramientas_tiempo }>
                        <div className={ styles.role_container }>
                            <figure className={ styles.role_icon_container }>
                                <IconDeveloper />
                            </figure>
                            <div className={ styles.role_text_container }>
                                <h3 className="text-color-1 uppercase">Role_</h3>
                                <p className="text-color-7">{ page.page.role }</p>
                            </div>
                        </div>
                        <div className={ styles.role_container }>
                            <figure className={ styles.role_icon_container }>
                                <IconHerramientas />
                            </figure>
                            <div className={ styles.role_text_container }>
                                <h3 className="text-color-1 uppercase">Herramientas_</h3>
                                <p className="text-color-7">{ page.page.herramientas }</p>
                            </div>
                        </div>
                        <div className={ styles.role_container }>
                            <figure className={ styles.role_icon_container }>
                                <IconTiempo />
                            </figure>
                            <div className={ styles.role_text_container }>
                                <h3 className="text-color-1 uppercase">Tiempo_</h3>
                                <p className="text-color-7">desde { page.anio.inicio } - hasta { page.anio.fin }</p>
                            </div>
                        </div>
                    </div>
                    <div className={`bg-color-6 ${ styles.usuario }`}>
                        <IconUsuario />
                        <h2 className="uppercase text-color-4">El Usuario_</h2>
                        <p>{ page.page.usuario }</p>
                    </div>
                </div>
            </div>
            <div className={`bg-color-2 ${ styles.propuesta_panel }`}>
                <div className="site-wrap">
                    <div className={ styles.propuesta }>
                        <IconPropuesta />
                        <h2 className="text-color-7 uppercase title-xl">La propuesta_</h2>
                        <p className="text-color-7">{ page.page.propuesta }</p>
                    </div>
                    <div className={`bg-color-3 ${ styles.descripcion }`}>
                        <div className={ styles.descripcion_iconos }>
                            <Iconos 
                                iconos = { page.tecnologia }
                            />
                        </div>
                        <p className="text-color-7">{ page.descripcion }</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export const getStaticPaths = async () => {

    const paths = await content.portafolio.map( page => {
        const slug = page.slug
        return{
            params:{
                slug
            }
        }
    } )

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {

    const page = await content.portafolio.find( cont => cont.slug === params.slug ) || { notfound: true }

    return { 
        props: { page }
    };

}

export default Proyecto