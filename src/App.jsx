
import Navbar from "./components/navbar/Navbar";
import ScrollToTopButton from "./components/scrollToTopButton/ScrollToTopButton";

import WhatsAppIcon from "./components/WhatsAppIcon";
import SupportEngine from "./components/SupportEngine";
// import SupportAdmin from "./components/SupportAdmin";

function App() {
  
  return (
    <>
      
      <Navbar />

      <ScrollToTopButton />
      {/* <ChatComponent /> */}
      <SupportEngine />
      <WhatsAppIcon />
    </>
  );
}

export default App;
