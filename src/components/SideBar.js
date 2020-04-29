import React from 'react';
import WindyCam from './WindyCam';
import Form from './Form';


const SideBar = () => {
    const styles = {
        container: {
            height: '80vh',
            width: '30vw',
            margin: '10vh 2.5vw 10vh 60vw',
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