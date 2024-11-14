
import React, { useState, useEffect } from 'react';
import { getCountries } from '../api/getCountries';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
/*
const Population = () => {
  const [countryData, setData] = useState({}); //create state var countries that is set bu setCountries func

  //get country data from API and update countries
  useEffect(() => {
    const getCountryData = async () => {
      try {
        const data = await getCountries();
      } catch (error) {
        console.error("Error fetching countries:", error);
      }

      const countryNames = data.map((country) => country.name);
      const countryPop = data.map((country) => country.population);
      setData({
        labels: countryNames,
        datasets: [
          {
            label: 'Population',
            data: countryPop,
          },
        ],
      });
    };
    getCountryData();
  }, []);

  return (
    <div>
      <h1>Population</h1>
      {data.labels ? (
        <Bar 
          data={countryData}
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true, text="Population of South American Countries",
              },
            },
          }}
        />
      ) : ( <p>Loading..</p>)}
    </div>
  );
};

export default Population; */

const Population = () => {
  //error handling for if call to API or getting data fails
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCountryData = async () => {
      try {
        const data = await getCountries();
        const popCountries = data.filter(country => country.population); //filter for if country doesn't have population entry
        const countryNames = popCountries.map(country => country.name);
        const populations = popCountries.map(country => country.population);

        // Set the data for the chart
        setChartData({
          labels: countryNames,
          datasets: [
            {
              label: 'Population',
              data: populations,
              borderWidth: 1, // Use default colors by omitting backgroundColor/borderColor
            },
          ],
        });
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    getCountryData();
  }, []);

  // Show a loading message until data is fetched
  if (loading) return <p>Loading...</p>;
  
  // Show an error message if the data fetch failed
  if (error) return <p>{error}</p>;

  // Render the bar chart if data is successfully fetched
  return (
    <div>
      <h1>Population of South American Countries</h1>
      {chartData && (
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: 'top' },
              title: {
                display: true,
                text: 'Population of South American Countries',
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Population;