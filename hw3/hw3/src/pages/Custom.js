import React, { useEffect, useState } from 'react';
import { getCountries} from '../api/getCountries';
import { Pie } from 'react-chartjs-2';

const Custom = () => {
  const [chartData, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLangData = async () => {
      try {
        const data = await getCountries();

        //object to calculate num countries for each language
        const languageCounts  = data.reduce((acc, country) => { //acc (accumulator) to keep sum of languages
          country.official_languages.forEach(language => {
            acc[language] = (acc[language] || 0) + 1;
          });
        return acc;
      }, {});

      setData({
        labels: Object.keys(languageCounts), //name of the countries
        datasets: [
          {
            label: 'Number of countries who speak each language',
            data: Object.values(languageCounts),
          },
        ],
      });
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    getLangData();
  }, []);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>{error}</p>

  return (
    <div>
      <h1>South American Languages</h1>
      {chartData && (
        <Pie 
          data={chartData} 
          options={{
            responsive:true,
            plugins: {
              legend: {
                position: 'top',

              },
              title: {
                display: true,
                text: 'Languages Spoken by % of South American Countries'
              },
            },
          }}
        />
      )}
    </div>
  )
}

export default Custom;