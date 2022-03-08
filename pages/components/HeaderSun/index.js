import { Container } from "@material-ui/core";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const HeaderSun = () => {
    const { t, i18n } = useTranslation()
    const [activeIndex, setActiveIndex] = useState(0)
    const [language, setLanguages] = useState("")
    const arrayBars = [
             
        {
            title: "home",
            link: "/"
        },
        {
            title: "about",
            link: "/components/AboutUs"
        },
        {
            title: "projects",
            link: "/components/ProjectsRouter"
        },
        {
            title: "career",
            link: "/components/JobsRouter"
        },

        {
            title: "environment",
            link: "/components/EnvironmentRouter"
        },
        {
            title: "news",
            link: "/components/News"
        },
    ]
    const languages = ["vi", "en"]
    const [isBars, setIsBars] = useState(false)
    useEffect(()=> {
        setLanguages(localStorage.getItem("language"))
    }, [])
    const handleClickNav =(index)=> {
        setActiveIndex(index)
        setIsBars(false)
    }
    const handleChangeLanguage = (item) => {
        localStorage.setItem("language", item)
        setLanguages(localStorage.getItem("language"))
        i18n.changeLanguage(localStorage.getItem("language"))
    }
    const handleToggle = () => {
        setIsBars(!isBars)
    }
    const handleClickLogo = () => {
        setActiveIndex(0)
    }
    return (
        <div className={styles.headerSun}>
            <Container >
                <div className={styles.header}>
                    <Link href="/">
                        <a>
                            <div className={styles.logo} onClick={handleClickLogo}>
                                <img src="https://sun-asterisk.vn/wp-content/uploads/2020/10/logo-sun@2x.png"/>
                            </div>
                        </a>
                    </Link>
                    <ul className={clsx(styles.navBars, {
                        [styles.active] : isBars
                    })}>
                        {arrayBars.map((item, index)=> (
                            <li key={index} onClick={()=> handleClickNav(index)}
                                className={clsx({
                                    [styles.active] : Number(activeIndex) === index
                                })}
                            >
                                <div className={clsx(styles.line, {
                                    [styles.active] : Number(activeIndex) === index
                                })}></div>
                                <Link href={item.link}>
                                    <a>
                                        <p className={clsx({
                                            [styles.active] : Number(activeIndex) === index
                                        })}>{t(`common.${item.title}`)}</p>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className={clsx(styles.controls, {
                        [styles.active] : isBars
                    })}>
                        <div className={clsx(styles.btnMenu)} 
                            onClick={handleToggle}
                        >
                            {!isBars && <MenuIcon style={{
                                margin: "auto",
                                color: "var(--primary-color-)"
                            }}/>}
                            {isBars && <CloseIcon style={{
                                margin: "auto",
                                color: "var(--primary-color-)"

                            }}/>}               
                        </div>
                        <ul 
                            className={clsx(styles.languages)}
                        >
                            {languages.map(item=> (
                                <li key={item} onClick={()=> handleChangeLanguage(item)}
                                    className={clsx({
                                    [styles.active] : language === item
                                    })}
                                ><p>{item.toUpperCase()}</p></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HeaderSun;