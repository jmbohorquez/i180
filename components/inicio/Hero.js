import Link from 'next/link'
import Image from 'next/image'

import sty from '../../styles/components/InicioHero.module.scss'

const Hero = () => {

    return(
        <section className={`panel full-height ${ sty.inicio_header }`}>
            <div className={ sty.image_container }>
                <Image 
                    src="/images/ui-designer-front-end-developer.png"
                    alt="UI Designer and Frontend Developer"
                    layout="intrinsic"
                    width={920}
                    height={900}
                />
            </div>
            <div className={ sty.inicio_header_text_layer }>
                <div className="site-wrap">
                    <div className={`ancho-50 ${ sty.inicio_header_text_container }`}>
                        <p className={ sty.intro }>Soy Julian Bohorquez</p>
                        <h3><strong>Diseño interfaces de usuario</strong> estratégicas, modernas y amigables programadas con código <strong>elegante, limpio y eficiente.</strong></h3>
                        <Link
                            href="/quien-soy"
                        >
                            <a className="btn bg_verde"><span>Saber más</span></a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Hero;