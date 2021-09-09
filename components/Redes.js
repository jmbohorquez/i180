import Link from 'next/link'

import Instagram from '../public/images/instagram.svg'
import GitHub from '../public/images/github.svg'
import Pinterest from '../public/images/pinterest.svg'
import TikTok from '../public/images/tik-tok.svg'
import Twitter from '../public/images/twitter.svg'

const Redes = () => {

    return(
        <div className="redes-container">
            <Link
                href="https://www.instagram.com/jmbohorquez/"
            >
                <a target="_blank"><Instagram /></a>
            </Link>
            <Link
                href="https://github.com/jmbohorquez"
            >
                <a target="_blank"><GitHub /></a>
            </Link>
            <Link
                href="https://co.pinterest.com/juborvel/"
            >
                <a target="_blank"><Pinterest /></a>
            </Link>
            <Link
                href="https://vm.tiktok.com/ZMetpGPnq/"
            >
                <a target="_blank"><TikTok /></a>
            </Link>
            <Link
                href="https://twitter.com/juborvel"
            >
                <a target="_blank"><Twitter /></a>
            </Link>
        </div>
    )

}

export default Redes