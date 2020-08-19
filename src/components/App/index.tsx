import React, { useState, ReactNode } from 'react';
import { generateCells } from '../../utils';

import NumberDisplay from '../NumberDisplay';
import happyImg from '../../assets/happy.png';
import Button from '../Button';

import './styles.scss';

const App: React.FC = () => {
  const [cells, setCells] = useState(generateCells);

  const renderCells = (): ReactNode => {
    return cells.map((row, rowIndex) =>
      row.map((cell, cellIndex) => <Button key={`${rowIndex}-${cellIndex}`} />),
    );
  };

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
      <div className="Body">{renderCells()}</div>
    </div>
  );
};

export default App;
