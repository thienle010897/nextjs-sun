import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Slider from "react-slick";
import { loadProjectsStart } from "../../actions";
import Partner from "./Partner";
import Projects from "./Projects";
import Slide from "./Slide";

import styles from "./styles.module.scss";

const ProjectsRouter = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(loadProjectsStart())
    }, [])
    return (
        <div className={styles.projectsRouter}>
            <Slide/>
            <Projects/>
            <Partner/>
        </div>
    )
}
export default ProjectsRouter;