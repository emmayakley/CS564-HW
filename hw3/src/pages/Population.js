import React, { useState, useEffect } from 'react';
import { getCountries } from '../api/getCountries';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import './Population.css';
import { backgroundColors, borderColors } from '../utils/chartColors';

const Population = () => {
  //error handling for if call to API or getting data fails
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCountryData = async () => {
      try {
        const data = await getCountries();
        const popCountries = data.filter((country) => country.population); //filter for if country doesn't have population entry
        const countryNames = popCountries.map((country) => country.name);
        const populations = popCountries.map((country) => country.population);

        // Set the data for the chart
        setChartData({
          labels: countryNames,
          datasets: [
            {
              label: 'Population',
              data: populations,
              backgroundColor: backgroundColors,
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
    <div className="population-style">
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
