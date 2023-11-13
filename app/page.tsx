"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/auth/signup");
  }, []);

  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-between px-14 py-10'></div>
    </>
  );
};

export default Home;
