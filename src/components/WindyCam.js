import React from 'react';
import { config } from '../config'


const WindyCam = ({ choosenCam, postcardView }) => {
    const styles = {
        cam: {
            width: '100%',
            height: '225px',
            borderRadius: '10px',
            border: 'none',
        },
        full: {
            width: '100vw',
            height: '100vh',
            border: 'none',
        },
        h2: {
            color: config.colors.pinkMexican,
            textAlign: 'center',
            margin: '0 0 20px 0'
        }
    }

    const { id, location, player } = choosenCam
    const beach = require('../img/beach.jpg')

    return (
        <>
        {choosenCam.player 
            ?
                <div>
                    {postcardView || <h2 style={styles.h2}>{location.city}</h2>}
                    <iframe 
                        style={postcardView ? styles.full : styles.cam}
                        id={id}
                        title={location.city}
                        src={player.day.embed}
                        allowFullScreen={false}
                    />
                </div>
            :
                <div>
                    {postcardView || <h2 style={styles.h2}>CHOOSE A LOCATION</h2>}
                    <img 
                        src={beach} 
                        alt="beach"
                        style={postcardView ? styles.full : styles.cam}
                    />
                </div>
        }
        </>
    )
}

export default WindyCam;