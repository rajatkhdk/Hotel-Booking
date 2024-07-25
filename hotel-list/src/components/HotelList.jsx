
import { useEffect, useState } from 'react';
import axios from 'axios';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/hotel');
        setHotels(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Hotel List</h1>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <h2>{hotel.name}</h2>
            <p>Type: {hotel.type}</p>
            <p>City: {hotel.city}</p>
            <p>Distance: {hotel.distance} km</p>
            <p>Address: {hotel.address}</p>
            <p>Title: {hotel.title}</p>
            <p>Description: {hotel.desc}</p>
            <p>Cheapest Price: ${hotel.cheapestPrice}</p>
            <div>
              {hotel.photos.map((photo, index) => (
                <img key={index} src={photo} alt={hotel.name} width="100" />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;
