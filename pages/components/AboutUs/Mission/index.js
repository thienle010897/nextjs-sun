import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

const Mission = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.mission}>
      <div className={styles.content}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <h1>{t("common.vision")}</h1>
            <h1>{`& ${t("common.mission")}`}</h1>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={4}>
            <div className={styles.item}>
              <h2>{t("common.vision")}</h2>
              <p>{t("common.descVision")}</p>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={4}>
            <div className={styles.item}>
              <h2>{t("common.mission")}</h2>
              <p>{t("common.descMission")}</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Mission;
