import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [totalUsers, setTotalUsers] = useState(() => {
    // Initialize totalUsers from local storage or default to null
    const storedTotalUsers = localStorage.getItem('totalUsers');
    return storedTotalUsers ? JSON.parse(storedTotalUsers) : null;
  });
  const [totalPosts, setTotalPosts] = useState(() => {
    const storedTotalPosts = localStorage.getItem('totalPosts');
    return storedTotalPosts ? JSON.parse(storedTotalPosts) : null;
  });

  const [totalComments, setTotalComments] = useState(() => {
  const storedTotalComments = localStorage.getItem('totalComments');
  return storedTotalComments ? JSON.parse(storedTotalComments) : null;
});

  const [totalTodos, setTotalTodos] = useState(() => {
  const storedTotalTodos = localStorage.getItem('totalTodos');
  return storedTotalTodos ? JSON.parse(storedTotalTodos) : null;
});


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        // Once the data is fetched, set the total number of users
        setTotalUsers(users.length);
        // Store totalUsers in local storage
        localStorage.setItem('totalUsers', JSON.stringify(users.length));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        setTotalPosts(posts.length);
        localStorage.setItem('totalPosts', JSON.stringify(posts.length));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

    
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(comments => {
        setTotalComments(comments.length);
        localStorage.setItem('totalComments', JSON.stringify(comments.length));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => {
        setTotalTodos(todos.length);
        localStorage.setItem('totalTodos', JSON.stringify(todos.length));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);









  

  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Users', 'Posts', 'Comments', 'Todos'],
      datasets: [
        {
          label: 'TOTAL',
          data: [totalUsers, totalPosts, totalComments, totalTodos],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 190, 235, 0.4)',
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Daily Revenue',
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, [totalUsers, totalPosts, totalComments, totalTodos]);

  return (
    <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
