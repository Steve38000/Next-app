"use client";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <h1>Blog Page</h1>
      <button onClick={() => router.push("/")}>Home Page</button>
      <br />
      <br />
      <button onClick={() => router.push("/Login-form")}>Login form</button>
      <br />
      <br />
      <button onClick={() => router.push("/blogs/Newblog")}> NewsBlog</button>
    </>
  );
};

export default Page;
