import React, { useEffect, useState } from "react";
import Descriptive from "./Descriptive"
import styles from "./styles.module.scss";
import Creation from "./Creation";
import Proactive from "./Proactive";
import Support from "./Support";
import Movement from "./Movement";
import Asterick from "./Asterisk";




const JobsRouter = () => {
    
    
    return (
        <div className={styles.jobsRouter}>
            <Descriptive/>
            <Creation/>
            <Proactive/>
            <Support/>
            <Movement/>
            <Asterick/>
        </div>
    )
}
export default JobsRouter;