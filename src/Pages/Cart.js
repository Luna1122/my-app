import React from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'

const Cart = () => {
    return (
        <>
            <Nav />

            <div className="container">
                <div className="row d-flex justify-content-between">
                    <h2 className="text-center mt-4 mb-3">Your cart items</h2>
                    <div className="col-md-8">
                        <div className="shadow p-2 d-flex align-items-center">
                            <div className="col-3">
                                <img src="/images/1.jpg" alt="..." width="70" />
                            </div>
                            <div className="col-2">
                                <b><span>Dell</span></b>
                            </div>
                            <div className="col-2">
                                <span className="text-warning">Rs.80000</span>
                            </div>
                            <div className="col-3">
                                <div className="d-flex justify-content-evenly">
                                    <button className="btn btn-danger">-</button>
                                    <input type="number" value="1" readOnly className="form-control border-0"/>
                                    <button className="btn btn-primary">+
                                    </button> &nbsp;&nbsp;
                                </div>

                                

                            </div>
                            <div className="col-1">
                                <button className="btn btn-danger"><i className='bx bxs-trash'></i></button>
                            </div>

                            
                        </div>

                    </div>

                    <div className="col-md-3">
                        <div className="shadow p-2">
                            <h5 className="text-muted">Cart Summary</h5>
                            <hr/>
                            <span><b>Units:</b>1(Units)</span>
                            <hr/>
                            <span><b>Total:</b>Rs.80000</span>
                            <hr/>
                            <button className="btn btn-warning">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Cart
