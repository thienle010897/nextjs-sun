import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

const Partner = () => {
    const {t} = useTranslation()
    const partners = [
        {
            image: "https://sun-asterisk.vn/wp-content/uploads/2021/03/logo-group-square.png"
        },
        {
            image: "https://sun-asterisk.vn/wp-content/uploads/2021/03/linepay-logo-jp-gl.png"
        },
        {
            image: "https://sun-asterisk.vn/wp-content/uploads/2021/03/globies-university-tokyo-japan.jpg"
        },
        {
            image: "https://sun-asterisk.vn/wp-content/uploads/2021/03/1570501413553.png"
        },
        {
            image: "https://sun-asterisk.vn/wp-content/uploads/2021/03/1519879911549.png"
        },
        {
            image: "https://sun-asterisk.vn/wp-content/uploads/2021/03/2892232_500_0.jpg"
        },
        {
            image: "https://sun-asterisk.vn/wp-content/uploads/2021/03/Sony-global-education-SEO-image.png"
        },
        {
            image: "https://sun-asterisk.vn/wp-content/uploads/2021/03/one_logo.jpg"
        },
        {
            image: "https://sun-asterisk.vn/wp-content/uploads/2021/03/nippon-gases-logo.jpg"
        },
        {
            image: "https://sun-asterisk.vn/wp-content/uploads/2021/03/NEG_-logo.jpg"
        },
        {
            image: "https://sun-asterisk.vn/wp-content/uploads/2021/03/1bdc3010d1dcb4163f74.png"
        },
        {
            image: "https://sun-asterisk.vn/wp-content/uploads/2021/03/5270e56fadc49a4d949074be1b005602.jpg"
        },

    ]
    
    return (
        <div className={styles.partner}>
            <div className={styles.title}>{t("common.partner")}</div>
                <div className={styles.content}>
                    <Grid container spacing={2}>
                        {partners.map((item, index)=> (

                            <Grid key={index} item xs={4} sm={4} md={2} lg={2} className={styles.item}>
                                <div className={styles.image}>
                                    <img src={item.image}/>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>

        </div>
    )
}
export default Partner;