import React, { useState } from "react";
import classes from "./Sidebar.module.css";
import { FiX } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { RiGlobalLine } from "react-icons/ri";
import { SIDEBAR_DATA } from "../../data/SIDEBAR_DATA";
import SidebarItem from "./sidebarItem/SidebarItem";
import { EXTRA_MENU } from "../../data/EXTRA_MENU";

function Sidebar({ sidebarShow, clickFunc }) {
  const [extraMenu, setExtramenu] = useState([]);
  const [extraMenuBool, setExtramenuBool] = useState(true);
  const extraMenuShow = (id) => {
    setExtramenu(EXTRA_MENU[id]);
  };
  sidebarShow
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <>
      <div
        onClick={clickFunc}
        style={sidebarShow ? { display: "block" } : { display: "none" }}
        className={classes.fade}
      >
        <div className={classes.sidebar__controller}>
          <FiX onClick={clickFunc} />
        </div>{" "}
      </div>
      <div
        style={
          sidebarShow
            ? { transform: "translateX(0)" }
            : { transform: "translateX(-110%)" }
        }
        className={classes.sidebar}
      >
        <div className={classes.sign__in}>
          <FaUserCircle /> <span>Hello, Sign in</span>
        </div>
        <SidebarItem
          extraMenu={extraMenu}
          extraMenuBool={extraMenuBool}
          setExtramenuBool={setExtramenuBool}
        />
        <div
          style={
            extraMenuBool
              ? {
                  transform: "translateX(0%)",
                  transition: ".3s ease",
                  height: "auto",
                }
              : {
                  transform: "translateX(-100%)",
                  transition: ".3s ease",
                  height: "0",
                }
          }
          className={classes.main__categories}
        >
          <div className={classes.categories}>
            <h3 className={classes.categories__title}>
              Digital Content & Devices
            </h3>
            <ul className={classes.categories__collection}>
              {SIDEBAR_DATA.slice(0, 3).map((item) => (
                <li
                  onClick={() => (
                    extraMenuShow(item.id),
                     setExtramenuBool(false)
                  )}
                  key={item.id}
                  className={classes.categories__collectionItem}
                >
                  <span>{item.name}</span>
                  <FiChevronRight />
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.categories}>
            <h3 className={classes.categories__title}>Shop By Department</h3>
            <ul className={classes.categories__collection}>
              {SIDEBAR_DATA.slice(3, 8).map((item) => (
                <li
                  onClick={() => (
                    extraMenuShow(item.id), setExtramenuBool(false)
                  )}
                  key={item.id}
                  className={classes.categories__collectionItem}
                >
                  <span>{item.name}</span>
                  <FiChevronRight />
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.categories}>
            <h3 className={classes.categories__title}>Programs & Features</h3>
            <ul className={classes.categories__collection}>
              {SIDEBAR_DATA.slice(8, 13).map((item) => (
                <li
                  onClick={() => (
                    extraMenuShow(item.id), setExtramenuBool(false)
                  )}
                  key={item.id}
                  className={classes.categories__collectionItem}
                >
                  <span>{item.name}</span>
                  <FiChevronRight />
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.categories}>
            <h3 className={classes.categories__title}>Help & Settings</h3>
            <ul className={classes.categories__collection}>
              <li className={classes.categories__collectionItem}><span>Your Account</span></li>
              <li className={classes.categories__collectionItemFlex }><RiGlobalLine/> <span>English</span></li>
              <li className={classes.categories__collectionItemFlex }><img className={classes.sidebar__countryImage} src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt="" /> <span>United State</span></li>
              <li className={classes.categories__collectionItem}><span>Customer Service</span></li>
              <li className={classes.categories__collectionItem}><span>Sign in</span></li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}

export default Sidebar;
