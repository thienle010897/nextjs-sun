import { Container } from "@material-ui/core";
import React from "react";

import styles from "./styles.module.scss";

const VideoHome = () => {
    return (
        <Container maxWidth="lg">
            <div className={styles.video}>
                <video src="https://sun-asterisk.vn/wp-content/uploads/2020/11/mv-pc.mp4"
                    autoPlay muted playsInline loop 
                ></video>
            </div>
        </Container>
    )
}
export default VideoHome;