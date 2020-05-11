import React from 'react';
import TeamName from './TeamName';

const EventBoard = props => {

    return (
        <div className="event-board d-flex align-items-center">
            <div className="event-content">
                <div className="logo-container d-flex justify-content-center">
                    <i className="fa fa-address-card"></i>
                </div>
                <div className="event-info-container d-flex flex-column align-items-center">
                    <div className="event-title">Event title</div>
                    <div className="event-teams d-flex w-100">
                        <TeamName team={"Slavia"}/>
                        <div className="event-time d-flex flex-column align-items-center">
                            <div className="live-label">Live</div>
                            <div className="event-result d-flex">
                                <div className="home-team">1</div>
                                <div className="separator">:</div>
                                <div className="away-team">2</div>
                            </div>
                        </div>
                        <TeamName team={"Botev"}/>
                    </div>
                    <div className="event-label">Event label</div>
                    <div className="event-description">Event description</div>
                </div>
            </div>
        </div>
    )
}
export default EventBoard