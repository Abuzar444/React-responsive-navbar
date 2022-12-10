import React, { useEffect, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, icons } from './data'
const Navbar = () => {
    const [showLink, setShowLink] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    useEffect(() => {
        let linksHeight = linksRef.current.getBoundingClientRect().height
        if (showLink) {
            linksContainerRef.current.style.height = `${linksHeight}px`
        } else {
            linksContainerRef.current.style.height = '0px'
        }
    })

    return (
        <nav>
            <div className='nav-center'>
                <div className="nav-header">
                    <h3 className='logo'>Logo</h3>
                    <button className='nav-toggle' onClick={() => setShowLink(!showLink)}>
                        <FaBars />
                    </button>
                </div>
                <div className='links-container' ref={linksContainerRef}>
                    <ul className='links' ref={linksRef}>
                        {links.map((link) => {
                            const { id, url, text } = link
                            return (
                                <li key={id}><a href={url}>{text}</a></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar