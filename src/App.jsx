// import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// import BookingForm from "./components/bookingForm/BookinForm";
import Navbar from "./components/navbar/Navbar";

function App() {
  const location = useLocation();
  const { user } = useAuth();
  const navigate = useNavigate();

  const isPartnerDashboard = location.pathname.startsWith("/dashboard/hotels");
  const isPartnerDashboard2 = location.pathname.startsWith("/dashboard");
  const isAdminDashboard = location.pathname.startsWith(
    "/admin-dashboard/hotels"
  );
  const isAdminDashboard2 = location.pathname.startsWith("/admin-dashboard");
  const isForggotPassword = location.pathname.startsWith("/forgot-password");
  const isHotelCheckout = location.pathname.startsWith("/hotel-checkout");
  const isHotelDetailPage = location.pathname.startsWith("/hotel/");
  const isListProperty = location.pathname.startsWith("/list-property");
  const isRegister = location.pathname.startsWith("/register");
  const isUpdateForm = location.pathname.startsWith("/update");
  const isLogin = location.pathname.startsWith("/login");
  const isSearchForm = location.pathname.startsWith("/search-results");
  const isResetPassword = location.pathname.startsWith("/reset-password");
  const isSuccess = location.pathname.startsWith("/success");
  const isRegisterForm = location.pathname.startsWith("/register");
  const isPartnerRegisterForm =
    location.pathname.startsWith("/partner-register");
  const isRoom = location.pathname.startsWith("/create-room");
  const ishotelUpdate = location.pathname.startsWith("/hotel-update");
  const ishotelInfo = location.pathname.startsWith("/hotel-details");
  const isDiscount = location.pathname.startsWith("/discount/hotel");
  const isCheckInDetails = location.pathname.startsWith("/checkIn-details");
  const isCheckIUpdate = location.pathname.startsWith("/checkIn-update");
  const CheckIUpdate = location.pathname.startsWith("/checkIn/update");
  const isBookingConfirmed = location.pathname.startsWith("/already-confirmed");
  const isBookingExpire = location.pathname.startsWith("/booking-expired");
  const isBookingSuccess = location.pathname.startsWith(
    "/confirmation-success"
  );
  const isBooking = location.pathname.startsWith("/success");

  if (isAdminDashboard && (!user || user.role !== "admin")) {
    navigate("/");
  }

  if (isPartnerDashboard && (!user || user.role !== "partner")) {
    navigate("/");
  }

  return (
    <>
        <Navbar />
    </>
  );
}

export default App;
