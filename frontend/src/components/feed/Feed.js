import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
import PostForm from '../post/PostForm';
import FeedHeader from '../feed_header/FeedHeader';
import '../../styles/feed/feed.css';
import postPic from '../../images/Vector.svg';


const Feed = ({ navigate }) => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [user, setUser] = useState("");

  useEffect(() => {
    if (token) {
      fetch(`${process.env.REACT_APP_API_URL}/users/current`, {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data.user);
        });
    }
  }, []);


  useEffect(() => {
    if(token) {
      fetch(`${process.env.REACT_APP_API_URL}/posts`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(async data => {
          window.localStorage.setItem("token", data.token)
          setToken(window.localStorage.getItem("token"))
          sortByDate(data.posts)
          setPosts(data.posts);
        })
    }
  }, [])

  const handleAddLike = (post) => {
    fetch(`${process.env.REACT_APP_API_URL}/posts/${post._id}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      if (res.status !== 201) {
        return Promise.reject('can`t like the post')
      }
      return res.json()
    })
    .then((data) => {
      const newPost = data.post
      setPosts((posts) => posts.map((p) => (p._id === newPost._id ? newPost : p)))
    })
  }

  const handleAddPost = (formData) => {
    fetch( `${process.env.REACT_APP_API_URL}/posts`, {
      method: 'post',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData
    })
    .then(res => {
      if (res.status !== 201) {
        return Promise.reject('can`t add post')
      }
      return res.json()
    })
    .then((data) => {
      let newPost = data.post;
      setPosts([newPost, ...posts])
      window.localStorage.setItem("token", data.token);
    })
  }
    
  const sortByDate = (array) => {
    array.sort((a,b) => { 
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  }

  const logout = () => {
    window.localStorage.removeItem("token")
    navigate('/login')
  }
  
  
    if(token) {
      return(
        <>
          <FeedHeader user={ user } logout={logout} />
          <section className="feed">
            <div className="feed__post-title_container">
              <img src={postPic} alt="speaker-icon" />
              <h2>Posts feed</h2>
            </div>
            <div className="post__container" id='feed' role="feed">
            <PostForm token={ token } handleAddPost={handleAddPost} />
                {posts.map(
                  (post) => ( <Post post={ post } key={ post._id } token={token} setToken={setToken} handleAddLike={handleAddLike} /> )
                )}
            </div>
          </section>
        </>
      )
    } else {
      navigate('/login')
    }
}

export default Feed;
