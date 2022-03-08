import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const FooterSun = () => {
    const { t } = useTranslation()
    const footers = [
        {
            title: "whoAreWe",
            list: [
                {
                    item: "vision",
                },
                {
                    item: "values",
                },
                {
                    item: "nameSun",
                },

            ]
        },
        {
            title: "whatDoWeDo",
            list: [
                {
                    item: "create",
                },
                {
                    item: "talent",
                },
                {
                    item: "ourProjects",
                },
            ]
        },
        {
            title: "updateNews",
            list: [
                {
                    item: "event",
                },
                {
                    item: "recruit",
                },
                {
                    item: "benefits",
                },
            ]
        },
        {
            title: "contact",
            list: [
                {
                    item: "phoneSun",
                },
                {
                    item: "emailSun",
                },
            ]
        },
    ]
    const offices = [
        {
            office: "officeOne"
        },
        {
            office: "officeTwo"
        },
        {
            office: "officeThree"
        },
        {
            office: "officeFour"
        },
        {
            office: "officeFive"
        },

    ]
    
    return (
        <div className={styles.footerSun}>
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <div className={styles.logo}>
                            <img src="https://sun-asterisk.vn/wp-content/uploads/2020/10/logo-sun@2x.png"/>
                        </div>
                    </Grid>
                    <Grid container spacing={2} item xs={12} sm={12} md={9} lg={9}>
                        {footers.map((item, index)=> (
                            <Grid key={index} item xs={6} sm={6} md={4} lg={4}>
                                <div  className={styles.item}>
                                    <h3>{t(`common.${item.title}`)}</h3>
                                    {footers[index].list.map((it, i)=> (
                                        <p key={i}>{t(`common.${it.item}`)}</p>
                                    ))}
                                </div>
                            </Grid>
                        ))}
                        
                        <Grid item xs={12} sm={12} md={8} lg={8}>
                            <div  className={styles.item}>
                                <h3>{t("common.office")}</h3>
                                {offices.map((item)=> (
                                    <p key={item.office}>{t(`common.${item.office}`)}</p>
                                ))}
                            </div>
                            
                        </Grid>
                    </Grid>

                
                </Grid>
            </Container>
            <div className={styles.final}>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <div className={styles.image}>
                            <img src="https://sun-asterisk.vn/wp-content/uploads/2020/10/bear-footer.png"/>
                        </div>
                        <p>@ 2021 Sun-asterisk. All rights reserved.</p>
                    </div>
                    <div className={styles.right}>
                        <YouTubeIcon className={styles.yt}/>
                        <FacebookIcon className={styles.fb}/>
                        <TwitterIcon className={styles.tw}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterSun;