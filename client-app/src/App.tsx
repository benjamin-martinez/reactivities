import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { List } from "antd"
import axios from 'axios';
import './App.css';

function App() {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
      .then(response => setActivities(response.data))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <List
          dataSource={activities}
          itemLayout="horizontal"
          renderItem={(activity: any) => <List.Item>{activity.title}</List.Item>}
        />
      </header>
    </div>
  );
}

export default App;
