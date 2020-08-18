import React from 'react';

import NumberDisplay from '../NumberDisplay';
import happyImg from '../../assets/happy.png';

import './styles.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="Header">
        <NumberDisplay value={1} />
        <div className="Face">
          <div className="image-container">
            <img src={happyImg} alt="Mary happy" />
          </div>
        </div>
        <NumberDisplay value={23} />
      </div>
      <div className="Body">Body</div>
    </div>
  );
};

export default App;
