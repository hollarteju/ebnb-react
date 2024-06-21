import {HashRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import BookingForm from "./components/bookingForm/BookinForm";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import CategoryList from "./pages/categoryList/CategoryList";
import ScrollToTopButton from "./components/scrollToTopButton/ScrollToTopButton";
import HotelDetailPage from "./pages/hotelDetailPage/HotelDetailPage";
import HotelCheckout from "./pages/hotelCheckout/HotelCheckout";
import RegisterForm from "./pages/registerForm/RegisterForm";
import LoginForm from "./pages/loginForm/LoginForm";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import ForgotPasswordTokenRequest from "./pages/forgotPassword/ForgotPasswordTokenRequest";
import PartnerDashboard from "./pages/dashboard/PartnerDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import UpdateHotelForm from "./pages/updateHotelForm/UpdateHotelForm";
import MultiStepForm from "./pages/multiStepForm/MultiStepForm";
import { useAuth } from "./contexts/AuthContext";
import PartnerRegisterForm from "./pages/partnerRegisterForm/PartnerRegisterForm";
import RoomForm from "./pages/roomForm/RoomForm";
import RoomComponent from "./pages/dashboard/RoomComponent";
import HotelComponent from "./pages/dashboard/HotelComponent";
import BookingComponent from "./pages/dashboard/BookingCommponent";
import Room from "./pages/dashboard/Room";
import Booking from "./pages/dashboard/Booking";
import Hotel from "./pages/dashboard/Hotel";
import HotelBystate from "./pages/HotelBystate";
import TrendComponent from "./pages/trendComponent/TrendComponent";
import SearchResults from "./pages/searchResults/SearchResults";
import Successfuly from "./pages/successfuly/Successfuly";
import UpdateRoomForm from "./pages/updateRoomForm/UpdateRoomForm";
import QuestionComponent from "./pages/dashboard/QuestionComponent";
import Question from "./pages/dashboard/Questions";
import HotelInformation from "./pages/hotelInformation/HotelInformation";
import NotVerifiedHotels from "./pages/dashboard/NotVerifiedHotels";
import VerifiedHotels from "./pages/dashboard/VerifiedHotels";
import DiscountForm from "./pages/dashboard/DiscountForm";
import PartnerDiscountForm from "./pages/dashboard/PartnerDiscountForm";
import ListOfDiscount from "./pages/dashboard/ListOfDiscount";
import CheckInFormComponent from "./pages/dashboard/CheckInFormComponent";
import CheckInFormComponentUpdate from "./pages/dashboard/CheckInFormComponentUpdate";
import CheckInListComponent from "./pages/dashboard/CheckInListComponent";
import CheckInDetailsComponent from "./pages/dashboard/CheckInDetailsComponent";
import CheckInList from "./pages/dashboard/CheckInList";
import CheckInForm from "./pages/dashboard/CheckInForm";
import CheckInFormUpdate from "./pages/dashboard/CheckInFormUpdate";
import InspectedHotelsByState from "./pages/inspectedHotelsByState/InspectedHotelsByState";
import ListOfDiscountHotels from "./pages/listOfDiscountHotels/ListOfDiscountHotels";
import InspectedHotelsForm from "./pages/dashboard/InspectedHotelsForm";
import BookingConfirmationComponent from "./pages/dashboard/BookingConfirmationComponent";
import AlreadyConfirmed from "./pages/AlreadyConfirmed";
import BookingExpired from "./pages/BookingExpired";
import ConfirmationSuccess from "./pages/ConfirmationSuccess";
import SuccessComponent from "./pages/successComponent/SuccessComponent";
import BookingConfirmation from "./pages/dashboard/BookingConfirmation";
import RevenueSummary from "./pages/dashboard/RevenueSummary";
import RevenueSummaryComponent from "./pages/dashboard/RevenueSummaryComponent";
import ShortStay from "./pages/dashboard/ShortStay";
import CheckInRecordComponent from "./pages/dashboard/CheckInRecordComponent";
import ShortStayPartner from "./pages/dashboard/ShortStayPartner";
import UpdateRoomAvailavility from "./pages/dashboard/UpdateRoomAvailavility";
// import ChatComponent from "./components/ChatComponent";
import WhatsAppIcon from "./components/WhatsAppIcon";
import SupportEngine from "./components/SupportEngine";
// import SupportAdmin from "./components/SupportAdmin";

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
      

      
      <ScrollToTopButton />
      {/* <ChatComponent /> */}
      <SupportEngine />
      <WhatsAppIcon />
    </>
  );
}

export default App;
