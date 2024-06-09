import React from "react";
import EventCard from "./EventCard";
import "../../pages_css/Event_Page_CSS/EventList.css";

const AllEvents = ({ events }) => (
  <div>
    <h2>All Events</h2>
    <div className="event-list">
        {events.map(event => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
  </div>
);

export default AllEvents;
