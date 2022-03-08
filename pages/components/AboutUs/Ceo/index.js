import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
const Ceo = () => {
    const { t } = useTranslation()
    
    
    return (
        <div className={styles.ceo}>
            <div className={styles.content}>
                <div className={styles.wrapper}>

                    <Grid container spacing={3} style={{padding: "20px"}}>
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                            <div className={styles.image}>
                                <img src="https://sun-asterisk.vn/wp-content/uploads/2021/03/a9a224bc-0473-4c6f-90c7-d0f738f5c44e.jpg"/>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9}>
                            <h2>CEO</h2>
                            <h1>Taihei Kobayashi</h1>
                            <p>{t("common.descCeoOne")}</p>
                            <p>{t("common.descCeoTwo")}</p>
                            <p>{t("common.descCeoThree")}</p>
                            <div className={styles.btn}>
                                <h3>{t("common.seeMore")}</h3>
                                <div className={styles.icon}><ArrowRightAltIcon style={{margin: "auto"}}/></div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>

        </div>
    )
}
export default Ceo;