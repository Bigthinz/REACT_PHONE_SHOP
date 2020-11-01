import React, { Component } from 'react'
import Title from '../Title'
import CartColumn from './CartColumn'
import EmptyCart from './EmptyCart'
import { ConsumerProvider } from '../../context'
import CartList from './CartList'

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ConsumerProvider>
                
                    {(value)=>{
                        const {cart} = value
                        if(cart.length > 0){
                            return(
                                 <React.Fragment>
                                 <Title name='your' title='cart'/>
                                 <CartColumn/>
                                 <CartList value={value}/>
                                 </React.Fragment>
                            )
                        }else{
                            return <EmptyCart/>
                        }
                    }}
                    
                </ConsumerProvider>
            </section>
            
        )
    }
}

