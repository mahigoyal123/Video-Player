import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEOS_API } from '../Utils/Constants';
import VideoCard from './VideoCard';

const VideoContaioner = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideoes();
  }, []);

  const getVideoes = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json)
    setVideos(json.items);
  } 

  return (
    <div className='flex flex-wrap'>
      {videos.length > 0 && videos.map((item) => <Link key={item.id} to={"/watch?v=" + item.id}><VideoCard info={item} /></Link>) }
    </div>
  )
}

export default VideoContaioner