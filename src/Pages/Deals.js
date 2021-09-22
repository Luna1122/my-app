import React from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'

const Deals = () => {
    return (
        <>
            <Nav />

            <div className="container-fluid mt-5 mb-4">
                <h2>Deals and Promotion</h2>
                <p>Shop Today's Deals, Lightning Deals, amd limited-time discount</p>

                <div className="row d-flex justify-content-evenly">
                    <div className="col-md-3">
                        <h6>Department</h6>
                        <form>
                            <div class="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Arts, Crafts & Sewing
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Automotive & Motorcycle
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Baby
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Baby Clothing & Accessories
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Beauty
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Books
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Boys' Fashion
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Camera & Photo
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Cell Phones & Accessories
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Computers & Accessories
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Costumes & Accessories
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Electronics
                                </label>
                            </div>
                        </form>

                        <i class="bi bi-chevron-down"></i><a href="#" class="text-decoration-none">See more
                        Department</a><br/>
                    <br/>
                    <b>Deal Type</b>
                    <ul class="p-0">
                        <li class="list-unstyled"><a href="#" class="text-decoration-none">Deal of the day</a></li>
                        <li class="list-unstyled"><a href="#" class="text-decoration-none">Lightning Deals</a></li>
                        <li class="list-unstyled"><a href="#" class="text-decoration-none ">Savings & Sales</a></li>
                        <li class="list-unstyled"><a href="#" class="text-decoration-none">Prime Early Access Deals</a></li>
                    </ul>
                    </div>

                    <div className="col-md-9">
                    <div className="container-fluid mt-4">
                <div className="row row-cols-1 row-cols-md-4 g-4" >
                    <div className="col">
                        <div className="card shadow-lg">
                            <div className="card-img">
                                <img src="./images/4.jpg" className="card-img-top" alt="..." style={{ height: '400px' }} />
                            </div>
                            <div className="card-body">
                                <center><h5 className="card-title">Card title</h5></center>
                                <center><button className="btn btn-success">View Details</button></center>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <div className="card-img">
                                <img src="./images/1.jpg" className="card-img-top" alt="..." style={{ height: '400px' }} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center">Card title</h5>
                                <center><button className="btn btn-success">View Details</button></center>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <div className="card-img">
                                <img src="./images/2.jpg" className="card-img-top" alt="..." style={{ height: '400px' }} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center">Card title</h5>
                                <center><button className="btn btn-success">View Details</button></center>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <div className="card-img">
                                <img src="./images/3.jpg" className="card-img-top" alt="..." style={{ height: '400px' }} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center">Card title</h5>
                                <center><button className="btn btn-success">View Details</button></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    </div>
                </div>

            </div>


            <Footer />
        </>
    )
}

export default Deals
