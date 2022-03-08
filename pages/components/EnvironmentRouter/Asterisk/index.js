import { Button, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useTranslation } from "react-i18next";

const Asterick = () => {
    
    const {t} = useTranslation()
    return (
        <div className={styles.asterick}>
            <Container>
                <div className={styles.bg}>
                    <div className={styles.content}>
                        
                        <h2>{`Join us & MAKE AWESOME THINGS THAT MATTER.`}</h2>
                        <h4>{t("common.descAsterrick")}</h4>
                        <Button variant="contained" className={styles.btn}>
                            <h3>{t("common.johnSun")}</h3>
                            <div className={styles.icon}><ArrowRightAltIcon style={{margin: "auto"}}/></div>
                        </Button>

                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Asterick;