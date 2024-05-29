"use client";
import React from "react";
import { GlobalProvider } from "@/context/global";
import { ToastContainer } from "react-toastify";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <GlobalProvider>
      <ToastContainer position="top-center" autoClose={5000} />

      {children}
    </GlobalProvider>
  );
};

export default Providers;
