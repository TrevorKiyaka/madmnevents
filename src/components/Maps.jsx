import React from 'react';

const Maps = () => {
  return (
    <div className='px-4'>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.567943010423!2d-93.3170354237378!3d45.07427495937055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b330f790c4ef57%3A0xa7c5e5e91445294!2s2590%20Freeway%20Blvd%2C%20Minneapolis%2C%20MN%2055430%2C%20USA!5e0!3m2!1sen!2ske!4v1705576064169!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: '0' }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Maps;
