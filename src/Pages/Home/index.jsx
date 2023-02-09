import React from "react";
import "./Home.scss"
import SectionTest from "../../Components/SectionTest";

/**
 * Page Home
 * @returns {JSX} React Component
 */

const Home = () => {


    return(
        <div className="container__home">
            <div className="container__home-title">
                <h1>Test technique WEB-ATRIO réalisé par Chambet Rayan<br/>réalisé le 09/02/2022</h1>
            </div>
            <SectionTest />
        </div>
    )
}

export default Home;