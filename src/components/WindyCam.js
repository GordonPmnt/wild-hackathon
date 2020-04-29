import React from 'react';


const WindyCam = ({ choosenCam }) => {

    console.log('CAM', choosenCam)

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