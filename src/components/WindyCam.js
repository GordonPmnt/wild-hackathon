import React from 'react';


const WindyCam = () => {
    const styles = {
        container: {
            height: '80vh',
            width: '30vw',
            margin: '10vh 2.5vw 10vh 70vw',
            display: 'flex',
        },
    }
    return (
        <video controls width="250">
            <source 
                src="/media/examples/flower.webm"
                type="video/webm"
            />
        </video>
    )
}

export default WindyCam;