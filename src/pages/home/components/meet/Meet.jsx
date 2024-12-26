import React from 'react'
import styles from './Meet.module.scss'

const Meet = () => {
  return (
    <>
        <div className={styles.container}>
            <h2>Meet our Team</h2>
            <div className={styles.lorem}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
            </div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <img src="https://preview.colorlib.com/theme/bizpro/images/team/1.jpg" alt="..." />
                    <div className={styles.cardText}>
                    <h6 >Gonzalez Gina</h6>
                    <p>Web Developer</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="https://preview.colorlib.com/theme/bizpro/images/team/2.jpg" alt="..." />
                    <div className={styles.cardText}>
                    <h6 >Gonzalez Gina</h6>
                    <p>Web Developer</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="https://preview.colorlib.com/theme/bizpro/images/team/3.jpg" alt="..." />
                    <div className={styles.cardText}>
                    <h6 >Gonzalez Gina</h6>
                    <p>Web Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Meet