import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

const Descriptive = () => {
  const {t} = useTranslation()

  return (
    <div className={styles.descriptive}>
      <div className={styles.content}>
        <Grid container spacing={3} style={{ alignItems: "center" }}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <h1>{t("common.environment")}</h1>
            <p>
              {`Trong nỗ lực để đạt đến sứ mệnh của Sun*, việc tạo ra một môi
              trường – nơi tất cả các thành viên có thể phát huy điểm mạnh riêng
              là tối quan trọng. Vì thế, điều đầu tiên tôi mong tất cả lãnh đạo
              của Sun* đặc biệt lưu ý trong việc thiết lập mục tiêu của mình, đó
              là vấn đề động lực, sự an tâm về mặt tâm lý và sự phát triển của
              nhân viên.`}
            </p>
            <h4>CEO Taihei Kobayashi</h4>
          </Grid>

          <Grid item xs={12} sm={12} md={8} lg={8}>
            <div className={styles.image}>
              <img src="https://sun-asterisk.vn/wp-content/uploads/2021/03/C38A0096aaMTLV_Cover-1.jpg" />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Descriptive;
