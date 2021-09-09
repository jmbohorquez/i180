
import Html5 from '../../public/images/html-logo.svg'
import CSS3 from '../../public/images/css3-logo.svg'
import JavaScript from '../../public/images/javascript-logo.svg'
import WP from '../../public/images/wordpress.svg'

const Iconos = ({ iconos }) => {

    return(
        
            iconos.map( ico => (
                <div className="card-icono">{ 
                    ico === 'html5' 
                        ? <Html5 /> 
                        : ico === 'css3' 
                            ? <CSS3 /> 
                            : ico === 'js' 
                                ? <JavaScript /> 
                                : ico === 'wp' && <WP />
                }</div>
            ) ) 
        
    )

}

export default Iconos