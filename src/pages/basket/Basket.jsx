import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../components/cards/Cards'
import Layout from '../../components/common/layout/Layout';
import { getBasketThunk } from '../../redux/reducers/basketSlice';
import styles from './Basket.module.scss'

const Basket = () => {

    const dispatch = useDispatch();
    const basketProducts = useSelector((state) => state.basket.basket);
    const loading = useSelector((state) => state.basket.loading);
    const error = useSelector((state) => state.basket.error);

    useEffect(() => {
        dispatch(getBasketThunk());
    }, []);

    if (error) return <h1>xeta</h1>
    if (loading) return <h1>yuklenur</h1>
    return (
        <Layout>
            <div className={styles.container}>
                {basketProducts && basketProducts.map((item) => <Cards item={item} />)}
            </div>
        </Layout>
    )
}

export default Basket