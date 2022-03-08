import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Project = () => {
    const  news  = useSelector(state => state.news)
    
    const router = useRouter();
    const { newGeneralId } = router.query;
    
    return (
        <div className={styles.new}>
            {news.news && news.news.news_project
                .filter(item => item.id === Number(newGeneralId))
                .map(item=> (
                    <div key={item.id} className={styles.wrapper}>
                        <h2>{item.title}</h2>
                        <h5>{item.description}</h5>
                        <div className={styles.image}>
                            <img src={item.image_description}/>
                        </div>
                        <div className={styles.detail}  dangerouslySetInnerHTML={{ __html: item.detail }}></div>

                    </div>
                ))
            }
        </div>
    )
}
export default Project;