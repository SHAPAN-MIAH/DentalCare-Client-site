import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
import './BookAppointment.css'
import borderBrige from '../../../images/title-icon.png'

const bookingData = [
    {
        _id: '5e8df50be6e8231764dc23de',
        id: 1,
        subject: 'Dental Implants',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '5e8df578e6e8231764dc23df',
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:50 AM - 11:30 AM',
        totalSpace: 10
    },
    {
        _id: '5e8df5aee6e8231764dc23e0',
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '5:00 PM - 6:00 PM',
        totalSpace: 10
    },
    {
        _id: '5e8df63be6e8231764dc23e1',
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '11:00 AM - 12:30 PM',
        totalSpace: 10
    },
    {
        _id: '5e8df68de6e8231764dc23e2',
        id: 5,
        subject: 'Dental Root canal',
        visitingHour: '10:00 AM - 11:00 AM',
        totalSpace: 10
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '9:00 AM - 10:00 AM',
        totalSpace: 10
    }
]
const BookAppointment = ({date}) => {
    return (
        <section className='mb-5'>
            <div className='appointmentDateTitle-container text-center mt-5'>
            <h2 className="text-center">Available Appointments on {date.toDateString()}</h2>
                <p>8:00 AM - 8:00 PM</p>
            </div>
            <br/>
            <img className='m-auto d-flex justify-content-center' src={borderBrige} alt=""/>
            <div className="row mt-5">
                {
                    bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;