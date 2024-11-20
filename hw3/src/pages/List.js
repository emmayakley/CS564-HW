import React, { useEffect, useState } from 'react';
import { getCountries } from '../api/getCountries';
import './List.css';

const List = () => {
  const [countries, setCountries] = useState([]); //create state var countries that is set bu setCountries func

  //get country data from API and update countries
  useEffect(() => {
    const getCountryData = async () => {
      const data = await getCountries();
      setCountries(data);
    };
    getCountryData();
  }, []);

  //output data
  return (
    <div className = "info-list">
      <h1 className>South American Countries</h1>
      {countries.length > 0 ? ( //check to make sure country data exists before displaying
        <div className="list-container">
            {countries.map((country) => (
              <div className="country-card" key={country.id}>
                <div key={country.id}>
                  <h3>{country.name}</h3>
                  <p>
                    GDP in billions: {country.gdp_billions || 'Not provided'}
                  </p>
                  <p>
                    Official Languages:{' '}
                    {country.official_languages?.join(', ') || 'Not provided'}{' '}
                  </p>
                </div>
                <img src={country.flag_png} alt={country.flag_alt} />
              </div>
            ))}
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default List;
