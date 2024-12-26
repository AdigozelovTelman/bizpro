import React from 'react'
import styles from './Hello.module.scss'

const Hello = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.image}>
                
            </div>
            <div className={styles.imageText}>
                <h1>Hello We're Bizpro</h1>
                <span>Sub head. motto or mission subtitle</span>
                <button>see our projects</button>
            </div>
        </div>
    </>
  )
}

export default Hello