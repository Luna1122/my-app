import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Nav from '../../Components/Nav'

const Signin = () => {
    return (
        <>
        <Nav/>

        <div className="container mt-4 mb-3">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 shadow-lg p-3">
                    <form>

                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" placeholder="Enter your email" id="email"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" placeholder="Enter your password" id="password"/>
                        </div>

                        <div className="mb-3">
                              <Link to="/password" className="text-decoration-none">Forgot password? 
                            </Link>
                        </div>

                        <div className="col md-6 mb-3">
                            <button className="btn btn-primary form-control">Sign in</button>
                        </div>

                        <div className="mb-3">
                             Not registered yet? &nbsp; <b><Link to="/signup" className="text-decoration-none">
                            Signup</Link></b>
                        </div>
                    </form>

                </div>

            </div>
        </div>
        <Footer/>
            
        </>
    )
}

export default Signin
