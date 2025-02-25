import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format, subDays } from 'date-fns';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(subDays(new Date(), 7));
  const [endDate, setEndDate] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const token = 'ab1e119aa0009ad6457795f39f927f27d17a645e4d45b73a17fcda0861392c1b'; 

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/tipo-cambio`,
        {
          params: {
            startDate: format(startDate, 'yyyy-MM-dd'),
            endDate: format(endDate, 'yyyy-MM-dd'),
          },
        }
      );
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [startDate, endDate]);

  const handleDateChange = (e, isStartDate) => {
    const date = new Date(e.target.value);
    if (isStartDate) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Tipo de Cambio Banxico</h1>
        <div className="date-controls">
          <label>
            Fecha de inicio:
            <input
              type="date"
              value={format(startDate, 'yyyy-MM-dd')}
              onChange={(e) => handleDateChange(e, true)}
            />
          </label>
          <label>
            Fecha de fin:
            <input
              type="date"
              value={format(endDate, 'yyyy-MM-dd')}
              onChange={(e) => handleDateChange(e, false)}
            />
          </label>
        </div>
        {loading ? (
          <p className="loading">Cargando...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Tipo de Cambio</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.fecha}</td>
                  <td>{item.dato}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default App;