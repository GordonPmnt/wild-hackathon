import React from 'react';


const WindyCam = () => {
    const styles = {
        cam: {
            width: '100%',
            height: '50%',
            borderRadius: '15px',
        }
    }

    const { id, location, player } = choosenCam
    console.log('CAM', choosenCam)

    return (
        <>
        {choosenCam.player &&
            <iframe 
                style={styles.cam}
                id={id}
                title={location.city}
                src={player.live.embed}
            />
        }
        </>
    )
}

export default WindyCam;