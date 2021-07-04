import React from 'react';
import InfoCart from '../InfoCart/InfoCart';
import { faClock, faMapMarkerAlt, faBlenderPhone } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const infoData = [
        {
            title: 'Opening Hours',
            description: 'We are open 7 days',
            icon: faClock,
            background: 'primary'
        },
        {
            title: 'visit Our Location',
            description: 'Brooklyn,NY 1003 USA',
            icon: faMapMarkerAlt,
            background: 'dark'
        },
        {
            title: 'Call us now',
            description: 'We are open 7 days',
            icon: faBlenderPhone,
            background: 'primary'
        }
    ]
    return (
        <section className="d-flex justify-content-center">
            <div className= "w-75 row">
                {
                    infoData.map(info => <InfoCart info={info}></InfoCart>)
                }

            </div>
        </section>
    );
};

export default BusinessInfo;