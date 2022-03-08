import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Link from "next/link";

const GeneralNews = () => {
    const  news  = useSelector(state => state.news)

    const {t} = useTranslation()
    
    return (
        <Grid item container spacing={1} xs={12} sm={12} md ={8} lg={8} className={styles.generalNews}>
            {news.news.news_project && news.news.news_project.map((item, index)=> (
                <Grid key={index} item xs={12} sm={6} md ={6} lg={6} >
                    <div className={styles.wrapper}>
                        <div className={styles.image}>
                            <img src={item.image_description}/>
                        </div>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <Link href={`/components/News/General/GeneralNews/${item.id}`}>
                            <a>

                                <div className={styles.btn}>
                                    <h3>{t("common.viewDetail")}</h3>
                                    <div className={styles.icon}><ArrowRightAltIcon style={{margin: "auto"}}/></div>
                                </div>
                            </a>
                        </Link>
                    </div>
                </Grid>
            ))}
            <Button variant="contained" className={styles.btnAll}>
                <h3>{t("common.seeMore")}</h3>
                <div className={styles.icon}><ArrowRightAltIcon style={{margin: "auto"}}/></div>
            </Button>
        </Grid>
    )
}
export default GeneralNews;