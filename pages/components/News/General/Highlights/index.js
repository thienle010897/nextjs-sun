import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Link from "next/link";
const Highlights = () => {
    const  news  = useSelector(state => state.news)

    const {t} = useTranslation()
    
    return (
        <Grid item  xs={12} sm={12} md ={4} lg={4} className={styles.highlights}>
            <h2 className={styles.title}>Tin tức nổi bật</h2>
            {news.news.news_royal && news.news.news_royal.map((item, index)=> (
                <Grid key={index} container spacing={1} item  xs={12} sm={12} md ={12} lg={12} className={styles.item}>
                    <Grid  item  xs={4} sm={4} md ={4} lg={4}>
                        <div className={styles.image}>
                            <img src={item.image_description}/>
                        </div>
                    </Grid>
                    <Grid  item  xs={8} sm={8} md ={8} lg={8}>
                        <Link href={`/components/News/General/Highlights/${item.id}`}>
                            <a>
                                <p>{item.description}</p>
                            </a>
                        </Link>
                        <h5>{item.title}</h5>
                    </Grid>
                </Grid>

            ))}
        </Grid>
    )
}
export default Highlights;