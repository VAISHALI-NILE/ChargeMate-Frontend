import React from 'react';
import "./styles/googlemap.css"
const GoogleMap = ({ src }) => {
    return (
        <div className='gmap-container'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d65026.277237536706!2d75.31999694483244!3d19.850221088491157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scharging%20stations!5e0!3m2!1sen!2sin!4v1715976750023!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
