import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

type Props = {
    children: React.ReactNode;
}

const MainLayout = ({ children }:Props) => {
    return (
        <div>
            <Navbar />
            <main className={"pt-20"}>
                {children}
            </main>
            <Footer />
      </div>
  )
};

export default MainLayout;
