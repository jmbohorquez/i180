import { useState } from 'react'
import Link from 'next/link'
import Logo from '../public/images/logo.svg'
import MainMenu from './MainMenu';

const Header = () => {

    const [ showMenu, setShowMenu ] = useState( false )

    const mostrarOcultar = ( e ) => {
        
        e.preventDefault()

        if( showMenu ){
            setShowMenu( false )
        }
        else{
            setShowMenu( true )
        }

    }
    
    return(
        <>
            <header className="header">
                <div className="site-wrap">
                    <figure className="header-logo">
                        <Link
                            href="/"
                        >
                            <a><Logo /></a>
                        </Link>
                    </figure>
                    <a href="#" className={ `header-menu-boton ${ showMenu && 'cerrar' }` } onClick={ mostrarOcultar } >
                        <span className="line-one"></span>
                        <span className="line-two"></span>
                        <span className="line-three"></span>
                    </a>
                </div>
            </header>
            <MainMenu 
                showMenu = { showMenu }
                setShowMenu = { setShowMenu }
            />
        </>
    )

}

export default Header;