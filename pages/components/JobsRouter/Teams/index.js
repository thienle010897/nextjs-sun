import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Link from "next/link";

const currencies = [
  {
    value: "",
    label: "Địa điểm",
  },
  {
    value: "Đà Nẵng",
    label: "Đà Nẵng",
  },
  {
    value: "Hà Nội",
    label: "Hà Nội",
  },
  {
    value: "TP Hồ CHí Minh",
    label: "TP Hồ CHí Minh",
  },
];



const Teams = () => {
  const careers = useSelector(state=> state.careers)
  const {t} = useTranslation()
  return (
    <div className={styles.teams}>
      <div className={styles.title}>{t("common.chooseYourTeam")}</div>
      <div className={styles.content}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <div className={styles.search}>
              <input placeholder="Nhập từ khóa..." />
            </div>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <select name="location" id="location" className={styles.section}>
              {currencies.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <Button variant="contained" className={styles.btn}>
              <h3>{t("common.search")}</h3>
            </Button>
          </Grid>
          {careers.careers && careers.careers.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={6} lg={6}>
              <div className={styles.item}>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                  <div className={styles.image}>
                    <img src={item.image} />
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link href={`/components/JobsRouter/${item.id}`}>
                    <a>
                      <h5>{t("common.viewDetail")}</h5>
                    </a>
                  </Link>
                </Grid>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};
export default Teams;
