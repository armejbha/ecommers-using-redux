import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProductAction } from '../Redux/actions/actionProducts';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    const dispatch = useDispatch();
    const fetchProduts = async () => {
        const res = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log('err', err);
            })
        dispatch(setProductAction(res.data));
    }
    useEffect(() => {
        fetchProduts();
    }, [])
    return (
        <div className='ui grid container'>
            <ProductComponent></ProductComponent>
        </div>
    );
};

export default ProductListing;

