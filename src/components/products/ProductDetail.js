import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import classes from './ProductDetail.module.css';
import { AiFillStar } from 'react-icons/ai'

const ProductDetail = () => {
    const location = useLocation();
    const {data} = location.state;

    const imageUrl = [
        {url: ''},
        {url: ''},
        {url: ''},
        {url: ''},
        {url: ''},
        {url: ''},
        {url: ''}
    ];

    return (
        <Fragment>
            <div className={classes.product}>
                <div className={classes.wrapper}>
                    {imageUrl.map((item) => (
                        <img
                            className={classes['product-img-list']}
                            src={item.url}
                            alt='imgs'
                        />
                    ))}
                </div>
                <img
                    className={classes['product-img']}
                    src={data.imageUrl}
                    alt='product-imgs'
                />
                <div className={classes['product-details']}>
                    <h1>{data.title}</h1>
                    <p>${data.price}</p>
                    <div className={classes['product-rating']}>
                        4.3 <AiFillStar />
                    </div>
                    <p>
                        
                    </p>
                    <h3>Reviews</h3>
                        
                </div>
            </div>
        </Fragment>
        
    )
};

export default ProductDetail;