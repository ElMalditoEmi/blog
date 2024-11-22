import Footer from "./footer";


export default function Layout({ children }) {
  return (
    <div className="layout">
      {children}
      <Footer />
    </div>
  );
}