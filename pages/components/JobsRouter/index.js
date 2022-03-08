import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadCareersError, loadCareersStart } from "../../actions";
import Descriptive from "./Descriptive"
import styles from "./styles.module.scss";
import Teams from "./Teams";

const JobsRouter = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(loadCareersStart())
    }, [])
    return (
        <div className={styles.jobsRouter}>
            <Descriptive/>
            <Teams/>
        </div>
    )
}
export default JobsRouter;