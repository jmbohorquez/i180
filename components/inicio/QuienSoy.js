import Link from 'next/link'
import Image from 'next/image'

import styles from '../../styles/components/InicioQuienSoy.module.scss'

const QuienSoy = () => {
    
    return(
        <section className={`panel full-height ${ styles.inicio_quien_soy_wrap }`}>
            <div className={ styles.image_container }>
                <Image 
                    src="/images/quien-soy.jpg"
                    alt="Perfil, Frontend, Backend Developer"
                    layout="fill"
                    objectFit="contain"
                    quality={ 100 }
                />
            </div>
            <div className={ styles.inicio_quien_soy_text_container }>
                <h2>¿Quién soy?</h2>
                <p>Mi nombre es <span className="text-color-3">Julian Bohorquez.</span> Me dedico por completo al diseño web, diseño de interfaces de usuario y programación desde 2002.</p>
                <Link
                    href="/quien-soy"
                    >
                    <a className="btn bg_rojo"><span>Saber más</span></a>
                </Link>
            </div>
        </section>
    )

}
export default QuienSoy