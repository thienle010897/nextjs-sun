import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


import styles from "./styles.module.scss";
import { Button, Grid } from "@material-ui/core";
import { t } from "i18next";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { loadProjectDetailStart } from "../../../actions";

const Projects = () => {
  const dispatch = useDispatch()
  const  projects  = useSelector(state => state.projects)
  const handleClickViewDetail =(id) => {
    const loadProjectDetailApi = async (id) => 
      await axios.get(`https://ruttienmattuthe.com/wp-json/api/v1/news/detail/${id}`);
    console.log(loadProjectDetailApi)
    // dispatch(loadProjectDetailStart(id))
  }
  return (
    <div className={styles.projects}>
      <div className={styles.title}>{t("common.projects")}</div>
      <div className={styles.content}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4} lg={4} className={styles.list}>
            {projects.projects && projects.projects
              .filter((fil, index) => index >= 0 && index <= 2)
              .map((item, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  className={styles.item}
                >
                  <div className={styles.image}>
                    <img src={item.image_description} />
                  </div>
                  <div className={styles.pjContent}>
                    <h4>{item.title}</h4>
                    {/* <h2>{item.project_name}</h2>
                    <p>{item.description}</p> */}
                    <Link href={`/components/ProjectsRouter/${item.id}`}>
                      <a>
                        <div className={styles.btnItem} onClick={()=> handleClickViewDetail(item.id)}>
                            <h3>{t("common.viewDetail")}</h3>
                            <div className={styles.icon}><ArrowRightAltIcon style={{margin: "auto"}}/></div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </Grid>
              ))}
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} className={styles.list}>
            {projects.projects && projects.projects
              .filter((fil, index) => index >= 3 && index <= 5)
              .map((item, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  className={styles.item}
                >
                  <div className={styles.image}>
                    <img src={item.image} />
                  </div>
                  <div className={styles.pjContent}>
                  <p>{item.title}</p>
                    <h2>{item.project_name}</h2>
                    <p>{item.description}</p>
                    <div className={styles.btnItem}>
                        <h3>{t("common.viewDetail")}</h3>

                        <div className={styles.icon}><ArrowRightAltIcon style={{margin: "auto"}}/></div>
                    </div>
                  </div>
                </Grid>
              ))}
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} className={styles.list}>
            {projects.projects && projects.projects
              .filter((fil, index) => index >= 6 && index <= 8)
              .map((item, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  className={styles.item}
                >
                  <div className={styles.image}>
                    <img src={item.image} />
                  </div>
                  <div className={styles.pjContent}>
                    <p>{item.title}</p>
                    <h2>{item.project_name}</h2>
                    <p>{item.description}</p>
                        <div className={styles.btnItem}>
                            <h3>{t("common.viewDetail")}</h3>
                            <div className={styles.icon}><ArrowRightAltIcon style={{margin: "auto"}}/></div>
                        </div>
                  </div>
                </Grid>
              ))}
          </Grid>

          <Button variant="contained" className={styles.btn}>
            <h3>{t("common.seeMore")}</h3>
          </Button>
        </Grid>
      </div>
    </div>
  );
};
export default Projects;
