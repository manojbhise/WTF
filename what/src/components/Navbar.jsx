import React from 'react'
import styles from "../styles/Navbar.module.css"
import logo from "../assets/logo.png"
import { useState } from 'react'

const Navbar = () => {

  const [clicked, setClicked] = useState("gyms");
  const [bcg, setBcg] = useState(false);

  window.onscroll = (e) => {
    if (window.pageYOffset > 0) {
      setBcg(true);
    }
    else{
      setBcg(false);
    }
  };

  return (
    <div className={styles.main} style={{backgroundColor: bcg? "#0d0d0d":"transparent"}}>
      <div className={styles.nav}>
        <div className={styles.left}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.right}>
          <ul>
            <li onClick={()=>setClicked("fitness")} style={{borderBottom: clicked=="fitness"? "2px solid brown":"none" }}><a style={{color: clicked=="fitness" && "white"}} href="#">Fitness</a></li>
            <li onClick={()=>setClicked("nutrition")} style={{borderBottom: clicked=="nutrition"? "2px solid brown":"none"}}><a style={{color: clicked=="nutrition" && "white"}} href="#">Nutrition</a></li>
            <li onClick={()=>setClicked("gyms")} style={{borderBottom: clicked=="gyms"? "2px solid brown":"none"}}><a style={{color: clicked=="gyms" && "white"}} href="#">Gyms</a></li>
            <li onClick={()=>setClicked("become")} style={{borderBottom: clicked=="become"? "2px solid brown":"none"}}><a style={{color: clicked=="become" && "white"}} href="#">Become WTF Partner</a></li>
            <li onClick={()=>setClicked("about")} style={{borderBottom: clicked=="about"? "2px solid brown":"none"}}><a style={{color: clicked=="about" && "white"}} href="#">About US</a></li>
            <li><button>Login</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar