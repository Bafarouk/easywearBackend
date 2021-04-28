import { ReactionBarSelector } from "@charkour/react-reactions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setErrors } from "../../redux/slices/postSlice";
import { addReaction, selectReactions } from "../../redux/slices/reactionSlice";
import { queryApi } from "../../utils/queryApi";
import jwtDecode from "jwt-decode";

const UserToReact = ({ post }) => {
  const dispatch = useDispatch();
  const [reactions, errors] = useSelector(selectReactions);
  const [user, setUser] = useState({});
  const jwtToken = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwtToken) {
      // Set auth token header auth
      setUser(jwtDecode(jwtToken)); // Decode token and get user info and exp
    }
    console.log(user);
  }, []);

  const handleEmojiClick = async (label) => {
    console.log(label);
    const values = {
      reactiontype: label,
      user_id: user._id,
      post_id: post._id,
    };
    const [res, err] = await queryApi("reaction", values, "POST");
    if (err) {
      setErrors({
        visible: true,
        message: JSON.stringify(err.errors, null, 2),
      });
    } else {
      dispatch(addReaction(res));
    }
  };

  return (
    <div>
      {!reactions.find((r) => r.user_id === user._id) ? (
        <ReactionBarSelector
          iconSize={20}
          onSelect={(label) => handleEmojiClick(label)}
        />
      ) : (
        <span className='alert alert-info'>Thanks for your review</span>
      )}
    </div>
  );
};

export default UserToReact;
