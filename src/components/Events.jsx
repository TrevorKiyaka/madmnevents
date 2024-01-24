import React from 'react';
import EventsCard from './EventsCard';
import rhumbasundays from '../assets/rhumbasundays.jpg';
import superbowlsundays from '../assets/superbowlsundays.jpeg';
import afrobeatsundays from '../assets/afrobeatsundays.jpg';

const Events = () => {
  const redirectToRhumba = () => {
    // Redirect to rhumba 
    window.location.href = 'https://bblive.ticketspice.com/afrobeatsundaysmn';
  };

  const redirectToAfro = () => {
    // Redirect to afrobeat sundays
    window.location.href = 'https://bblive.ticketspice.com/afrobeatsundaysmn';
  };

  const redirectToSuperbowl = () => {
    // Redirect to superbowl tickets
    window.location.href = 'https://bblive.ticketspice.com/afrobeatsundaysmn';
  };

  return (
    <div id="events">
      <div className='max-w-[1240px] mx-auto py-2 px-4 text-center'>
        <h1>Upcoming Events</h1>
      <p className='py-2'>Click and register for our next event</p>
      <div className="max-w-[1240px] mb-10 mx-auto px-4 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <EventsCard bg={rhumbasundays} text="Rhumba Sundays" onClick={redirectToRhumba} />
        <EventsCard bg={afrobeatsundays} text="Afro Sundays" onClick={redirectToAfro} />
        <EventsCard bg={superbowlsundays} text="SuperBowl Sundays" onClick={redirectToSuperbowl} />
      </div>
    </div>
  </div>
  );
};

export default Events;
