import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../../../../components/cards/Cards';
import { getProductsThunk, postProductBasketThunk, postProductWishThunk } from '../../../../redux/reducers/productSlice';
import styles from './About.module.scss'

const About = () => {
    const dispatch = useDispatch();

    const products =useSelector((state)=>state.products.products)
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);

    console.log(products);

    const addWish = (item) => {
      dispatch(postProductWishThunk(item))
    }
  
    const AddBasket = (item) => {
      dispatch(postProductBasketThunk(item))
      console.log('posted', item);
    }
    
    useEffect(() => {
      dispatch(getProductsThunk())
    }, []);
  
    if (error) return <p>XETA BAS VERDI</p>;
    if (loading) return <p>Yuklenir...</p>;
  return (
    <div className={styles.container}>
    {products && products.map((item) => <Cards item={item} AddBasket={() => AddBasket(item)} addtowish={() => addWish(item)} />)}
  </div>
  )
}

export default About