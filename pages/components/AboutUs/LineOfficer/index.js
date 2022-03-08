import { Grid } from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

const LineOfficer = () => {
    const { t } = useTranslation()
    const list = [
        {
            name: "hn",
            link: "/",
            images : [
                {
                    img: "https://sun-asterisk.vn/wp-content/uploads/2020/11/C38A0117aa.jpg"
                },
                {
                    img: "https://sun-asterisk.vn/wp-content/uploads/2020/11/C38A0431aa.jpg"
                },
                {
                    img: "https://sun-asterisk.vn/wp-content/uploads/2020/11/C38A9862aa.jpg "
                },
            ]
        },
        {
            name: "dn",
            link: "/",
            images : [
                {
                    img: "https://sun-asterisk.vn/wp-content/uploads/2020/11/C38A0049aCareer_Management.jpg"
                },
                {
                    img: "https://sun-asterisk.vn/wp-content/uploads/2020/11/C38A0426aa.jpg"
                },
                {
                    img: "https://sun-asterisk.vn/wp-content/uploads/2020/11/C38A9914aaMTLV_5.1..jpg"
                },
            ]
        },
        {
            name: "hcm",
            link: "/",
            images : [
                {
                    img: "https://sun-asterisk.vn/wp-content/uploads/2020/11/MG_6480.jpg"
                },
                {
                    img: "https://sun-asterisk.vn/wp-content/uploads/2020/11/MG_6479.jpg"
                },
                {
                    img: "https://sun-asterisk.vn/wp-content/uploads/2020/11/MG_6462.jpg"
                },
            ]
        },
        {
            name: "international",
            link: "/",
            images : [
                {
                    img: "https://sun-asterisk.vn/wp-content/uploads/2020/11/IMG_1380.jpg"
                },
                {
                    img: "https://sun-asterisk.vn/wp-content/uploads/2020/11/IMG_1390.jpg"
                },
                {
                    img: "https://sun-asterisk.vn/wp-content/uploads/2020/11/0bd0bd00-2f6e-4e60-8a64-3a98ae95f844.jpg"
                },
            ]
        },

    ]
    const [listActive, setListActive] = useState([]);
    const [indexActive, setIndexActive] = useState(0)

    useEffect(()=> {
        if(indexActive === 0) {

            setListActive(list[0])
        }
        if(indexActive === 1) {

            setListActive(list[1])
        }
        if(indexActive === 2) {

            setListActive(list[2])
        }
        if(indexActive === 3) {

            setListActive(list[3])
        }
    }, [indexActive])
    
    const handleChangeList = (index) => {
        setIndexActive(index)
    }
    return (
        <div className={styles.lineOfficer}>
            <div className={styles.content}>
                <Grid container spacing={2} style={{alignItems: "center"}}>
                    {list.map((item, index) => (
                        <Grid item xs={6} sm={6} md={3} lg={3} key={index} >
                            <div className={clsx(styles.item, {
                                [styles.active] : Number(indexActive) === index
                            })} onClick={()=> handleChangeList(index)}>
                                <h3>{t(`common.${item.name}`)}</h3>
                            </div>
                        </Grid>
                    ))}
                   
                </Grid>
                <Grid container spacing={0} style={{
                    alignItems: "center",
                    position: "relative"
                }}>
                    {listActive.images && listActive.images.map((item, index)=> (

                        <Grid key={index} item xs={12} sm={4} md={4} lg={4}>
                            <div className={styles.image}>
                                <img src={item.img}/>
                            </div>
                        </Grid>
                    ))}
                    <div className={styles.desc}>
                        <h3>{listActive.name && t(`common.${listActive.name}`)}</h3>
                    </div>

                </Grid>
            </div>

        </div>
    )
}
export default LineOfficer;