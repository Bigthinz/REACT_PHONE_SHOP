import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ConsumerProvider } from '../context'

export default class Product extends Component {
    render() {
        const {id,title,img,price,info, inCart} = this.props.product
        return (
            <ProductWrapper className='col-9 col-md-6 col-lg-3 mx-auto my-3'>
                <div className="card">
                <ConsumerProvider>
                    {(value)=>(
                        <div className="img-container p-5">
                        <Link to='/details'>
                            <img src={img} alt="product image" className='card-img-top' onClick={()=> value.handleDetail(id)}/>
                        </Link>
                        <button className="cart-btn" disabled={inCart?true:false} onClick={()=> {value.addToCart(id); value.openModal(id)}}>
                        {inCart?(<p className='text-capitalize mb-0' disabled>{''}in Cart</p>): (<i className='fas fa-cart-plus'/>)}
                        
                        </button>
                    </div>
                    )}  
                    </ConsumerProvider>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="mb-0 text-blue font-italic">
                            <span className="mr-1">$</span>{price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes ={
    product: PropTypes.shape({
        id:PropTypes.number,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool,
        img:PropTypes.string
    }).isRequired
}


const ProductWrapper = styled.div`
.card{
    border:transparent;
    transition: all .5s linear;

}

.card-footer{
    background: transparent;
    border-top:transparent;
    transition: all .5s linear;
}

&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,.2);
        box-shadow: 2px 2px 5px 0 rgba(0,0,0,.2);
    }
    .card-footer{
        background:rgba(247,247,247)
    }
}

.img-container{
    position:relative;
    overflow:hidden;
}

.card-img-top{
    transition: all .5s linear;
}

.img-container:hover .card-img-top{
    transform: scale(1.2);
}

.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border:none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%,100%);
    transition: all 0.5s linear;
}

.img-container:hover .cart-btn{
    transform: translate(0,0);
}

.cart-btn:hover{
    color: var(--mainBlue);
    cursor: pointer;
}
`