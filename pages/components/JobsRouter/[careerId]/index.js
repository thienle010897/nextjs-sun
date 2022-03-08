import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Project = () => {
    const  careers  = useSelector(state => state.careers)
    
    const router = useRouter();
    const { careerId } = router.query;

    const [career, setCareer] = useState([])

    useEffect(() => {
        const getProduct = async () => {
          const response = await fetch(`https://ruttienmattuthe.com/wp-json/api/v1/recruitments/detail/${careerId}`);

          setCareer(await response.json());
        };
        getProduct();
      }, []);
    
    return (
        <div className={styles.career}>
            <h2 >Chi tiết tuyển dụng</h2>
            <h3>{career && career.title}</h3>
            <h4>{career && career.address}</h4>
            <div className={styles.duration}>
                <p>{career && career.date_start}</p>
                -
                <p>{career && career.date_end}</p>
            </div>
            <h5>{career && career.description}</h5>
        </div>
    )
}
export default Project;