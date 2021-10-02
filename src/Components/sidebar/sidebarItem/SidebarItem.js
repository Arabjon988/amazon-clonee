import React from 'react'
import classes from './SidebarItem.module.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'

function SidebarItem({extraMenu,extraMenuBool,setExtramenuBool}) {
    return (
        <div style={!extraMenuBool? {height:"auto"}:{height:"0"} } className={classes.sidebar__item}>
           <div style={!extraMenuBool? {transform: "translateX(0%)", transition: ".5s"}:{transform: "translateX(100%)", transition: ".5s"}} className={classes.categories}>
               <h3 onClick={()=> setExtramenuBool(true)} className={classes.main__menu}><AiOutlineArrowLeft/><span> {extraMenu.header}</span></h3>
               <h3 className={classes.categories__title}>{extraMenu.title}</h3>
               {
                   extraMenu.items?.map((item,ind)=>(
                    <li
                    key={ind}
                    className={classes.categories__collectionItem}
                  >
                    <span>{item}</span>
                  </li>
                   ))
               }
           </div>
        </div>
    )
}

export default SidebarItem
