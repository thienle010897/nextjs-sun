import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import GeneralNews from "./GeneralNews";
import Highlights from "./Highlights";


const General = () => {
    const  news  = useSelector(state => state.news)

    const {t} = useTranslation()
    
    return (
        <div className={styles.general}>
            <div className={styles.title}>{t("common.generalNews")}</div>
            <div className={styles.content}>
                <Grid container spacing={2}>
                    <GeneralNews/>
                    <Highlights/>
                </Grid>
            </div>

        </div>
    )
}
export default General;