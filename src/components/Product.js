import React, { useState, useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import CardLogo from '../assets/cart.png';
import Profile from '../assets/profile.png';
import search from '../assets/search.png';
import axios from 'axios';
import Swal from 'sweetalert2';
import Detail from './Detail';


export default function Product() {


    const cartData = [];

    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get("https://5fc9346b2af77700165ae514.mockapi.io/products")
            .then(res => {
                setPosts(res?.data)
                localStorage.setItem("MyCart", JSON.stringify());
            })
            .catch(error => {
                console.log(error)
            })

    }, []);

    const navigate = useNavigate();

    const navigateDetails = (item) => {
        localStorage.setItem("productimage", (item.image));
        localStorage.setItem("productname", (item.name));
        localStorage.setItem("productprice", (item.price));
        localStorage.setItem("productdescription", (item.description));
        navigate("/details");
    }

    const MySwal = (item) => {
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Added to your cart.',
            showConfirmButton: false,
            timer: 1100
        })
        const cartDatas = {
            img: item.image,
            name: item.name,
            price: item.price,
            description: item.description
        }
        localStorage.setItem("MyCart", JSON.stringify(cartDatas));
        cartData.push(cartDatas);
    }

    var defaultValue = 12000;

    const [detailData, setDetailData] = React.useState(null);

    const [count, setCount] = useState(localStorage.getItem("Value") / defaultValue);

    const increase = () => {
        setCount(count + 1)
        localStorage.setItem("Value", JSON.stringify((defaultValue) + (checkOut)))
    }

    const decrease = () => {
        if (count > 0) {
            setCount(count - 1)
            localStorage.setItem("Value", JSON.stringify((checkOut) - (defaultValue)))
        }
    }

    const checkOut = defaultValue * count;

    const totalPrice = localStorage.getItem("Value");

    const added = (totalPrice / defaultValue);

    console.log("Sepete Eklenen Ürünler:", cartData);

    return (
        <div className="grid-container">
            <div className="item1">
                <header>
                    <a href="/" className="logo">Eteration</a>
                    <div className="search">
                        <input className="info-input" type="text" placeholder="Search" />
                        <img className='fa fa-search' aria-hidden="true" src={search} alt='' />

                    </div>
                    <ul className="navigation">
                        <div className='header-right-l'>
                            <li><button><img className='wallet' src={CardLogo} alt='' /></button></li>
                            <li><p className='header-p'>{totalPrice} $</p></li>
                        </div>
                        <li><button><img src={Profile} alt='' /></button></li>
                        <li><p className='header-p'>Mehmet Türkan</p></li>
                    </ul>
                </header></div>
            <div className="item2">
                <p className='sort'>Sort By</p>
                <div className='sort-box'>
                    <label className="container">Old to new
                        <input className="radio-button" type="radio" checked="checked" name="radio" />
                        <span className="checkmark"></span>
                    </label>
                    <br />
                    <label className="container">New to old
                        <input className="radio-button" type="radio" name="radio" />
                        <span className="checkmark"></span>
                    </label>
                    <br />
                    <label className="container">Price hight to low
                        <input className="radio-button" type="radio" name="radio" />
                        <span className="checkmark"></span>
                    </label>
                    <br />
                    <label className="container">Price low to high
                        <input className="radio-button" type="radio" name="radio" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <p className='sort'>Brands</p>
                <div className='brands-box'>
                    <div>
                        <input className='brands-input' type="search" placeholder='Search' />
                        <input type="checkbox" id="scales" name="scales" />
                        <label className='brands-box-name' for="scales">Apple</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label className='brands-box-name' for="horns">Samsung</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label className='brands-box-name' for="horns">Huawei</label>
                    </div>
                </div>

                <p className='sort'>Model</p>
                <div className='brands-box'>
                    <div>
                        <input className='brands-input' type="search" placeholder='Search' />
                        <input type="checkbox" id="scales" name="scales" />
                        <label className='brands-box-name' for="scales">iPhone 11</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label className='brands-box-name' for="horns">iPhone 12 Pro</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label className='brands-box-name' for="horns">iPhone 13 Pro Max</label>
                    </div>
                </div>
            </div>
            <div className="item3">
                {
                    posts?.map((item, index) => {

                        return (
                            <div className='grid-main-container' key={`product-${index}`}>
                                <div className='grid-main-item'>
                                    <img onClick={() => navigateDetails(item)} src={item.image} alt='' />
                                    <p className='price'>{`${item.price}$`}</p>
                                    <p className='p-desc'>{item.name}</p>
                                    <button className='main-button' onClick={() => MySwal(item)}>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })}

            </div>
            <div className="item4">
                <p className='cart-right'>Cart</p>
                <div className='cart-detail'>
                    <div className='cart-detail-num'>
                        <div className='cart-counter'>
                            <p className='product-right-name'>data.name</p>
                            <div className='cart-count-right'>
                                <button onClick={() => decrease()} className='cart-count-button'>-</button> <b className='cart-count'>{added}</b> <button onClick={() => increase()} className='cart-count-button'>+</button>
                            </div>
                        </div>
                        <p className='product-right-price'>12.000 $</p>
                    </div>
                </div>
                <p className='cart-rightss'>Checkout</p>
                <div className='cart-detailss'>
                    <p className='product-right-names'>Total Price : <span className='product-right-total-price'>{totalPrice} $</span></p>
                    <button className='main-button'>Checkout</button>
                </div>
            </div>
            <div className="item5">
            </div>
        </div>
    );
};
