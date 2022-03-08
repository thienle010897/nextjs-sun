import { Button, Container, Grid } from "@material-ui/core";
import React, { useEffect, useMemo, useState } from "react";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Slider from "react-slick";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { loadProjectsStart } from "../../actions";
import Link from "next/link";

const Projects = ({countActive}) => {
    const { t } = useTranslation()
    const  projects  = useSelector(state => state.projects)
    const dispatch = useDispatch()
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)
    
    useEffect(()=> {
        dispatch(loadProjectsStart())
    }, [])
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

    useEffect(()=> {
        if (countActive) {

            const interval = setInterval(()=> {
                setCountOne(prev => {
                    if(prev < 195){
                        return prev + 3
                    }
                    if (prev === 195) {
                        clearInterval(interval)
                        return 200
                    }
                    if(prev === 200) {
                        clearInterval(interval)
                        return 200
                    }
                })
                
            }, 50)
            const intervalTwo = setInterval(()=> {
               
                setCountTwo(prev => {
                    if(prev < 300){
                        return prev + 10
                    }
                    if (prev === 300) {
                        clearInterval(intervalTwo)
                        return 300
                    }
                })
            }, 100)
        } else{
            setCountOne(0)
            setCountTwo(0) 
        }
    }, [countActive])

    return (
        <div className={styles.projects}>
            <Container >
                <div className={styles.title}>{t("common.ourProjects")}</div>
                <div className={styles.content}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={10} md ={6} lg={6} className={styles.contentCount}>
                            <div className={styles.count} >
                                <h1>{countOne}</h1>
                                <span>
                                    <h3>++</h3>
                                    <h4>{t("common.clients")}</h4>
                                </span>
                            </div>
                            <div className={styles.count}>
                                <h1>{countTwo}</h1>
                                <span>
                                    <h3>++</h3>
                                    <h4>{t("common.supportedServices")}</h4>
                                </span>
                            </div>
                            <Button variant="contained" className={styles.btn}>
                                <h3>{t("common.seeAllProjects")}</h3>
                                <div className={styles.icon}><ArrowRightAltIcon style={{margin: "auto"}}/></div>
                            </Button>

                        </Grid>
                        <Grid item xs={1} sm={1} md ={1} lg={1}>

                        </Grid>
                        <Grid item xs={12} sm={12} md ={4} lg={4}>
                            <div className={styles.slide}>
                                <Slider {...settings}>
                                    {projects.projects && projects.projects.map((item, index) => (
                                        <div className={styles.slideItem} key={index}>
                                            <div className={styles.image}>
                                                <img src={item.image_description}/>
                                            </div>
                                            <div className={styles.desc}>
                                                <p>{item.investor}</p>
                                                <h4>{item.title}</h4>
                                                <p>{item.project_name}</p>
                                                <Link href={`/components/ProjectsRouter/${item.id}`}>
                                                    <a>
                                                        <div className={styles.btn}>
                                                            <h3>{t("common.viewDetail")}</h3>
                                                            <div className={styles.icon}><ArrowRightAltIcon style={{margin: "auto"}}/></div>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </Grid>
                        <Grid item xs={1} sm={1} md ={1} lg={1}>

                        </Grid>
                    </Grid>

                </div>
            </Container>
        </div>
    )
}
export default Projects;