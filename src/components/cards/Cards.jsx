import React from 'react'
import styles from './Cards.module.scss'
import { CiHeart } from 'react-icons/ci'
import { BiBasket } from 'react-icons/bi'

const Cards = ({item, AddBasket, addtowish}) => {
  return (
    <div className={styles.container}>
    <div className={styles.imgBox}>
        <img className={styles.img} src={item.thumbnail} alt={item.title} />
    </div>
    <p className={styles.title}>{item.title}</p>
    <p className={styles.price}>{item.price}</p>
    <button className={styles.wishBtn} onClick={addtowish} ><CiHeart /></button>
    <button className={styles.basketBtn} onClick={AddBasket} >Add to <BiBasket /></button>
</div>
  )
}

export default Cards