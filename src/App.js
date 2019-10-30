import React from 'react';
import './App.css';

import Button from './components/button.style.component';
import OutterContainer from './components/outtercontainer.style.component';
import InnerContainer from './components/innercontainer.style.component'

const App = () => {
  return (
    <div className="App">
      <OutterContainer>
        <InnerContainer>
          <Button>
            <span className="star">&#9733;</span>
              CHECKOUT
            <span className="star">&#9733;</span>
          </Button>
        </InnerContainer>
      </OutterContainer>
    </div>
  );
}

export default App;
