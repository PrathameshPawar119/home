import './App.css';
import React from 'react'
// import LoadingBar from "react-top-loading-bar";


import Navbar from './components/Navbar';
import News from './components/News';
import RightToolBar from './components/RightToolBar';
import TopBar from './components/TopBar';


export default function App() {

    return (
      <>
        <TopBar />
        {/* <LoadingBar
        color='#f11946'
        progress={'10'}
        /> */}
        <Navbar />
        <News country={"in"} apiKey={"bcbfb4ec43124733b641b070bf181828"} pageSize={10} />
        <RightToolBar />
      </>
    );
}

// " |7c14e0735b9744a8b2bfe7ccd34e4b18