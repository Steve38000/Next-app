"use client";
import { useMemo } from "react";
import { useEffect, useState } from "react";
const Page = () => {
  const [user, setUser] = useState("Lewis");
  const [user1, setUser1] = useState("Lewis1");
  const [Count, setCount] = useState(20);
  const [Data, setData] = useState(20);
  const CountMemo = useMemo(() => {
    console.log("call");
    return Count * 5;
  }, [Count]);
  const update = () => {
    setUser("Carlos");
  };
  const update1 = () => {
    setUser1("Carlos1");
  };
  useEffect(() => {
    console.log("useEffect Called");
  }, [user]);
  return (
    <div>
      <h1>
        My first State name is {user} {user1}
      </h1>
      <button onClick={() => update()}>Click here</button>
      <button onClick={() => update1()}>Click here</button>
      <h1>Count :{Count}</h1>
      <h1>Data :{Data}</h1>
      <h2>{CountMemo}</h2>
      <button onClick={() => setCount(Count + 20)}>Update Count</button>
      <button onClick={() => setData(Data * 20)}>Update Data</button>
    </div>
  );
};

export default Page;
