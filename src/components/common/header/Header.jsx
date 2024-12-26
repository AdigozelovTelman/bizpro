import React from 'react'
import styles from './Header.module.scss'
import { RxHamburgerMenu } from "react-icons/rx";


const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.images}>
            <img src="https://preview.colorlib.com/theme/bizpro/images/logo/logo.png" alt="loogo" />
          </div>
          <div className={styles.navbar}>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/basket">About</a></li>
                <li><a href="/wish">Services</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Team</a></li>
                <li><a href="">Skill</a></li>
                <li><a href="">Clients</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className={styles.hamburger}>
            <span>Menu</span><RxHamburgerMenu />
          </div>
        </div>
      </div>
    </>

  )
}

export default Header