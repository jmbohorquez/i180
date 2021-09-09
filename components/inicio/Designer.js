import { useEffect, useRef } from 'react'
import MediaQuery from 'react-responsive'
import Link from 'next/link'
import Parallax from 'parallax-js'

import UiDesigner from '../../public/images/icon-ui-designer.svg'
import UIDesktop from '../../public/images/ui-desktop.svg'
import UIMovil from '../../public/images/ui-movil.svg'

const Designer = () => {
    
    const scene = useRef( null );

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
            <MediaQuery minDeviceWidth={ 813 }>
                <section className="panel full-height inicio-designer bg-color-2">
                    <div className="text-container-layer">
                        <div className="site-wrap">
                            <div className="column-text-container">
                                <figure className="icon-container">
                                    <UiDesigner />
                                </figure>
                                <h2>UI / UX Designer_</h2>
                                <p>Mis diseños están centrados en la buena experiencia del usuario y las necesidades de su negocio...</p>
                                <Link
                                    href="/ui-ux-designer"
                                >
                                    <a className="btn bg_verde"><span>Saber más</span></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div id="scene" ref={scene} className="parallax-container">
                        <div data-depth="0.3" className="designer-fondo designer-fondo-desktop">
                            <div className="container">
                                <UIDesktop />
                            </div>
                        </div>
                        <div data-depth="0.6" className="designer-fondo designer-fondo-movil">
                            <div className="container">
                                <UIMovil />
                            </div>
                        </div>
                        <div data-depth="0.1" className="designer-fondo-2">
                            <h4>UI / UX <br />
                            Designer</h4>
                        </div>
                    </div>
                </section>
            </MediaQuery>
        </>
    )

}

export default Designer