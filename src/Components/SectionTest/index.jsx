import React, { useState } from "react";
import "./SectionTest.scss"
import ProgressBar from "../ProgressBar";

/**
 * Section Test is where the test is happening
 * @returns {JSX} React Component
 */
const SectionTest = () => {
    const [firstBar, setFirstBar] = useState(50);
    const [secondBar, setSecondBar] = useState(25);
    
    /**
     * Function that resets the values of the progressbars
     */
    const handleReset = () => {
        setFirstBar(0);
        setSecondBar(0);
    }
    /**
     * Function IncrementBy allow to increment the values of the progressbar
     * depending on the value of the parameter
     * @param {Number} amount 
     */
    const incrementBy = (amount) => {
        let total1 = firstBar + amount;
        let total2 = secondBar + amount;
        if(total1 <= 100){
            setFirstBar(firstBar + amount)
        }
        if(total2 <=100){
            setSecondBar(secondBar + amount)
        }
    }

    return(
        <section className="container__test">
            <ProgressBar progression={firstBar} title={"Initialisation du test technique"} />
            <ProgressBar progression={secondBar} title={"Avancement de la phase de développement"} />
            <div className="container__test-btn">
                <button onClick={handleReset}>Remettre à zéro les compteurs</button>
                <button onClick={() =>incrementBy(5)}>Ajouter 5%</button>
                <button onClick={() =>incrementBy(10)}>Ajouter 10%</button>
            </div>
        </section>
    )
}

export default SectionTest;