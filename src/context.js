import React, { Component } from 'react';
import { storeProducts, detailProduct}  from './data'

const ContextProvider = React.createContext()


class ProductProvider extends Component {

    state ={
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen:false,
        modalProduct: detailProduct
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

    render() {
        return (
            <ContextProvider.Provider value={{...this.state, handleDetail: this.handleDetail, addToCart: this.addToCart, openModal: this.openModal, closeModal: this.closeModal}}>
               
            {this.props.children}
            </ContextProvider.Provider>
        );
    }
}

const ConsumerProvider = ContextProvider.Consumer

export  {ProductProvider, ConsumerProvider}
