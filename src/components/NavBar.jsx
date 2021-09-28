import React from 'react'
import NavBarItem from './NavBarItem'
import Logo from './presentationals/Logo'

const NavBar = () => {
    return (
        <header className="mt-5">
            <nav className="flex w-full h-20 justify-center items-center">
                <NavBarItem name="inicio" url="/"/>
                <NavBarItem name="productos" url="/" />
                <Logo />
                <NavBarItem name="nosotros" url="/" />
                <NavBarItem name="contacto" url="/" />
            </nav>
        </header>
    )
}

export default NavBar
