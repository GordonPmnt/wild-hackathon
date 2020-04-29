import React from 'react';
import Webcam from 'react-webcam';


const  MyCam = ({ postcardView }) => {
    const styles = {
        cam: {
            borderRadius: '100%',
            position: 'absolute',
            width: '20%',
            right: '5vw',
            bottom: '5vh',
        }
    }

    return( postcardView &&
        <Webcam
            style={styles.cam}
            mirrored={true} 
        />
    );
}

export default MyCam;