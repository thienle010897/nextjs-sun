import { Button, Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const Events = () => {
    const { t } = useTranslation()

    const events = [
        {
            title: "Sun* luôn tìm kiếm những con người đam mê thử thách để tạo nên những giá trị Awesome.",
            desc: "Là một Digital Creative Studio, Sun* luôn đề cao tinh thần làm chủ sản phẩm, tư duy sáng tạo trong mỗi dự án để mang đến những trải nghiệm Awesome nhất cho end-user.",
            image: "https://news.sun-asterisk.com/images/440x248/1d42dd43-5635-4023-a394-be01d7d001f0.jpg"
        },
        {
            title: "Sun* luôn tìm kiếm những con người đam mê thử thách để tạo nên những giá trị Awesome.",
            desc: "Là một Digital Creative Studio, Sun* luôn đề cao tinh thần làm chủ sản phẩm, tư duy sáng tạo trong mỗi dự án để mang đến những trải nghiệm Awesome nhất cho end-user.",
            image: "https://news.sun-asterisk.com/images/440x248/f774a7c1-a8ae-4eb4-bff4-0112c6143121.jpg"
        },
        {
            title: "Sun* luôn tìm kiếm những con người đam mê thử thách để tạo nên những giá trị Awesome.",
            desc: "Là một Digital Creative Studio, Sun* luôn đề cao tinh thần làm chủ sản phẩm, tư duy sáng tạo trong mỗi dự án để mang đến những trải nghiệm Awesome nhất cho end-user.",
            image: "https://news.sun-asterisk.com/images/440x248/2b416ac0-70ce-47c0-a8cb-e2a323e0f4a7.jpg"
        },
        {
            title: "Sun* luôn tìm kiếm những con người đam mê thử thách để tạo nên những giá trị Awesome.",
            desc: "Là một Digital Creative Studio, Sun* luôn đề cao tinh thần làm chủ sản phẩm, tư duy sáng tạo trong mỗi dự án để mang đến những trải nghiệm Awesome nhất cho end-user.",
            image: "https://news.sun-asterisk.com/images/440x248/5c57d151-12d9-4f66-8162-944137119fa7.png"
        },
        {
            title: "Sun* luôn tìm kiếm những con người đam mê thử thách để tạo nên những giá trị Awesome.",
            desc: "Là một Digital Creative Studio, Sun* luôn đề cao tinh thần làm chủ sản phẩm, tư duy sáng tạo trong mỗi dự án để mang đến những trải nghiệm Awesome nhất cho end-user.",
            image: "https://news.sun-asterisk.com/images/440x248/fe450d23-06bf-43c3-a4b9-61e1da65825d.jpg"
        },
        {
            title: "Sun* luôn tìm kiếm những con người đam mê thử thách để tạo nên những giá trị Awesome.",
            desc: "Là một Digital Creative Studio, Sun* luôn đề cao tinh thần làm chủ sản phẩm, tư duy sáng tạo trong mỗi dự án để mang đến những trải nghiệm Awesome nhất cho end-user.",
            image: "https://news.sun-asterisk.com/images/440x248/5de34ffd-4914-4c84-baf1-31b6a8e33244.jpg"
        },

    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 990,
              settings: {
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    
    return (
        <div className={styles.events}>
            <Container>
                <div className={styles.title}>{t("common.event")}</div>
                <div className={styles.list}>

                    <Slider {...settings} style={{
                        display: "flex",
                        position: "relative"
                    }}>
                        {events.map((item, index)=> (
                            <div key={index}  className={styles.item}>
                                <div className={styles.wrapper}>

                                    <div className={styles.image}>
                                        <img src={item.image}/>
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <div className={styles.btn}>
                                        <h4>{t("common.viewDetail")}</h4>
                                        <div className={styles.icon}><ArrowRightAltIcon style={{margin: "auto"}}/></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <Grid container >
                    <Grid item xs={12} sm={12} md={4} lg={4}></Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Button variant="contained" className={styles.btnBig}>
                            <h3>{t("common.seeMore")}</h3>
                            <div className={styles.icon}><ArrowRightAltIcon style={{margin: "auto"}}/></div>
                        </Button>   
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}></Grid>

                </Grid>
            </Container>
        </div>
    )
}
export default Events;