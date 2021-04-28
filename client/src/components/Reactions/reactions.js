import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectReactions } from "../../redux/slices/reactionSlice";

const Reactions = () => {
  const [reactions, errors] = useSelector(selectReactions);
  const [reactionCount, setReactionCount] = useState({
    Haha: 0,
    Love: 0,
    Like: 0,
    Angry: 0,
    Sad: 0,
    Wow: 0,
  });

  /*const test = () => {
    console.log(reactions.find((item) => item.reactiontype === "love"));
    var haha = 0;
    var love = 0;
    var like = 0;
    var angry = 0;
    var sad = 0;
    var wow = 0;
    reactions.map((item) => {
      if (item.reactiontype === "haha") {
        haha++;
        setReactionCount({ ...reactionCount, Haha: haha });
      }
      if (item.reactiontype === "angry") {
        angry++;
        setReactionCount({ ...reactionCount, Angry: angry });
      }
      if (item.reactiontype === "love") {
        love++;
        setReactionCount({ ...reactionCount, Love: love });
      }
      if (item.reactiontype === "sad") {
        sad++;
        setReactionCount({ ...reactionCount, Sad: sad });
      }
      if (item.reactiontype === "like") {
        like++;
        setReactionCount({ ...reactionCount, Like: like });
      }
      if (item.reactiontype === "wow") {
        wow++;
        setReactionCount({ ...reactionCount, Wow: wow });
      }
    });
  };*/

  return (
    <>
      <div className='Reactions'>
        <div>
          {reactions.filter((item) => item.reactiontype === "haha").length} 😆
        </div>
        <div>
          {reactions.filter((item) => item.reactiontype === "love").length} ❤️
        </div>
        <div>
          {reactions.filter((item) => item.reactiontype === "angry").length}
          😡
        </div>
        <div>
          {reactions.filter((item) => item.reactiontype === "wow").length}
          😮
        </div>
        <div>
          {reactions.filter((item) => item.reactiontype === "sad").length}
          😢
        </div>
        <div>
          {reactions.filter((item) => item.reactiontype === "like").length}
          👍
        </div>
      </div>
    </>
  );
};

export default Reactions;
