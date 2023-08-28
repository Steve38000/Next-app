"use client";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  return (
    <>
      <div>Login Form</div>
      <button onClick={() => router.push("/")}>Home Page</button>
      <br />
      <br />
      <button onClick={() => router.push("/blogs")}>Blogs page</button>
      <br />
      <br />
      <button onClick={() => router.push("/Login-form/Signup")}> Signup</button>
    </>
  );
};

export default Page;
