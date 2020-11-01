import React, { Component } from 'react';
import { storeProducts, detailProduct}  from './data'

const ContextProvider = React.createContext()


class ProductProvider extends Component {

    state ={
        products: [],
        detailProduct: detailProduct,
        cart: storeProducts,
        modalOpen:false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

componentDidMount (){
    this.setProducts()
}

setProducts =()=>{
    let tempProduct = []
    storeProducts.forEach( item =>{
        const singleProduct = { ...item }
        tempProduct = [ ...tempProduct, singleProduct ]

    }) 
    
    this.setState(()=>{
       
        return {products: tempProduct}
    })

   
} 

getItem = (id)=>{
    const product = this.state.products.find(item => item.id === id)
    return product
}

handleDetail = (id)=>{
    const product = this.getItem(id)

    this.setState(()=>{
        return {detailProduct:product}
    })
}

addToCart = (id)=>{
    const tempProduct = this.state.products
    const index = tempProduct.indexOf(this.getItem(id))
    const product = tempProduct[index]
    product.inCart = true
    product.count = 1
    const price = product.price
    product.total = price

    this.setState(()=>{
        return {products: tempProduct, cart: [...this.state.cart, product]}
    },()=>{
        console.log(this.state)
    })
}

openModal= (id)=>{
    const product = this.getItem(id)

    this.setState(()=>{
        return {modalProduct: product, modalOpen: true}
    })
}

closeModal= ()=>{
    this.setState(()=>{
        return {modalOpen:false}
    })
}

increment = (id)=>{
    console.log('this is the increment method')
}

decrement = (id)=>{
    console.log('this is the idecrement method')
}

removeItem = (id)=>{
    console.log('removed item')
}

clearCart = ()=>{
    console.log('cart is cleared')
}

    render() {
        return (
            <ContextProvider.Provider value={{...this.state, handleDetail: this.handleDetail, addToCart: this.addToCart, openModal: this.openModal, closeModal: this.closeModal, increment: this.increment, decrement: this.decrement, removeItem: this.removeItem, clearCart: this.clearCart}}>
               
            {this.props.children}
            </ContextProvider.Provider>
        );
    }
}

const ConsumerProvider = ContextProvider.Consumer

export  {ProductProvider, ConsumerProvider}
