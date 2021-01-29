import React from 'react'
import Sdata from './Sdata'
import Card from "./Card";

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Oue Services</h1>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className='col-10 mx-auto'>
                            <div className="row gy-4">
                                {Sdata.map((val, ind) => {
                                    return <Card key={ind}
                                        imgscr={val.imgscr}
                                        title={val.title}></Card>
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;
