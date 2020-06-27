import React from 'react';
import moment from 'moment';
import './App.css';
import Avartar from './components/Avartar';
import images from './assest/images';

function App() {
  const now = moment(new Date());
  const startDate = moment("23/06/2020", "DD-MM-YYYY");
  const duration = moment.duration(now.diff(startDate));
  const diffDay = duration.asDays();
  return (
    <div className="App">
      <div className="title">Been Love Memory</div>
      <div className="time-controller" id="app-controller">
        <div className="time">
          <div className="time-title">Đang Yêu</div>
          <div className="time-number">{Math.floor(diffDay)}</div>
          <div className="time-title">Ngày</div>
        </div>
      </div>
      <div className="avatar" id="avatar">
        <Avartar
          name="Nam Hoàng"
          image="nam"
        />
        <img className="heart-icon" src={images.heart} alt="heart"></img>
        <Avartar
          name="Nhung Bùi"
          image="nhung"
        />
      </div>
    </div>
  );
}

export default App;
