import { Outlet, Navigate } from "react-router-dom";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { Navbar, Footer } from "../../components/Layout";

const AuthenticationRoutes = () => {
  const userUid = useSelector((state: RootState) => state.user.uid);
  return userUid ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AuthenticationRoutes;
