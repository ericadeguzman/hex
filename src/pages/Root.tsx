import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import Footer from '../Footer';

//styles
import '../css/App.css';


function RootLayout() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: 'calc(100vh - 40px)',
          
        }}
      >
        <Nav />
        <div className="wrapper" style={{ margin: '20px 60px', }}>
          <Outlet />
        </div>
        
      </div>
      <Footer />
    </>
  );
}

export default RootLayout;
