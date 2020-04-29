import React from 'react';


const WindyCam = ({ choosenCam, postcardView }) => {
    const styles = {
        cam: {
            width: '100%',
            height: postcardView ? '70vh' : '40vh',
            borderRadius: '10px',
        }
    }

    const { id, location, player } = choosenCam
    const beach = require('../img/beach.jpg')

    console.log('CAM', choosenCam)

    return (
        <>
        {choosenCam.player 
            ?
                <div>
                    <h2>{location.city}</h2>
                    <iframe 
                        style={styles.cam}
                        id={id}
                        title={location.city}
                        src={player.day.embed}
                        allowFullScreen={false}
                    />
                </div>
            :
                <div>
                    <h2>Choose a location</h2>
                    <img 
                        src={beach} 
                        alt="beach"
                        style={styles.cam}
                    />
                </div>
        }
        </>
    )
}

export default WindyCam;