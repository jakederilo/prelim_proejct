import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";

const Post = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(commentData => {
        setComments(commentData);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

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



  return (
    <div className='bg-customDivColor min-h-screen'>
      <div className='bg-customDivColor flex justify-between p-4'>
        <h2 className="font-bold">COMMENTS</h2>
      </div>
     
        <div className='bg-customDivColor min-h-screen flex justify-center'>

          <div className='p-4'>
            <div className='bg-customColor  w-full m-auto p-4 border rounded-lg  overflow-y-auto'>
              {posts.map((post, index) => {
                const comment = comments.find(comment => comment.postId === post.userId);
                return (
                  <Card key={index} className="max-w-[450px] h-[250px] mb-4">
                    <CardHeader className="justify-between">
                      <div className="flex gap-5 items-center"> 
                        <Avatar isBordered radius="33" size="sm" src="/avatar.png" style={{ width: '50px', height: '50px' }} />
                        <div className="flex flex-col gap-1 items-start justify-center">
                          <h4 className="text-small font-semibold leading-none text-default-600">{comment ? comment.name : "Unknown Email"}</h4>
                          <h5 className="text-small tracking-tight text-default-400">{comment ? comment.email : "Unknown Email"}</h5>
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
                      <p>
                        {post.body}
                      </p>
                      <span className="pt-2">
                        #FrontendWithZoey
                        <span className="py-2" aria-label="computer" role="img">
                          💻
                        </span>
                      </span>
                    </CardBody>
                    
                    <CardFooter className="gap-3">
                      <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">7k</p>
                        <p className="text-default-400 text-small">Following</p>
                      </div>
                      <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">8.1K</p>
                        <p className="text-default-400 text-small">Followers</p>
                      </div>
                    </CardFooter>
                    <Divider className="my-3" />
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>

  );
};

export default Post;
