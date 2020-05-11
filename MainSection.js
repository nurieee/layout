import React from 'react';
import EventBoard from './EventBoard';
import VideoContainer from './VideoContainer';

const MainSection = props => {

    return (
        <div className="d-flex main-section">
            <VideoContainer video={"https://www.youtube.com/embed/zpOULjyy-n8?rel=0"}/>
            <EventBoard/>
        </div>
    )
}
export default MainSection