import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { loadNewsStart } from "../../../../actions";

const Project = () => {
    const  news  = useSelector(state => state.news)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(loadNewsStart())
    }, [])
    const router = useRouter();
    const { newHotId } = router.query;
    
    return (
        <div className={styles.new}>
            {news.news.news_hot && news.news.news_hot
                .filter(item => item.id === Number(newHotId))
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