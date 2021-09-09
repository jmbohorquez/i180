import MediaQuery from 'react-responsive'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../../styles/components/InicioHero.module.scss'

const Hero = () => {

    return(
        <>
            <MediaQuery maxDeviceWidth={ 812 } orientation='portrait'>
                <p>Telefono o Tableta Portrait</p>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={ 812 } orientation='landscape'>
                <p>Telefono o Tableta Landscape</p>
            </MediaQuery>
            <MediaQuery minDeviceWidth={ 1024 }>
                <section className={`panel full-height ${ styles.inicio_header }`}>
                    <div className={ styles.image_container }>
                        <Image 
                            src="/images/ui-designer-front-end-developer.png"
                            alt="UI Designer and Frontend Developer"
                            layout="intrinsic"
                            width={920}
                            height={900}
                        />
                    </div>
                    <div className={ styles.inicio_header_text_layer }>
                        <div className="site-wrap">
                            <div className={`ancho-50 ${ styles.inicio_header_text_container }`}>
                                <p className={ styles.intro }>Soy Julian Bohorquez</p>
                                <h3><strong>Diseño interfaces de usuario</strong> estratégicas, modernas y amigables programadas con código <strong>elegante, limpio y eficiente.</strong></h3>
                                <Link
                                    href="/portafolio"
                                    >
                                    <a className="btn bg_verde"><span>Ver portafolio</span></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </MediaQuery>
        </>
    );

}

export default Hero;