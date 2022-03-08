import React, { useEffect, useState } from "react";
import Business from "./Business";
import Projects from "./Projects";
import { useWindowScroll } from "react-use";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.scss";
import VideoHome from "./VideoHome";
import Asterick from "./Asterisk";
import WorkEnvironment from "./WorkEnvironment";
import Events from "./Events";
import { loadProjectsStart } from "../actions";

const HomePage = () => {
    const dispatch = useDispatch()
    const {y: pageYOffset} = useWindowScroll()
    const [countActive, setCountActive] = useState(false)
    useEffect(() => {
        if (pageYOffset > 1000 && pageYOffset < 1500) {
            setCountActive(true)
        } else {
            setCountActive(false)
        }
    }, [pageYOffset])
    
    return (
        <div className={styles.homePage}>
            <VideoHome/>
            <Business/>
            <Projects countActive={countActive}/>
            <Asterick/>
            <WorkEnvironment/>
            <Events/>
        </div>
    )
}
export default HomePage;