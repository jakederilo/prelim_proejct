import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const TopCards = () => {
    const [totalUsers, setTotalUsers] = useState(null);
    const [totalPosts, setTotalPosts] = useState(null);
    const [totalComments, setTotalComments] = useState(null);
    const [totalTodos, setTotalTodos] = useState(null);

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => console.log(json))

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                // Once the data is fetched, set the total number of users
                setTotalUsers(users.length);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json))

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                // Once the data is fetched, set the total number of users
                setTotalPosts(posts.length);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => console.log(json))

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comments => {
                // Once the data is fetched, set the total number of users
                setTotalComments(comments.length);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => console.log(json))

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(todos => {
                // Once the data is fetched, set the total number of users
                setTotalTodos(todos.length);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);








    return (
        <div className='grid lg:grid-cols-5 gap-4 p-4'>
            <Link href="/users"><div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>{totalUsers}</p>
                    <p className='text-gray-600 font-bold'>User</p>
                </div>
                <p className='bg-orange-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-red-700 text-lg'>+100%</span>
                </p>
            </div></Link>
            <Link href="/post"><div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>{totalPosts}</p>
                    <p className='text-gray-600'>Posts</p>
                </div>
                <p className='bg-violet-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-red-700 text-lg'>+10%</span>
                </p>
            </div></Link>
            <Link href="/comments"><div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>{totalComments}</p>
                    <p className='text-gray-600'>Comments</p>
                </div>
                <p className='bg-pink-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-red-700 text-lg'>+2%</span>
                </p>
            </div></Link>
            <Link href="/todos"><div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>{totalTodos}</p>
                    <p className='text-gray-600'>Todos</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-red-700 text-lg'>+5%</span>
                </p>
            </div></Link>
        </div>
    )
}

export default TopCards