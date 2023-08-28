"use client";
import Login from "./Login";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import img from "../../public/vercel.svg";
import { Head } from "next/head";

export default function Home() {
  const router = useRouter();
  const navigate = (blog) => {
    router.push("/blogs/" + blog);
  };
  return (
    <main>
      <button onClick={() => router.push("/blogs")}>Go to Blogs page </button>
      <br />
      <br />
      <button onClick={() => router.push("/Login-form")}>
        Go to Login form
      </button>
      <br />
      <br />
      <button onClick={() => router.push("/Login-form/Signup")}> Signup</button>
      <br />
      <br />
      <button onClick={() => navigate("Newblog")}> NewsBlog</button>
      <br />
      <br />
      <Image
        alt="img"
        src="https://images.unsplash.com/photo-1688670565149-d1e7c8ea70a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        width={500}
        height={500}
      />

      <img src="../../vercel.svg" alt="imges" />
      <Login />
    </main>
  );
}

const Page = (props) => {
  return <div>{props.name} Page</div>;
};
