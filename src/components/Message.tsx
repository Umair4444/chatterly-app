import { Timestamp } from "firebase/firestore";
import Image from "next/image";
import React from "react";

type Messsages = {
  id: string;
  message: string;
  userEmail: string;
  userPicture: string;
  userName: string;
  date: Timestamp;
};

const Message = ({ message }: { message: Messsages }) => {
  return (
    <div className="flex gap-2">
      <Image
        src={message.userPicture}
        width={40}
        height={40}
        alt={message.userName}
      />
      <div className="flex flex-col">
        <span>{message.message}</span>
        <span>{message.date.toDate().toLocaleString()}</span>
      </div>
    </div>
  );
};

export default Message;
