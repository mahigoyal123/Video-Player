import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName } from "../Utils/helper";
import { generateRandomMessage } from "../Utils/helper";
import { addMessages } from "../Utils/chatSlice";
const LiveChatStreaming = () => {
  const menuOpen = useSelector((store) => store.app.isMenuOpen);
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <div className={`p-2 h-[500px] ${menuOpen ? "w-64" : "w-96"}`}>
      <div className="border h-[460px] p-2 overflow-y-scroll">
        {chatMessages.map((item, i) => (
          <div key={i} className="flex my-4 pb-2">
            <img
              className="h-10 -mt-1"
              src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
              alt="user-icon"
            />
            <div>
              <p className="font-bold">{item.name}</p>
              <p className="whitespace-pre-wrap">{item.message}</p>
            </div>
          </div>
        ))}
      </div>

      <form
        className="w-full flex border"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessages({
              name: "Amrit Anand",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 border py-1 w-full"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 bg-green-100">Send</button>
      </form>
    </div>
  );
};

export default LiveChatStreaming;
