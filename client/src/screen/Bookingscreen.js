import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../compontents/Loader';
import Error from '../compontents/Error';

function Bookingscreen() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [room, setRoom] = useState(null);
    const { roomid } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = (await axios.post("/api/rooms/getroombyid", { roomid })).data;
                setRoom(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        };
        fetchData();


    }, [roomid]);

    return (
        <div className='m-5'>
            {loading ? (<h1><Loader /></h1>) : room ? (<div>


                <div className="row justify-content-center mt-5 bs">

                    <div className="col-md-6">
                        <h1>{room.name}</h1>
                        <img src={room.imageurls[0]} className='bigimg' />
                    </div>
                    <div className="col-md-6">
                        <div style={{ textAlign: 'right' }}>
                            <h1>Booking Details</h1>
                            <hr />
                            <b> <p>Name: </p>
                                <p>From Date: </p>
                                <p>To Date : </p>
                                <p>Max count: {room.maxcount}</p>
                            </b>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <h1>Amount</h1>
                            <hr />
                            <b>
                                <p>Total Days: </p>
                                <p>Rent per day: {room.rentperday}</p>
                                <p>Total Amount : </p>
                            </b>
                        </div>
                        <div style={{ float: 'right' }}>
                            <button className='btn btn-primary'>Pay Now</button>
                        </div>

                    </div>
                </div>


            </div>) : (<Error />)}
        </div>
    );
}

export default Bookingscreen;
