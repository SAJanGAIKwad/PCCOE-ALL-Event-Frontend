import React, {useRef,useState,useEffect} from 'react';
import '../App.css';
import Header from '../components/Event_Page/Header';
import AllEvents from '../components/Event_Page/AllEvents';
import PastEvents from '../components/Event_Page/PastEvents';
import UpcomingEvents from '../components/Event_Page/UpcomingEvents';
import LiveEvents from '../components/Event_Page/LiveEvents';

import axios from 'axios'

const eventsData = [
  
  {
    id: 1,
    name: 'Event 1',
    date: '2023-08-10',
    location: 'Venue XYZ',
    startTime: '08:00 AM',
    endTime: '12:00 PM',
    description: 'Description for Event 1',
  },
  
  {
    id: 2,
    name: 'Event 1',
    date: '2023-09-15',
    location: 'Venue XYZ',
    startTime: '08:00 AM',
    endTime: '12:00 PM',
    description: 'Description for Event 2',
  }
  ,
  {
    id: 3,
    name: 'Event 3',
    date: '2023-09-03',
    location: 'Venue XYZ',
    startTime: '4:00 AM',
    endTime: '05:00 PM',
    description: 'Description for Event 3',
  }
  ,
  {
    id: 4,
    name: 'Event 4',
    date: '2023-09-20',
    location: 'Venue XYZ',
    startTime: '08:00 AM',
    endTime: '12:00 PM',
    description: 'Description for Event 4',
  }
  
];

const Event = () => {
 
  
  const allEventsRef = useRef(null);
  const pastEventsRef = useRef(null);
  const upcomingEventsRef = useRef(null);
  const liveEventsRef = useRef(null);
  

  // Function to get the appropriate ref based on the selected option
  // Function to get the appropriate ref based on the selected option
  const scrollToSection = (section) => {
    let targetRef = null;
    let headerHeight = 0;

    // Calculate the header height
    const header = document.querySelector('.header-container');
    if (header) {
      headerHeight = header.getBoundingClientRect().height;
    }

    switch (section) {
      case "all":
        targetRef = allEventsRef;
        break;
      case "past":
        targetRef = pastEventsRef;
        break;
      case "upcoming":
        targetRef = upcomingEventsRef;
        break;
      case "live":
        targetRef = liveEventsRef;
        break;
      default:
        break;
    }

    if (targetRef && targetRef.current) {
      // Calculate the target scroll position
      const targetPosition = targetRef.current.offsetTop - headerHeight - 100;

      // Scroll to the target position
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const [searchQuery, setSearchQuery] = useState(''); // Step 1: Add Search State

  // Function to handle search input changes (Step 2)
  const handleSearchInputChange = (value) => {
    setSearchQuery(value);
  };

//fetch the data from api to display on event cards.
  useEffect(() => {
    axios.get('http://localhost:3001/api/events')
      .then((data) => {
        console.log('this is data',data);
        
      })
      .catch((error) => {
        console.log('errorrr::',error);
      });
  }, );



  return (
    <div className="app">
      <Header
        scrollToSection={scrollToSection}
        // Passing the search query and handler to the Header component
        searchQuery={searchQuery}
        onSearchInputChange={handleSearchInputChange}
      />
      <div className="body-container">
        <div ref={allEventsRef}>
          <AllEvents 
            events={eventsData.filter((event) =>
              event.name.toLowerCase().includes(searchQuery.toLowerCase())
            )}
          />
        </div>
        <div ref={pastEventsRef}>
          <PastEvents events={eventsData} />
        </div>
        <div ref={upcomingEventsRef}>
          <UpcomingEvents events={eventsData} />
        </div>
        <div ref={liveEventsRef}>
          <LiveEvents events={eventsData} />
        </div>
      </div>
    </div>
  );
};

export default Event;