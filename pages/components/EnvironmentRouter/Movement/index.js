import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CheckIcon from '@material-ui/icons/Check';
import Slider from "react-slick";


import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const Values = () => {
    const {t} = useTranslation()
    const values = [
        {
            title: "Be A Team",
            desc: "Chúng ta là một team, mỗi cá nhân luôn cần thấu hiểu và ý thức được vai trò của mình, cần làm gì để cùng đẩy con thuyền tiến lên với tốc độ cao nhất.",
            image: "https://sun-asterisk.vn/wp-content/uploads/2021/03/Be-a-team.jpg",
        },
        {
            title: "Think Outside The Box",
            desc: "Thoát khỏi tư duy lối mòn, cùng với sự nhiệt huyết, chân thành sẽ dẫn tới những sự đổi mới làm lay chuyển thế giới.",
            image: "https://sun-asterisk.vn/wp-content/uploads/2021/03/Think-outside-the-box.jpg",
        },
        {
            title: "Get Risky",
            desc: "Chúng ta là một team, mỗi cá nhân luôn cần thấu hiểu và ý thức được vai trò của mình, cần làm gì để cùng đẩy con thuyền tiến lên với tốc độ cao nhất.",
            image: "https://sun-asterisk.vn/wp-content/uploads/2021/03/GetRisky.jpg",
        },
        {
            title: "Be Optimistic",
            desc: "Thoát khỏi tư duy lối mòn, cùng với sự nhiệt huyết, chân thành sẽ dẫn tới những sự đổi mới làm lay chuyển thế giới.",
            image: "https://sun-asterisk.vn/wp-content/uploads/2021/03/Be-optimistic.jpg",
        },
        {
            title: "Go Fast",
            desc: "Chúng ta là một team, mỗi cá nhân luôn cần thấu hiểu và ý thức được vai trò của mình, cần làm gì để cùng đẩy con thuyền tiến lên với tốc độ cao nhất.",
            image: "https://sun-asterisk.vn/wp-content/uploads/2021/03/Go-Fast.jpg",
        },
        {
            title: "Be Professional",
            desc: "Thoát khỏi tư duy lối mòn, cùng với sự nhiệt huyết, chân thành sẽ dẫn tới những sự đổi mới làm lay chuyển thế giới.",
            image: "https://sun-asterisk.vn/wp-content/uploads/2021/03/Be-professional.jpg",
        },
        {
            title: "Stay Focused",
            desc: "Chúng ta là một team, mỗi cá nhân luôn cần thấu hiểu và ý thức được vai trò của mình, cần làm gì để cùng đẩy con thuyền tiến lên với tốc độ cao nhất.",
            image: "https://sun-asterisk.vn/wp-content/uploads/2021/03/Stay-focused.jpg",
        },

    ]
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    
    return (
        <div className={styles.values}>
            <h2 className={styles.title}>{t("common.eventful")}</h2>
            <div className={styles.content}>
                <Grid container spacing={3} style={{alignItems: "center"}}>
                    
                    <Grid item xs={12} sm={12} md={6} lg={6} style={{
                            justifyContent: "space-around",
                            display: "flex",
                            flexDirection: "column"
                        }}>
                        <div className={styles.list}>
                            <div  className={styles.item}>
                                <div className={styles.checkBg}>
                                    <CheckIcon className={styles.checkIcon}  />
                                </div>
                                <div className={styles.desc}>
                                    <h5>Chỉ có sáng tạo mới làm nên những thay đổi đột phá cho thế giới.</h5>
                                    <p>{`Là một Digital Creative Studio, Sun* luôn thúc đẩy bạn thay đổi, làm những điều mới, phá bỏ các giới hạn của bản thân mình.`}</p>
                                </div>
                            </div>
                            <div  className={styles.item}>
                                <div className={styles.checkBg}>
                                    <CheckIcon className={styles.checkIcon}  />
                                </div>
                                <div className={styles.desc}>
                                    <h5>Sun* thấu hiểu rằng mỗi cá nhân lại có những cá tính, góc nhìn riêng.</h5>
                                    <p>Sun* tôn trọng những điều đó và thúc đẩy để những khác biệt ấy tạo nên những điều vĩ đại.</p>
                                </div>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Slider {...settings}>

                            {values.map((item, index)=> (
                                <div key={index} className={styles.value}>
                                    <div className={styles.image}>
                                        <img src={item.image}/>
                                    </div>
                                    
                                </div>
                            ))}
                        </Slider>

                    </Grid>
                    
                </Grid>
            </div>
        </div>
    )
}
export default Values;