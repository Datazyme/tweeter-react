import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import TweetList from './components/TweetList';
import TweetForm from './components/TweetForm';


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Profile></Profile>
      <TweetForm></TweetForm>
      <TweetList></TweetList>    
    </div>
  );
}

export default App;
