import React from 'react';
import logo from './logo.svg';
// import './App.css';
import UseMemoSample from './components/UseMemoSample';
import UseMemoSample1 from './components/UseMemoSample1';
import UseMemoSample2 from './components/UseMemoSample2';
import Clock from './components/Clock';
import ContextSample from './components/ContextSample';
import UseRefSample from './components/UseRefSample';
import UseImperativeHandleSample from './components/UseImperativeHandleSample';
import UseInputSample from './components/UseInputSample';

function App() {
  return (
    <>
      {/* <UseMemoSample2 /> */}
      {/* <Clock /> */}
      {/* <ContextSample /> */}
      {/* <UseRefSample /> */}
      {/* <UseImperativeHandleSample /> */}
      <UseInputSample />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
