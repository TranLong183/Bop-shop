import React from 'react';
import './App.css';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ShoppingBasketOutlined from '@mui/icons-material/ShoppingBasketOutlined';

function Header() {
    return (
        <div className='header'>
            <header>
                <div class="mobile-menu bg-second">
                    <a href="#" class="mb-logo">Bop Shop</a>
                    <span class="mb-menu-toggle" id="mb-menu-toggle">
                        <i class='bx bx-menu'></i>
                    </span>
                </div>
                <div class="header-wrapper" id="header-wrapper">
                    <span class="mb-menu-toggle mb-menu-close" id="mb-menu-close">
                        <i class='bx bx-x'></i>
                    </span>
                    <div class="bg-second">
                        <div class="top-header container">
                            <ul class="devided">
                                <li>
                                    <a href="#">+840123456789</a>
                                </li>
                                <li>
                                    <a href="#">bopshop@mail.com</a>
                                </li>
                            </ul>
                            <ul class="devided">
                                <li class="dropdown">
                                    <a href="">USD</a>
                                    <i class='bx bxs-chevron-down'></i>
                                    <ul class="dropdown-content">
                                        <li><a href="#">VND</a></li>
                                        <li><a href="#">JPY</a></li>
                                        <li><a href="#">EUR</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <a href="">ENGLISH</a>
                                    <i class='bx bxs-chevron-down'></i>
                                    <ul class="dropdown-content">
                                        <li><a href="#">VIETNAMESE</a></li>
                                        <li><a href="#">JAPANESE</a></li>
                                        <li><a href="#">FRENCH</a></li>
                                        <li><a href="#">SPANISH</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">ORDER TRACKING</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="bg-main">
                        <div class="mid-header container">
                            <a href="#" class="logo">Bop Shop</a>
                            <div class="search">
                                <input type="text" placeholder="Search"/>
                                <i class='bx bx-search-alt'><SearchIcon sx={{ fontSize: 30 }} ></SearchIcon></i>
                            </div>
                            <ul class="user-menu">
                                <li><a href="#"><i class='bx bx-bell'><NotificationsNoneIcon sx={{ fontSize: 35}}></NotificationsNoneIcon></i></a></li>
                                <li><a href="#"><i class='bx bx-user-circle'><PersonOutlineIcon sx={{ fontSize: 35}}></PersonOutlineIcon></i></a></li>
                                <li><a href="#"><i class='bx bx-cart'><ShoppingBasketOutlined sx={{ fontSize: 35}}></ShoppingBasketOutlined></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="bg-second">
                        <div class="bottom-header container">
                            <ul class="main-menu">
                                <li><a href="#">home</a></li>
                                <li>
                                    <a href="./products.html">Shop</a>
                                </li>
                                <li><a href="#">blog</a></li>
                                <li><a href="#">contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
