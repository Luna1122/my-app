import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../../Components/Footer'
import Nav from '../../Components/Nav'

const Signup = () => {
    return (
        <>
        <Nav/>

        <div className="container mt-4 mb-3">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 shadow-lg p-3">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="firstname">FirstName</label>
                            <input type="text" className="form-control" placeholder="Enter your first name" id="firstname"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="lastname">LastName</label>
                            <input type="text" className="form-control" placeholder="Enter your last name" id="lastname"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" placeholder="Enter your email" id="email"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" placeholder="Enter your password" id="password"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="cpassword">Confirm password</label>
                            <input type="password" className="form-control" placeholder="Confirm your password" id="cpassword"/>
                        </div>

                        <div className="col md-6 mb-3">
                            <button className="btn btn-primary form-control">Sign Up</button>
                        </div>

                        <div className="mb-3">
                             Already have an account? &nbsp; <b><Link to="/signin" className="text-decoration-none">
                             Signin</Link></b>
                        </div>
                    </form>

                </div>

            </div>
        </div>



        <Footer/>

            
        </>
    )
}

export default Signup
