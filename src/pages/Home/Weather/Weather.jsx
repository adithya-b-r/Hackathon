import React, { useState, useEffect } from 'react';

export const Weather = () => {
  const [city, setCity] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const cities = [
    // India
    'Mangalore', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 
    'Hyderabad', 'Pune', 'Ahmedabad', 'Surat', 'Jaipur', 'Lucknow', 
    'Kanpur', 'Nagpur', 'Indore', 'Bhopal', 'Visakhapatnam', 'Patna', 
    'Varanasi', 'Madurai', 'Chikkamagaluru', 'Kochi', 'Guwahati', 
    'Thiruvananthapuram', 'Coimbatore',
  
    // United States
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 
    'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 
    'San Francisco', 'Columbus', 'Fort Worth', 'Indianapolis', 'Seattle', 
    'Denver', 'Washington D.C.', 'Boston', 'Las Vegas', 'Portland',
  
    // China
    'Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Tianjin', 
    'Wuhan', 'Chongqing', 'Nanjing', 'Xi\'an', 'Hangzhou', 'Suzhou',
  
    // Europe
    'London', 'Paris', 'Berlin', 'Madrid', 'Rome', 'Moscow', 'St. Petersburg', 
    'Amsterdam', 'Barcelona', 'Munich', 'Milan', 'Vienna', 'Prague', 'Warsaw', 
    'Budapest', 'Brussels', 'Lisbon', 'Athens', 'Stockholm', 'Helsinki',
    'Geneva', 'Zurich', 'Copenhagen', 'Oslo', 'Edinburgh', 'Dublin',
  
    // Middle East
    'Dubai', 'Abu Dhabi', 'Istanbul', 'Tehran', 'Riyadh', 'Doha', 'Kuwait City', 
    'Beirut', 'Jerusalem', 'Tel Aviv', 'Ankara', 'Baghdad', 'Jeddah', 'Muscat',
  
    // Africa
    'Cairo', 'Lagos', 'Johannesburg', 'Cape Town', 'Nairobi', 'Casablanca', 
    'Addis Ababa', 'Dakar', 'Accra', 'Kinshasa', 'Lagos', 'Abuja', 'Durban', 
    'Pretoria', 'Marrakech', 'Tunis', 'Algiers', 'Dar es Salaam',
  
    // South America
    'São Paulo', 'Rio de Janeiro', 'Buenos Aires', 'Lima', 'Bogotá', 'Santiago', 
    'Caracas', 'Quito', 'Montevideo', 'Brasília', 'Medellín', 'Guadalajara', 
    'Mexico City', 'Monterrey', 'Puebla',
  
    // Australia and Oceania
    'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Auckland', 
    'Wellington', 'Canberra', 'Christchurch', 'Gold Coast', 'Hobart',
  
    // Southeast Asia
    'Singapore', 'Jakarta', 'Bangkok', 'Kuala Lumpur', 'Manila', 'Ho Chi Minh City', 
    'Hanoi', 'Phnom Penh', 'Yangon', 'Cebu', 'Surabaya', 'Bandung', 
    'Quezon City', 'Davao', 'Bali', 'Phuket',
  
    // Canada
    'Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 
    'Winnipeg', 'Quebec City', 'Hamilton', 'Halifax',
  
    // Japan
    'Tokyo', 'Osaka', 'Yokohama', 'Nagoya', 'Sapporo', 'Fukuoka', 'Kobe', 
    'Kyoto', 'Kawasaki', 'Saitama',
  
    // South Korea
    'Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon', 'Gwangju', 'Ulsan'
  ];

  const handleRedirect = () => {
    if (city.trim()) {
      window.location.href = `https://wttr.in/${city}.png`;
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setCity(inputValue);

    if (inputValue.length > 0) {
      const filteredSuggestions = cities.filter(
        (c) => c.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestedCity) => {
    setCity(suggestedCity);
    setSuggestions([]);
  };

  return (
    <div  className="flex items-center justify-center min-h-screen bg-gray-100 bg-[url('https://static.vecteezy.com/system/resources/previews/042/379/531/non_2x/ai-generated-blue-sky-with-bright-sun-as-abstract-panoramic-background-ai-generated-image-photo.jpg')] ">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-8 text-center">Weather Forecast Based On Location</h2>
        <div className="relative">
          <div className="flex">
            <input 
              type="text" 
              value={city}
              onChange={handleInputChange}
              placeholder="Enter city name"
              className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button 
              onClick={handleRedirect}
              className="bg-yellow-500 text-white px-4 py-2 rounded-r-md hover:bg-yellow-600 transition duration-300 w-52"
            >
              Get Forecast
            </button>
          </div>
          {suggestions.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-40 overflow-y-auto">
              {suggestions.map((suggestion, index) => (
                <li 
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};