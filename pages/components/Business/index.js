import { Button, Container, Grid } from "@material-ui/core";
import React from "react";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const Business = () => {
    const { t } = useTranslation()
    return (
        <div className={styles.business}>
            <Container >
                <div className={styles.title}>{t("common.business")}</div>
                <div className={styles.content}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md ={6} lg={6}>
                            <p>{t("common.descFisrt")}</p>
                            <p>{t("common.descLast")}</p>
                            
                        </Grid>
                        <Grid item xs={12} sm={6} md ={6} lg={6}>
                            <div className={styles.image}>
                                <img src="https://sun-asterisk.vn/wp-content/uploads/2020/11/intro-business.png"/>
                            </div>
                        </Grid>
                        
                    </Grid>
                </div>
                <div className={styles.field}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md ={6} lg={6}>
                            <div className={styles.creative}>
                                <p>Digital Creative Studio</p>
                                <h1>Creative</h1>
                                <h1>{`& Engineering`}</h1>
                                <h5>{t("common.descCreate")}</h5>
                                <Button variant="contained" className={styles.btn}>
                                    <h3>{t("common.seeMore")}</h3>
                                    <div className={styles.icon}><ArrowRightAltIcon style={{margin: "auto"}}/></div>
                                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md ={6} lg={6}>
                            <div className={styles.platform}>
                                <p>Digital Creative Studio</p>
                                <h1>Talent</h1>
                                <h1>Platform</h1>
                                <h5>{t("common.descTalent")}</h5>
                                <Button variant="contained" className={styles.btn}>
                                    <h3>{t("common.seeMore")}</h3>
                                    <div className={styles.icon}><ArrowRightAltIcon style={{margin: "auto"}}/></div>
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}
export default Business;