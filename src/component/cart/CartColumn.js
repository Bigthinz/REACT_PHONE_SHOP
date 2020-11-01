import React from 'react';

const CartColumn = () => {
    return (
        <div className='container-fluid d-none text-center d-lg-block'>
            <div className="row">
                <div className="col-10 col-lg-2 mx-auto">
                    <p className="text-uppercase">products</p>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <p className="text-uppercase">name of product</p>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <p className="text-uppercase">price</p>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <p className="text-uppercase">quantity</p>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <p className="text-uppercase">remove</p>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <p className="text-uppercase">total</p>
                </div>
            </div>           
        </div>
    );
}

export default CartColumn;
