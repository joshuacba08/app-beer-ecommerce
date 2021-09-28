import React from 'react'

const NavBarItem = ({name, url}) => {
    return (
        <li className="list-none px-5">
           <a className="uppercase font-medium text-sm font-serif" href={url}>{name}</a> 
        </li>
    )
}

export default NavBarItem
