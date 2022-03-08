import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const SunAsterisk = () => {
    const { t } = useTranslation()
    
    return (
        <div className={styles.sunAsterisk}>
            <div className={styles.content}>
                <div className={styles.wrapper}>
                    <Grid container spacing={3} style={{alignItems: "center"}}>
                        <Grid item xs={4} sm={4} md={2} lg={2}>
                            <div className={styles.image}>
                                <img src="https://sun-asterisk.vn/wp-content/uploads/2020/11/bear-1.png"/>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={10} lg={10}>
                            <h3>{t("common.companyName")}</h3>
                            <p>{t("common.descCompanyName")}</p>
                            <div className={styles.btn}>
                                <h3>{t("common.viewDetail")}</h3>
                                <div className={styles.icon}><ArrowRightAltIcon style={{margin: "auto"}}/></div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>

        </div>
    )
}
export default SunAsterisk;