import React, { Component } from 'react'
import {ConsumerProvider} from '../context'
import { ButtonContainer } from './Button'
import { Link } from 'react-router-dom'

export default class Details extends Component {
    render() {
        
        return (
            <ConsumerProvider>
                {(value)=>{
                    const {id,img,info,company,inCart,price,title} = value.detailProduct;

                    return(
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                       <img src={img} alt="product-img" className="img-fluid"/>
                                    </div>
                                    {/* product text*/}

                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h2>model: {title}</h2>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                             made by: <span className="text-uppercase">{company}</span>

                                        </h4>
                                        <h4 className="text-blue">
                                            <strong>price: <span>$</span>{price}</strong>
                                        </h4>
                                        <p className="text-capitalize font-weight-bold mt-3 tb-0">some info about product</p>
                                        <p className="text-muted lead">{info}</p>
                                        {/*buttons */}
                                        <div>
                                            <Link to='/'>
                                                <ButtonContainer>
                                                    back to products
                                                </ButtonContainer>
                                                
                                            </Link>
                                            <ButtonContainer cart disabled={inCart?true:false} onClick={()=>{value.openModal(id); value.addToCart(id)}}>
                                                {inCart?'in Cart':'add to cart'}
                                            </ButtonContainer>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ConsumerProvider>
        )
    }
}
