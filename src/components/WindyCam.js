import React from 'react';


const WindyCam = ({ choosenCam }) => {
    const styles = {
        cam: {
            width: '100%',
            height: '55%',
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
                <iframe 
                    style={styles.cam}
                    id={id}
                    title={location.city}
                    src={player.day.embed}
                    allowFullScreen={false}
                />
            :
                <img 
                    src={beach} 
                    alt="beach"
                    style={styles.cam}
                />
        }
        </>
    )
}

export default WindyCam;