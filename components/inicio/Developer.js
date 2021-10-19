import Link from 'next/link'
import Image from 'next/image'

import DevIcon from '../../public/images/icon-developer.svg'
import DotBg from '../../public/images/fondo-dots.svg'
const Developer = () => {

    return(
        <section className="panel full-height inicio-developer bg-color-3">
            <div className="developer-fondo-1">
                <DotBg />
            </div>
            <div className="developer-fondo-2">
                <Image 
                    src="/images/frontend-dev.jpg"
                    alt="Frontend Developer and Backend Developer"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="text-container-layer">
                <div className="site-wrap">
                    <div className="column-content ancho-50">
                        <figure className="icon-container">
                            <DevIcon />
                        </figure>
                        <h2>Frontend & Backend Developer_</h2>
                        <p>Estos son los lenguajes y las herramientas que domino y con las que creo sitios web de alto performance.</p>
                        <Link
                            href="/developer"
                            >
                            <a className="btn bg_rojo"><span>Saber más</span></a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Developer;