import React, { useEffect, useState } from "react";
import Descriptive from "./Descriptive";
import Mission from "./Mission";
import styles from "./styles.module.scss";
import SunAsterisk from "./SunAsterisk";
import Values from "./Values";
import Business from "../Business"
import Ceo from "./Ceo";
import LineOfficer from "./LineOfficer";

const AboutUs = () => {
    
    
    return (
        <div className={styles.aboutUs}>
            <Descriptive/>
            <SunAsterisk/>
            <Mission/>
            <Values/>
            <Business/>
            <Ceo/>
            <LineOfficer/>
        </div>
    )
}
export default AboutUs;