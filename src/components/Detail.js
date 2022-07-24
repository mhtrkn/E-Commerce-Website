import React, { useState } from 'react'
import CardLogo from '../assets/cart.png';
import Profile from '../assets/profile.png';
import search from '../assets/search.png';
import Swal from 'sweetalert2'

function Detail(item) {

    const cartData = [];

    const [productData, setProductData] = useState({
        img: '',
        name: '',
        price: '',
        description: ''
    });

    const MySwal = (item) => {
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Added to your cart.',
            showConfirmButton: false,
            timer: 1100
        })
        const cartDatas = {
            img: image,
            name: name,
            price: price,
            description: description
        }
        localStorage.setItem("MyCart", JSON.stringify(cartDatas));
        cartData.push(cartDatas);
    }

    console.log("Sepete Eklenen Ürünler:", cartData);

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

    var name = (localStorage.getItem("productname"));
    var price = (localStorage.getItem("productprice"));
    var description = (localStorage.getItem("productdescription"));
    var image = (localStorage.getItem("productimage"));


    return (
        <div className="grid-containers">
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
                            <li><p className='header-p'>{checkOut} $</p></li>
                        </div>
                        <li><button><img src={Profile} alt='' /></button></li>
                        <li><p className='header-p'>Mehmet Türkan</p></li>
                    </ul>
                </header></div>
            <div className="item2">
            </div>
            <div className="item3-3">
                <div className='details-info-box'>
                    <div className='dib-left'>
                        <img src={image} alt='' />
                    </div>
                    <div className='dib-right'>
                        <div className='dib-content'>
                            <p>{name}</p>
                            <span>{price}$</span>
                        </div>
                        <button onClick={() => MySwal(item)} className='main-buttons'>
                            Add to Cart
                        </button>
                        <p className='dib-right-desc'>
                            {description}
                        </p>
                    </div>
                </div>
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
    )
}

export default Detail;