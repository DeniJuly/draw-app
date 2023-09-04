"use client"
import { signIn } from "next-auth/react";
import React from "react";

function Login() {
  return (
    <div className="h-screen w-screen bg-white grid place-items-center">
      <button
        onClick={() => signIn("google")}
        className="p-2 rounded-md border border-black text-black"
      >
        Masuk dengan Google
      </button>
    </div>
  );
}

export default Login;
