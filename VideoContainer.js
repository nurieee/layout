import React from 'react';

const VideoContainer = props => {

    return (
        <div className="video-container">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={props.video}
                        allowFullScreen></iframe>
            </div>
        </div>
    )
}
export default VideoContainer