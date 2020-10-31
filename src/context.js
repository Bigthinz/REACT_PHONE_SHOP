import React, { Component } from 'react';
import { storeProducts, detailProduct}  from './data'

const ContextProvider = React.createContext()


class ProductProvider extends Component {

    state ={
        products: storeProducts,
        detailProduct: detailProduct
    }
    
handleDetail = ()=>{
    console.log('from handle detail')
}

addToCart = ()=>{
    console.log('from add to cart')
}

    render() {
        return (
            <ContextProvider.Provider value={{...this.state, handleDetail: this.handleDetail, addToCart: this.addToCart}}>
                {this.props.children}
            </ContextProvider.Provider>
        );
    }
}

const ConsumerProvider = ContextProvider.Consumer

export  {ProductProvider, ConsumerProvider}
