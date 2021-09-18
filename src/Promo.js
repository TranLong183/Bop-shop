import React from 'react'
import './Promo.css';
import './grid.css';

function Promo() {
    return (
        <div class="promotion">
        <div class="row">
            <div class="col-4 col-md-12 col-sm-12">
                <div class="promotion-box">
                    <div class="text">
                        <h3>Summer Collection</h3>
                        <button class="btn-flat btn-hover"><span>shop collection</span></button>
                    </div>
                    <img src="./images/summer1.png" alt=""/>
                </div>
            </div>
            <div class="col-4 col-md-12 col-sm-12">
                <div class="promotion-box">
                    <div class="text">
                        <h3>Autumn Collection</h3>
                        <button class="btn-flat btn-hover"><span>shop collection</span></button>
                    </div>
                    <img src="./images/autumn.png" alt=""/>
                </div>
            </div>
            <div class="col-4 col-md-12 col-sm-12">
                <div class="promotion-box">
                    <div class="text">
                        <h3>Winter Collection</h3>
                        <button class="btn-flat btn-hover"><span>shop collection</span></button>
                    </div>
                    <img src="./images/winter.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Promo
