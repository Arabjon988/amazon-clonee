import React from 'react'
import "./HeadeBottom.css"
import { HEADER_BOTTOM } from '../../data/HEADER__BOTTOM'
import {FiMenu } from "react-icons/fi"
function HeaderBottom() {
    return (
        <div className="headerBottom">
            <ul className="headerBottomCollection">
                <li className="headerBottomItem"><FiMenu/>All</li>
                {
                    HEADER_BOTTOM?.map(header__item =>(
                    <li key={header__item.id} className="headerBottomItem">{header__item.header}</li>                    
                    ))
                }
            </ul>
        </div>
    )
}

export default HeaderBottom
