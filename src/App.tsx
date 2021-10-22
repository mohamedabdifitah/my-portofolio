import React from 'react';
import './App.css';
import Header from "./component/header/header";
import PersonalDetail  from "./component/detail/detail";
import Introduction from "./component/intro/intro";
function App() {
  return (
    <div className="App">
     <Header />
     <Introduction />
     <PersonalDetail />
     </div>

  );
}

export default App;
