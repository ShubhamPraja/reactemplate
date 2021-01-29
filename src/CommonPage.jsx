import React from 'react'
import { NavLink } from 'react-router-dom';


const CommonPage = (props) => {
    return (
        <section id="header" className="d-flex items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1  d-flex justify-content-center flex-column">
                                <div className="col-md-8">
                                    <h1>
                                        {props.name} 
                                        <strong className="brand-name">Acoustte</strong>
                                    </h1>
                                </div>
                                <h5>
                                    We are the team of talented developer making website
                            </h5>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className="btn-get-started">
                                        {props.btnname}
                                    </NavLink>
                                </div>
                            </div>

                            <div className="col-md-6 pt-5 pt-lg-50 order-1 order-lg-2 header-img animated">
                                <img src={props.imgsrc} alt="home"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CommonPage;
