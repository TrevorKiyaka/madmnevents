import React from 'react'
import EventsCard from './EventsCard';
import rhumbasundays from '../assets/rhumbasundays.jpg'
import superbowlsundays from '../assets/superbowlsundays.jpeg'
import afrobeatsundays from '../assets/afrobeatsundays.jpg'
const Events = () => {
  return (
<div>
    <div>
    <h1 className='text-center'>Upcoming Events</h1>
      <p className='text-center mt-3'>Click and register for our next event</p>
    </div>
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
    <EventsCard bg={rhumbasundays} text='Rhumba Sundays' />
    <EventsCard bg={afrobeatsundays} text='Afro Sundays' />
    <EventsCard bg={superbowlsundays} text='SuperBowl Sundays' />

    </div>
 </div>
  )
}

export default Events;