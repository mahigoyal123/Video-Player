import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {channelTitle, thumbnails, title} = snippet;
  return (
    <div className='my-6 mr-8 w-80 cursor-pointer'>
        <img className="rounded-lg" alt="thumbnails" src={thumbnails.medium.url} />
        <ul className='p-2'>
            <li className='font-bold pb-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard