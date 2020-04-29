import React from 'react';


const WindyCam = ({ style }) => {
    const styles = {
        container: {
            height: '80vh',
            width: '30vw',
            margin: '10vh 2.5vw 10vh 70vw',
            display: 'flex',
        },
    }
    return (
        <div style={styles.container}>
            <div style={styles.cam}>
                <p>HEY!</p>
            </div>
        </div>
    )
}

export default WindyCam;