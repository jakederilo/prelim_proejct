import { useEffect } from 'react';
import { Chart } from 'chart.js';
import 'chartjs-adapter-date-fns'; 
import '../styles/globals.css';
import Sidebar from '../components/Sidebar';

export default function App({ Component, pageProps }) {
  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  );
}