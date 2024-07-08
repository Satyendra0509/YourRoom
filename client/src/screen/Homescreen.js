import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../compontents/Room";
import Loader from "../compontents/Loader";
import Error from "../compontents/Error";

function Homescreen() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState();
    const [error, seterror] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const data = (await axios.get('/api/rooms/getallrooms')).data;
                setRooms(data);
                setLoading(false)
            } catch (error) {
                seterror(true)
                console.log(error);
                seterror(false)
            }
        };

        fetchData(); // Call the async function immediately
    }, []); // Empty dependency array to run once on component mount

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                {loading ? (<h1><Loader /></h1>) : rooms.length > 1 ? (rooms.map(room => {
                    return <div className="col-md-9 mt-2">
                        <Room room={room} />
                    </div>
                })) : (<Error />)}
            </div>
        </div>
    );
}

export default Homescreen;
