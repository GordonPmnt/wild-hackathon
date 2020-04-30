import React from 'react'
import { config } from '../config'


const Message = ({ choosenCam }) => {
    const styles = {
        h2: {
            color: config.colors.pinkMexican
        },
        message: {
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            width: "450px",
            height: "500px",
            borderRadius: "5px",
            position: 'absolute',
            top: '17vh',
            left: '10vw',
            padding: '20px'
        },
    };
    const { location } = choosenCam;
    
    return(
        <div style={styles.message}> 
            <h2 style={styles.h2}>Greetings from {location && location.city} !</h2>
            <p>
                Hey guys ! I'm in holydays.
                The weather is amazing ans we have a lot of fun.
                Looking forward seeing you soon.
                Love
                Pete
            </p>
        </div>
    );
}

export default Message