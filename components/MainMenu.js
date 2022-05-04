import Link from 'next/link'

const MainMenu = ({ showMenu, setShowMenu }) => {

    return(
        <nav className={ `main-menu ${ showMenu && 'show' }` }>
            <div className="parallax-stars">
                <div className="star-1"></div>
                <div className="star-2"></div>
                <div className="star-3"></div>
            </div>
            <ul className="menu menu-vert">
                <li>
                    <Link
                        href="/"
                    >
                        <a onClick={ () => setShowMenu( false ) }>Inicio</a>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/quien-soy"
                    >
                        <a onClick={ () => setShowMenu( false ) }>¿Quién soy?</a>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/developer"
                    >
                        <a onClick={ () => setShowMenu( false ) }>Frontend / Backend</a>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/ui-ux-designer"
                    >
                        <a onClick={ () => setShowMenu( false ) }>UI / UX Designer</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );

}

export default MainMenu;