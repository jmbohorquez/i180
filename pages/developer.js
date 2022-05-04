import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/pages/Developer.module.scss'

import IconDeveloper from '../public/images/icon-developer.svg'
import FrontEnd from '../public/images/frontend-ilustration.svg'
import BackEnd from '../public/images/backend-ilustracion.svg'
import NodeJS from '../public/images/node-js.svg'
import MongoDB from '../public/images/mongo-db.svg'
import PHP from '../public/images/php.svg'
import MySQL from '../public/images/my-sql.svg'
import Wordpress from '../public/images/wordpress.svg'

const Developer = () => {

    return(
        <>
            <Head>
                <title>Frontend - Backend developer | Julian Bohorquez</title>
                <meta name="description" content="Tengo más de 20 años de experiencia programando. Me preocupo por mantener un código limpio, organizado, optimizado y siguiendo los estándares y recomendaciones de buenas prácticas." />
            </Head>
            <div className={`panel full-height ${ styles.developer_banner }`}>
                <div className="image-container">
                    
                </div>
                <div className="banner-header-text-container">
                    <div className="site-wrap">
                        <div className="inicio-header-text-container ancho-50 seccion-container">
                            <IconDeveloper />
                            <h1 className="titulo-seccion">Developer_</h1>
                            <p className="descrip-seccion">Tengo más de <span className="text-color-2">20 años</span> de experiencia diseñando y programando <span className="text-color-2">sitios web exitosos.</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`bg-color-1 ${ styles.frontend_panel }`}>
                <div className="site-wrap">
                    <div className={ styles.frontend_text_container }>
                        <div className={ styles.title_pack }>
                            <span>Dev</span>
                            <h2>Front<i className="text-color-2">end_</i></h2>
                        </div>
                        <p>Me preocupo por mantener un código limpio, organizado, optimizado y siguiendo los estándares y recomendaciones de buenas prácticas. Mi más amplia experiencia es con HTML, CSS y JavaScript. Soy un apasionado de escribir código en React y sus frameworks, Next y Gatsby</p>
                        <p>Me encanta construir sitios web y PWA funcionales, prácticas y atractivas siempre, pensando primero en las necesidades de los usuarios. Mis sitios web son atractivos,  óptimos, fáciles de usar y sobre todo, muy veloces en su carga.</p>
                    </div>
                    <div className={ styles.frontend_aside }>
                        <div className={ styles.frontend_ilustracion }>
                            <FrontEnd />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`bg-color-3 ${ styles.backend_panel }`}>
                <div className={`bg-color-6 ${ styles.backend_container }`}>
                    <div className={ styles.title_pack }>
                        <span>Dev</span>
                        <h2>Back<i className="text-color-2">end_</i></h2>
                    </div>
                    <p>Más de 13 años desarrollando y manteniendo tecnología creada con PHP y MySQL y desde hace 2 años creando poderosas RESTApis con NodeJS y MongoDB.</p>
                    
                    <div className={ styles.dibujos_container }>
                    <div className={ styles.backend_ilustracion_container }>
                            <BackEnd />
                        </div>
                        <div className={ styles.backend_logos_container }>
                            <NodeJS />
                            <MongoDB />
                            <PHP />
                            <MySQL />
                        </div>
                        
                    </div>
                </div>
                <div className={`bg-color-2 ${ styles.wordpress_container }`}>
                    <h2><Wordpress /> Wordpress_</h2>
                    <p>Soy experto en desarrollo de sitios web basados en Wordpress.Tengo la capacidad de crear temes, bloques y plugins para esta plataforma.</p>
                    <p>Tengo amplia experiencia creando sitios web a medida evitando al máximo la instalación de plugins lo que hace que mis sitios web carguen muy rápido y cumplan con las recomendaciones de google en buenas prácticas. </p>
                </div>
            </div>
        </>
    )

}

export default Developer