import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles.module.scss";
import Hot from "./Hot"
import General from "./General"
import { loadNewsStart } from "../../actions";


const News = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(loadNewsStart())
    }, [])
    
    return (
        <div className={styles.news}>
            <Hot/>
            <General/>
        </div>
    )
}
export default News;