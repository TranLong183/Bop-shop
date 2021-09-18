import React from 'react';
import data from './data.js';
import './ProductList.css';
import './App.css';
import './grid.css';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CurrencyFormat from 'react-currency-format';

function ProductList() {
    return (
        <div class="section">
            <div class="container">
                <div class="section-header">
                    <h2>Latest product</h2>
                </div>
                <div class="row" id="latest-products">
                    {data.product.map((product) => (
                        <div class="col-3 col-md-6 col-sm-12">
                        <div key={product._id} class="product-card">
                            <div class="product-card-img">
                                <img src={product.image} alt=""/>
                                <img src="./images/JBL_Quantum_400_Product Image_Hero Mic Up.webp" alt=""/>
                            </div>
                            <div class="product-card-info">
                                <div class="product-btn">
                                    <button class="btn-flat btn-hover btn-shop-now">shop now</button>
                                    <button class="btn-flat btn-hover btn-cart-add">
                                        <i class='bx bxs-cart-add'><ShoppingBasketOutlinedIcon sx={{ fontSize: 15}}></ShoppingBasketOutlinedIcon></i>
                                    </button>
                                    <button class="btn-flat btn-hover btn-cart-add">
                                        <i class='bx bxs-heart'><FavoriteBorderOutlinedIcon sx={{ fontSize: 15}}></FavoriteBorderOutlinedIcon></i>
                                    </button>
                                </div>
                                <div class="product-card-name">
                                    {product.name}
                                </div>
                                <div class="product-card-price">
                                    <span><del><CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true}/></del></span>
                                    <span class="curr-price"><CurrencyFormat value={product.currentPrice} displayType={'text'} thousandSeparator={true} suffix={' VND'}/></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div class="section-footer">
                    <a href="./products.html" class="btn-flat btn-hover">view all</a>
                </div>
            </div>
        </div>
    )
}

export default ProductList
