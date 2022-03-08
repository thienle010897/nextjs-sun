import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import styles from "./styles.module.scss";
import { Grid } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Slide = () => {
    const  projects  = useSelector(state => state.projects)
    const {t} = useTranslation()
    
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
    
    return (
        <div className={styles.slideWrapper}>
            <div className={styles.content}>
                <div className={styles.slide}>
                    <Slider {...settings}>
                        {projects.projects && projects.projects.map((item, index) => (
                            <div key={index} className={styles.slideItem}>
                                <Grid container spacing={1}  >
                                    <Grid item xs={12} sm={10} md={5} lg={5} className={styles.desc}>
                                        <p>{item.investor}</p>
                                        <h4>{item.title}</h4>
                                        <p>{item.project_name}</p>
                                        <div className={styles.btn}>
                                            <h3>{t("common.viewDetail")}</h3>
                                            <div className={styles.icon}><ArrowRightAltIcon style={{margin: "auto"}}/></div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={7} lg={7}>
                                        <div className={styles.image}>
                                            <img src={item.image_description}/>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default Slide;