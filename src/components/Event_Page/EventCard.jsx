import React from 'react';
import '../../pages_css/Event_Page_CSS/EventCard.css';
import Imag from '../../../src/Images/event-image.jpg';

const EventCard = ({ event }) => (
  <div className="event-card z-20">

    <div className="event-card-image">
        <img src={Imag} alt="Event" />
    </div>

    <div className="event-card-content">
        <h3>{event.name}</h3>
        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
        <p>Start Time: {event.startTime}</p>
        <p>End Time: {event.endTime}</p>
    
        {/* <p>Description: {event.description}</p> */}
    </div>
    <div className="register-block">
      <span class="register-text">
        <a href="www.google.com">Register Here</a>
      </span>
    </div>
    
  </div>
);

export default EventCard;
