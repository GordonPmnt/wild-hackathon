import React from 'react';
import WindyCam from './WindyCam';
import Form from './Form';
import MyCam from './MyCam'


const SideBar = ({ choosenCam, toggleView, postcardView }) => {
    const styles = {
        container: {
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            padding: '2.5%',
            borderRadius: '12px',
            position: 'absolute',
            height: '80%',
            width: postcardView ? '90vw' : '30vw',
            margin: '0',
            top: '10vh',
            right: '5vw'
        },
    }

    return (
        <div style={styles.container}>
            <WindyCam
                choosenCam={choosenCam}
                postcardView={postcardView}
            />
            <Form
                toggleView={toggleView}
                postcardView={postcardView}
            />
            <MyCam 
                postcardView={postcardView}
            />
        </div>
    )
}

export default SideBar;