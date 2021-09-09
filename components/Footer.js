import Redes from '../components/Redes'
import Logo from '../public/images/logo-blanco.svg'

const Footer = () => {

    return(
        <footer className="footer">
            <div className="site-wrap">
                <div className="legales">
                    <figure className="logo">
                        <Logo />
                    </figure>
                    <p>Frontend Developer y UI / UX Designer <br />
                       Todos los derechos reservados { new Date().getFullYear() } 
                    </p>
                    <Redes />
                </div>
            </div>
        </footer>
    );

}

export default Footer