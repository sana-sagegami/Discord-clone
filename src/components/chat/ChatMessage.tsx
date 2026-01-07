import { Avatar } from "@mui/material";
import { FieldValue, Timestamp } from "firebase/firestore";
import React from "react";
import "./Message.scss";

type Props = {
  message: string;
  timestamp: Timestamp;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
};

const Message = (props: Props) => {
  const { message, timestamp, user } = props;
  // console.log(timestamp.seconds.toDate());

  return (
    <div className="message">
      <Avatar />
      <div className="messageInfo">
        <h4>
          <span className="messageTimestamp">
          </span>
        </h4>

        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
