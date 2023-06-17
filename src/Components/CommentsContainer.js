import React from "react";

const commentData = [
  {
    name: "Amrit Anand",
    text: "Go to settings and type in word wrap. Change Editor: Word Wrap from off to This does exactly what I was wanting in the first place. ",
    replies: [],
  },
  {
    name: "Rakesh Raj",
    text: "Go to settings and type in word wrap. Change Editor: Word Wrap from off to This does exactly what I was wanting in the first place. ",
    replies: [
      {
        name: "Amrit Anand",
        text: "Go to settings and type in word wrap. Change Editor: Word Wrap from off to This does exactly what I was wanting in the first place. ",
        replies: [
          {
            name: "Milind Anand",
            text: "Go to settings and type in word wrap. Change Editor: Word Wrap from off to This does exactly what I was wanting in the first place. ",
            replies: [
              {
                name: "Amrit Anand",
                text: "Go to settings and type in word wrap. Change Editor: Word Wrap from off to This does exactly what I was wanting in the first place. ",
                replies: [
                  {
                    name: "Abhishek Anand",
                    text: "Go to settings and type in word wrap. Change Editor: Word Wrap from off to This does exactly what I was wanting in the first place. ",
                    replies: [
                        {
                            name: "Amrit Anand",
                            text: "Go to settings and type in word wrap. Change Editor: Word Wrap from off to This does exactly what I was wanting in the first place. ",
                            replies: [],
                        },
                    ],
                  },
                  {
                    name: "Raj Anand",
                    text: "Go to settings and type in word wrap. Change Editor: Word Wrap from off to This does exactly what I was wanting in the first place. ",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Aman Raj",
        text: "Go to settings and type in word wrap. Change Editor: Word Wrap from off to This does exactly what I was wanting in the first place. ",
        replies: [],
      },
    ],
  },
  {
    name: "Amrit Anand",
    text: "Go to settings and type in word wrap. Change Editor: Word Wrap from off to This does exactly what I was wanting in the first place. ",
    replies: [
      {
        name: "Neeta Kr",
        text: "Go to settings and type in word wrap. Change Editor: Word Wrap from off to This does exactly what I was wanting in the first place. ",
        replies: [],
      },
    ],
  },
  {
    name: "Amrit Anand",
    text: "Go to settings and type in word wrap. Change Editor: Word Wrap from off to This does exactly what I was wanting in the first place. ",
    replies: [],
  },
  {
    name: "Amrit Anand",
    text: "Go to settings and type in word wrap. Change Editor: Word Wrap from off to This does exactly what I was wanting in the first place. ",
    replies: [],
  },
  {
    name: "Amrit Anand",
    text: "Go to settings and type in word wrap. Change Editor: Word Wrap from off to This does exactly what I was wanting in the first place. ",
    replies: [
      {
        name: "Amrit Anand",
        text: "Go to settings and type in word wrap. Change Editor: Word Wrap from off to This does exactly what I was wanting in the first place. ",
        replies: [],
      },
    ],
  },
];

const Comment = ({ comment }) => {
  const { name, text} = comment;
  return (
    <div className="flex my-4">
      <img
      className="h-10 -mt-1"
        src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
        alt="user-icon"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p className='text-sm'>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({comments}) => {
    return (comments.map((item, i) => (<div>
        <Comment key={i} comment={item} />
        <div className="pl-5 ml-5 border-l-2">
            <CommentList comments={item.replies} />
        </div>
    </div>)))
}

const CommentsContainer = () => {
  return (
    <div className="mx-5 p-2">
      <h1 className="font-bold">Comments: </h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
