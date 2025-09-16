import {
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";

type Messsages = {
  id: string;
  message: string;
  userEmail: string;
  userPicture: string;
  userName: string;
  date: Timestamp;
};

const ChatContainer = () => {
const [messages, setMeassages] = useState<Messsages[]>([]);

useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("date", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Messsages[];
      setMeassages(msgs);
    });
    return () => unsubscribe();
  }, []);

  return(

      <div className="w-full h-[400px] border-black border-2">
        {
            messages.map((message)=>(
                <div key={message.id}>
                    {message.message}
                </div>
            ))
        }
      </div>
  )
};

export default ChatContainer;
