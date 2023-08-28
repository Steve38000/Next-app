import { useMemo, useState } from "react";

const Login = () => {
  const [Count, setCount] = useState(20);
  const [Data, setData] = useState(20);
  const CountMemo = useMemo(() => {
    console.log("call");
    return Count * 5;
  }, [Count]);
  return (
    <div>
      <h1>Count :{Count}</h1>
      <h1>Data :{Data}</h1>
      <h2>{CountMemo}</h2>
      <button onClick={() => setCount(Count + 20)}>Update Count</button>
      <button onClick={() => setData(Data * 20)}>Update Data</button>
    </div>
  );
};

export default Login;
