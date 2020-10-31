import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default class Product extends Component {
    render() {
        const {id,title,img,price,info, inCart} = this.props.product
        return (
            <ProductWrapper className='col-9 col-md-6 col-lg-3 mx-auto my-3'>
                <div className="card">
                    <div className="img-container p-5">
                        <Link to='/details'>
                            <img src={img} alt="product image" className='card-img-top' onClick={()=> console.log('you clicked a product')}/>
                        </Link>
                        <button className="cart-btn" disabled={inCart?true:false} onClick={()=>console.log('added to cart')}>
                        {inCart?(<p className='text-capitalize mb-0' disabled>{''}in Cart</p>): (<i className='fas fa-cart-plus'/>)}
                        
                        </button>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}


const ProductWrapper = styled.div`

`