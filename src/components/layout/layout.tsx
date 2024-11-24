import Footer from "./footer";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      {children}
      <Footer />
    </div>
  );
}