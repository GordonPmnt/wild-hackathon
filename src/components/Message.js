import React from 'react'
import { config } from '../config'


const Message = ({ choosenCam, value }) => {
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
            <p className='message'>
                {value}
            </p>
        </div>
    );
}

export default Message