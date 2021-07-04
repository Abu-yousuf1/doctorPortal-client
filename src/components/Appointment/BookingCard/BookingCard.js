import React, { useState } from 'react';
import AppointmentModal from '../AppointmentModal/AppointmentModal';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
   
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="car-body text-center">
                    <h5 className="card-title text-brand"> {booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SPACES AVAILABLE</p>
                    <button onClick={openModal} className="btn-brand btn text-uppercase">book appointment</button>
                    <AppointmentModal modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={booking.subject} date={date}></AppointmentModal>
                </div>

            </div>

        </div>
    );
};

export default BookingCard;