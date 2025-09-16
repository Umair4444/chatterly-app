import { signOut, User } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../../firebase";
import ChatContainer from "./ChatContainer";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const ChatApp = ({ user }: { user: User }) => {
  const [inputText, setinputText] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSignOut = async () => {
    await signOut(auth);
  };

  const handleSendMessage = async () => {
    try {
      setLoading(true);
      await addDoc(collection(db, "messages"), {
        message: inputText,
        userEmail: user.email,
        userPicture: user.photoURL,
        userName: user.displayName,
        date: serverTimestamp(),
      });
      setinputText("");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  console.log(user);
  return (
    <div className="w-2/3 flex flex-col items-center justify-center gap-4">
      <div>ChatApp</div>
      <ChatContainer />
      <div className="w-[500px] flex gap-2 border-2 border-black p-2">
        <input
          type="text"
          placeholder="type here..."
          className="w-full outline-none px-4 py-2"
          value={inputText}
          onChange={(e) => setinputText(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          disabled={loading}
          className="px-4 py-2 bg-green-500 text-white"
        >
          Send
        </button>
      </div>

      <button
        onClick={handleSignOut}
        className="px-4 py-2 border-2 rounded-full "
      >
        SignOut
      </button>
    </div>
  );
};

export default ChatApp;
