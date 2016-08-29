import React from 'react';

function App({ children }) {
  return (
    <div className="App">
      {children}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
