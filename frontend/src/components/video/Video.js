import React from 'react';
import video from '../../images/acebook_preview.mp4';

const Video = () => {
    return (
        <>
            <video height="100%" controls="controls" autoPlay loop muted src={video}></video>
        </>
    )
}

export default Video;