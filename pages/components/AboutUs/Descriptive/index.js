import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Descriptive = () => {
  return (
    <div className={styles.descriptive}>
      <div className={styles.content}>
        <Grid container spacing={3} style={{alignItems: "center"}}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <h1>Make awesome things that matter.</h1>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <p>
              Hãy tưởng tượng ra một thế giới nơi tất cả mọi người đều được tự
              do tạo ra những giá trị tuyệt vời, có sức mạnh thay đổi cuộc sống.
              Chúng tôi theo đuổi đam mê của chính mình, cùng nhìn về tương lai.
              Không chỉ tồn tại, chúng tôi sống để thực hiện hóa những ước mơ.
              Đứng ở điểm giao thoa giữa công nghệ, kinh doanh và giáo dục,
              chúng tôi sẽ mang lại sự thay đổi tích cực cho toàn xã hội..
            </p>
            <h5>We are obsessed with making awesome things with awesome people.</h5>
            <h4>Sun* Inc. CEO – Taihei Kobayashi</h4>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
              <div className={styles.image}>
                  <img src="https://sun-asterisk.vn/wp-content/uploads/2021/03/VCT_cover-1.jpg"/>
              </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Descriptive;
