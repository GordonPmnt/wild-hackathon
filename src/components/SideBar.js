import React from 'react';
import WindyCam from './WindyCam';
import Form from './Form';
import MyCam from './MyCam'


const SideBar = ({ choosenCam, toggleView, postcardView }) => {
    const styles = {
        container: {
            position: 'absolute',
            height: '80vh',
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