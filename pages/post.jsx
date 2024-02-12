import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Button, Avatar } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";

const Post = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(postData => {
        setPosts(postData);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(userData => {
        setUsers(userData);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(commentData => {
        setComments(commentData);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }, []);

  const toggleComments = (postId) => {
    setSelectedPostId(selectedPostId === postId ? null : postId);
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between p-4'>
        <h1 className="font-bold ">Post</h1>
      </div>
      <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
        <div className='bg-gray-100 min-h-screen flex justify-center'>

          <div className='p-4'>
            <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
              {posts.map((post, index) => {
                const user = users.find(user => user.id === post.userId);
                const postComments = comments.filter(comment => comment.postId === post.id);
                return (
                  <Card key={index} className="max-w-[340px] mb-4">
                    <CardHeader className="justify-between">
                      <div className="flex gap-5 items-center">
                        <Avatar isBordered radius="33" size="sm" src="/avatar.png" style={{ width: '50px', height: '50px' }} />
                        <div className="flex flex-col gap-1 items-start justify-center">
                          <h4 className="text-small font-semibold leading-none text-default-600">{user ? user.name : "Unknown User"}</h4>
                          <h5 className="text-small tracking-tight text-default-400">{user ? user.email : "Unknown Email"}</h5>
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
                      <p>{post.body}</p>
                      <Divider className="my-3" />
                      <Dropdown open={selectedPostId === post.id} onToggle={() => toggleComments(post.id)}>
                        <DropdownTrigger>
                          <Button variant="bordered" color="info">Comments</Button>
                        </DropdownTrigger>
                        <div>
                          <DropdownMenu>
                            <DropdownItem>
                              <ScrollShadow hideScrollBar className="w-[300px] h-[200px]" style={{ backgroundColor: '#f0f0f0' }}>
                                <ul style={{ listStyleType: 'none', padding: '0' }}>
                                  {postComments.map((comment, commentIndex) => (

                                    <li key={commentIndex} style={{ marginBottom: '10px' }}>
                                      <p style={{ fontWeight: 'bold' }}>{comment.email}</p>
                                      <p>{comment.body}</p>
                                    </li>
                                  ))}
                                </ul>
                              </ScrollShadow>
                            </DropdownItem>
                          </DropdownMenu>
                        </div>
                      </Dropdown>
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;