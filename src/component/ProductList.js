import React, { Component } from 'react';
import Product from './Product'
import Title from './Title'
import { ConsumerProvider } from '../context' 

export default class ProductList extends Component {
  
    render() {
        return (
            <div className='py-5'>
                <div className="container">
                <Title name='Our' title='Product'/>
                    <div className="row">
                        <ConsumerProvider>
                            {(value)=>{
                                return value.products.map(product =>{
                                    return <Product product={product} key={product.id} />
                                })
                            }}
                        </ConsumerProvider>
                    </div>
                </div>

            </div>
        );
    }
}
