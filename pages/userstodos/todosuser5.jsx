import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "@nextui-org/react";
import Link from 'next/link';

const Todos = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todoData => {
        setTodos(todoData);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
        setError(error); // Set error state if there's an error fetching todos
      });
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/5')
      .then(response => response.json())
      .then(userData => {
        setUser(userData);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
        setError(error); // Set error state if there's an error fetching user
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>; // Render error message if there's an error
  }

  return (
    <div className='bg-customDivColor min-h-screen'>
      <div className='bg-customDivColor flex justify-between p-4'>
        <h2 className="font-bold">TODOS</h2>
      </div>
     
        <div className='bg-customDivColor min-h-screen flex justify-center'>

          <div className='p-4'>
            <div className='bg-customColor  w-full m-auto p-4 border rounded-lg  overflow-y-auto'>
            {user && (
              <Card key={user.id} className="max-w-[340px] mb-4"> {/* Use a unique identifier as key */}
                <CardHeader className="justify-between">
                  <div className="flex gap-5 items-center">
                    <Avatar isBordered radius="33" size="sm" src="/avatar.png" style={{ width: '50px', height: '50px' }} />
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="text-small font-semibold leading-none text-default-600">{user.name}</h4>
                      <h5 className="text-small tracking-tight text-default-400">{user.email}</h5>
                    </div>
                  </div>
                  <Button
                    className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={isFollowed ? "bordered" : "solid"}
                    onClick={() => setIsFollowed(!isFollowed)}
                  >
                    {isFollowed ? "Unfollow" : "Follow"}
                  </Button>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                  <ul>
                    {/* Render todos for the user with ID 2 */}
                    {todos
                      .filter(todo => todo.userId === 5)
                      .map(todo => (
                        <li key={todo.id}>
                          {todo.id}: {todo.title}</li>
                      ))}
                  </ul>
                </CardBody>
                <CardFooter className="gap-3">
                  <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">4</p>
                    <p className="text-default-400 text-small">Following</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">97.1K</p>
                    <p className="text-default-400 text-small">Followers</p>
                  </div>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
