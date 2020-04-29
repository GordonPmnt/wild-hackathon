import React from 'react';
import WindyCam from './WindyCam';
import Form from './Form';


const SideBar = () => {
    const styles = {
        container: {
            position: 'absolute',
            height: '80vh',
            width: '30vw',
            margin: '0',
            top: '5vh',
            right: '2.5vw'
        },
    }

    return (
        <div style={styles.container}>
            <WindyCam />
            <Form />
        </div>
    )
}

export default SideBar;