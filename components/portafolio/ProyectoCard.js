
import Link from 'next/link'
import Image from 'next/image'
import Tilt from 'react-tilt'

import Iconos from './Iconos'


const ProyectoCard = ({ index, titulo, desc, techno, empresa, anio, url, ft_image }) => {

    const options = {
        glare: true,
        maxGlare: 1,
        reverse:        true,  // reverse the tilt direction
        max:            15,     // max tilt rotation (degrees)
        perspective:    2000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
        speed:          300,    // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    
    return(
        <Tilt className="Tilt card" options={ options }>
            <div className="card-header">
                <div className="card-number">
                    { index }
                </div>
                <div className="card-techno">
                    <Iconos 
                        iconos = { techno }
                    />
                </div>
            </div>
            <div className="card-image-container">
                <Image 
                    src={ ft_image }
                    alt={ titulo }
                    layout="responsive"
                    width={ 468 }
                    height={ 261 }
                />
            </div>
            <div className="card-text-container">
                <div className="sitio-web">
                    <p>{ empresa }</p><p>Año: { anio }</p>
                </div>
                <h3 className="card-titulo">{ titulo }</h3>
                <p className="card-description">{ desc }</p>
            </div>
            <Link href={`portafolio${ url }`}>
                <a className="card-link"><span>Ver proyecto</span></a>
            </Link>
        </Tilt>
    )

}

export default ProyectoCard