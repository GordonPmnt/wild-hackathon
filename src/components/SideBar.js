import React from 'react';
import WindyCam from './WindyCam';
import Form from './Form';
import Message from './Message'


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
            />
            <Form
                toggleView={toggleView}
                postcardView={postcardView}
            />
            <Message />
        </div>
    )
}

export default SideBar;