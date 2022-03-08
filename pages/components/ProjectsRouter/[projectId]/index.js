import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Project = () => {
    const  projects  = useSelector(state => state.projects)
    
    const router = useRouter();
    const { projectId } = router.query;

    
    
    return (
        <div className={styles.project}>
            {projects.projects && projects.projects
                .filter(item => item.id === Number(projectId))
                .map(item=> (
                    <div key={item.id} className={styles.wrapper}>
                        <h2>{item.title}</h2>
                        <h5>{item.project_name}</h5>
                        <div className={styles.image}>
                            <img src={item.image_description}/>
                        </div>
                        <div className={styles.detail}  dangerouslySetInnerHTML={{ __html: item.content }}></div>

                    </div>
                ))
            }
        </div>
    )
}
export default Project;