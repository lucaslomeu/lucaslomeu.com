import React from 'react';

import Header from '../../components/Header/Header';
import Info from '../../components/Info/Info';

import '../../assets/styles/reset.scss';
import './Home.scss';

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Info />
      </div>
    </>
  );
};

export default Home;
