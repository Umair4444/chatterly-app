"use client"
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import SignIn from "@/components/SignIn";
import ChatApp from "@/components/ChatApp";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);
  return <div className="w-full flex items-center justify-center py-2">

  {user ? <ChatApp user={user}/> : <SignIn/>}


  </div>;
}
