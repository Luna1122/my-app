import React from 'react'
import Footer from '../../Components/Footer'
import Nav from '../../Components/Nav'

const Createpwd = () => {
    return (
        <>
            <Nav />

            <div className="container mt-4 mb-3">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 shadow-lg p-3">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="newpwd">New Password</label>
                                <input text="password" className="form-control" placeholder="Enter new password" id="newpwd" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="cnewpwd">Confirm New Password</label>
                                <input text="password" className="form-control" placeholder="Confirm new password" id="cnewpwd" />
                            </div>

                            <div className="col md-6 mb-3">
                                <button className="btn btn-primary form-control">Create</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Createpwd
