import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/pages/Designer.module.scss'

import IconUiDes from '../public/images/icon-ui-designer.svg'

const UiDesigner = () => {
    return(
        <>
            <Head>
                <title>Ui - UX Designer | Julian Bohorquez</title>
                <meta name="description" content="Tengo más de 20 años de experiencia programando. Me preocupo por mantener un código limpio, organizado, optimizado y siguiendo los estándares y recomendaciones de buenas prácticas." />
            </Head>
            <div className={`bg-color-2 ${ styles.designer_page_wrap }`}>
                <div className={ styles.designer_image_bg }>

                </div>
                <div className={`panel full-height ${ styles.designer_banner }`}>
                    <div className="banner-header-text-container">
                        <div className="site-wrap">
                            <div className="inicio-header-text-container ancho-50 seccion-container">
                                <IconUiDes />
                                <h1 className="titulo-seccion">UI / UX Designer_</h1>
                                <p className="descrip-seccion">Diseño de interacción y de interfaz gráfica de usuario.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ styles.designer_text_container }>
                    <div className={ styles.designer_text_wrap }>
                        <div className={`bg-color-3 ${ styles.designer_text } ${ styles.desiner_UX }`}>
                            <div className={ styles.title_pack }>
                                <span>Diseño de experiencia de usuario</span>
                                <h2>UX Designer</h2>
                            </div>
                            <p>Defino de forma asertiva los procesos y la forma en la que los usuarios van a interactuar con un sitio web o una aplicación. Abordo los problemas de acceso a la información desde la perspectiva de los usuarios, identificando las oportunidades para dejar en ellos la sensación de una gran experiencia.</p>
                            
                        </div>
                        <div className={`bg-color-1 ${ styles.designer_text } ${ styles.desiner_UI }`}>
                            <div className={ styles.title_pack }>
                                <span>Diseño de interfaz de usuario</span>
                                <h2>UI Designer</h2>
                            </div>
                            <p>Investigo a fondo el grupo objetivo para saber que les es familiar y así establecer directrices claras y estratégicas para el diseño de la interfaz de usuarios logrando una navegación agradable, clara y rápida. </p>
                            
                        </div>
                    </div>
                    <div className={ styles.designer_dot_bg }></div>
                </div>
            </div>
        </>
    )
}

export default UiDesigner