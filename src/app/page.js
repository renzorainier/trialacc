'use client';

import { useState } from 'react';
import Main from './Main.jsx';
import Navbar from './Navbar.jsx';
import Head from 'next/head.js';

export default function Home() {
  const [activeComponent, setActiveComponent] = useState('attendance'); // State for toggling components

  return (
    <>
      <Head>
        <title>Attendance</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400&amp;display=swap"
          rel="stylesheet"
        />
        {/* Open Graph meta tags */}
        {/* <meta property="og:title" content="Rescue Zone | DVBS 2024" />
        <meta property="og:image" content="https://dvbs.vercel.app/target.png" />
        Add more Open Graph meta tags as needed */}
      </Head>

      <div>
        <Navbar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
        <Main activeComponent={activeComponent} />
      </div>
    </>
  );
}
