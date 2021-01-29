import React from 'react'
import { NavLink } from 'react-router-dom';
import Web from "../src/Images/software.png";
import CommonPage from "./CommonPage";

function About() {
    return (
        <>
            <CommonPage
                name="Welcome to About"
                visit="/contact"
                btnname="Contact"
                imgsrc={Web}
            >
            </CommonPage>

        </>
    )
}

export default About;
