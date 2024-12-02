import React from "react";

import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";

interface WithLayoutProps {
  children: React.ReactNode;
  toggleTheme: () => void;
}

export default function WithLayout({ children, toggleTheme }: WithLayoutProps) {
  return (
    <div className="bg-white flex flex-col items-center w-full min-h-[100vh] overflow-hidden">
      <Header toggleTheme={toggleTheme} />

      <div className="flex flex-col w-full" id="start">
        {children}
      </div>

      <Footer />
    </div>
  );
}
