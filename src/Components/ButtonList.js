import React from 'react';
import Button from './Button';

const labels = [
    "All",
    "Sports",
    "Entertainments",
    "Movies",
    "Love",
    "Live",
    "Cricket",
    "Cooking",
    "Home",
    "Soccer"
]

const ButtonList = () => {
  return (
    <div className='flex'>
        {labels.map((item) => (<Button name={item} key={item} />))}
    </div>
  )
}

export default ButtonList