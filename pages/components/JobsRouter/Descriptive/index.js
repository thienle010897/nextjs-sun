import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Descriptive = () => {
  return (
    <div className={styles.descriptive}>
      <div className={styles.content}>
        <Grid container spacing={3} style={{ alignItems: "center" }}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <h1>{`JOIN US & Make Awesome Things That Matter.`}</h1>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <p>
              Thế giới mà Sun* đang hướng tới là nơi tất cả mọi người đều được
              tự do tạo ra những giá trị tuyệt vời, mang lại sự thay đổi tích
              cực cho toàn xã hội. Thời kỳ kỹ sư chỉ biết kỹ thuật đã qua, đây
              là kỷ nguyên của những Creator thực thụ, có tầm ảnh hưởng ở mọi
              nơi.
            </p>
            <p>
              Tại Sun*, chúng tôi luôn tìm kiếm những con người đam mê thử thách
              để hiện thực hóa những khát vọng trên. Nếu bạn là một người như
              vậy, hãy gia nhập đội ngũ Sun* để cùng nhau chúng ta sẽ chinh phục
              những điều phi thường thay đổi thế giới.
            </p>
            
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <div className={styles.image}>
              <img src="https://sun-asterisk.vn/wp-content/uploads/2021/01/stock3-scaled.jpg" />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Descriptive;
