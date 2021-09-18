import React from 'react'
import './Hero.css';
import './App.css';

function Hero() {
    return (
        <div className='hero'>
            <div class="slider">
                <div class="container">
                    <div class="slide active">
                        <div class="info">
                            <div class="info-content">
                                <h3 class="top-down">
                                    JBL TUNE 750TNC
                                </h3>
                                <h2 class="top-down trans-delay-0-2">
                                    Next-gen design
                                </h2>
                            <p class="top-down trans-delay-0-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor commodi dignissimos culpa, eaque eos necessitatibus possimus veniam, cupiditate rerum deleniti? Libero, ducimus error? Beatae velit dolore sint explicabo! Fugit.
                            </p>
                            <div class="top-down trans-delay-0-6">
                                <button class="btn-flat btn-hover">
                                    <span>shop now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="img top-down">
                        <img src="./images/hero.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Hero
