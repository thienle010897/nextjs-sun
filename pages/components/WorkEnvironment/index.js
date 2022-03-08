import { Button, Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CheckIcon from '@material-ui/icons/Check';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";


const WorkEnvironment = () => {
    const { t } = useTranslation()
    const list = [
        {
            title: "createEnvironment"
        },
        {
            title: "empower"
        },
        {
            title: "supporting"
        },
        {
            title: "eventful"
        },
        {
            title: "forWomen"
        },
        {
            title: "appealing"
        },
    ]
    
    return (
        <div className={styles.workEnvironment}>
            <Container>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md ={6} lg={6} style={{
                            justifyContent: "space-around",
                            display: "flex",
                            flexDirection: "column"
                        }}>
                        <div className={styles.title}>{t("common.environment")}</div>
                        <div className={styles.list}>
                            {list.map((item, index)=> (
                                <div key={index} className={styles.item}>
                                    <div className={styles.checkBg}>
                                        <CheckIcon className={styles.checkIcon}  />
                                    </div>
                                    {t(`common.${item.title}`)}
                                </div>
                            ))}
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md ={6} lg={6} style={{
                        position: "relative",
                        width: "100%"
                    }}>
                        <div className={styles.image}>
                            <img src="https://sun-asterisk.vn/wp-content/uploads/2021/03/C38A0096aaMTLV_Cover-3.jpg"/>
                        </div>
                        <Button variant="contained" className={styles.btn}>
                            <h3>{t("common.viewDetail")}</h3>
                            <div className={styles.icon}><ArrowRightAltIcon style={{margin: "auto"}}/></div>
                        </Button>   
                    </Grid>
                </Grid>
        
            </Container>
        </div>
    )
}
export default WorkEnvironment;