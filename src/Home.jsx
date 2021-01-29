import React from 'react'
import CommonPage from './CommonPage'
import Web from "../src/Images/rocket.svg";

const Home = () => {
    return (

        <CommonPage
            name="Grow Your Business"
            visit="/service"
            btnname="Get Started"
            imgsrc={Web}
        >
        </CommonPage>
    )
}

export default Home
