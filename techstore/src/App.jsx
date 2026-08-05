import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import UserProfileManager from "./feautres/UserProFile/UserProFileManager";
import ProfileManager from "./feautres/LocalProfile/ProfileManager";

function App() {
  return (
    <>
      {/* <Header />
      <ProductList />
      <Footer /> */}
      <div className="container bg-white vh-100">
        <h1 className="text-center">Hệ thống quản lý cửa hàng</h1>
        <hr></hr>
        {/* <UserProfileManager/> */}
        <ProfileManager />
      </div>
    </>
  );
}

export default App;
