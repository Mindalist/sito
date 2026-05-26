import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MindalistHome from "./components/home/mindalist-home.component";
import MindalistNavbar from "./components/navbar/mindalist-navbar.component";
import MindalistContacts from "./components/contacts/mindalist-contacts.component";
import MindalistServices from "./components/services/mindalist-services.component";
import MindalistAbout from "./components/about/mindalist-about.component";
import { MindalistFooter } from "./components/footer/mindalist-footer.component";
import SmoothScrollWrapper from "./components/smooth-scroll/SmoothScrollWrapper";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import NotFoundPage from "./components/notfound/notfound.page";
import TermsOfService from "./components/terms/termini-mindalist.page";
import VideomakingDetailPage from "./components/services/detail/videomaking-detail.page";
import PostProductionDetailPage from "./components/services/detail/post-production-detail.page";
import { ConsentPopup } from "./components/consent/consent-popup.component";

function App() {
  return (
    <>
      <BrowserRouter>
        <ConsentPopup />
        <ScrollToTop />
        <SmoothScrollWrapper>
          <MindalistNavbar />
          <div className="app-layout">
            <main className="app-main">
              <Routes>
                <Route path="/" element={<MindalistHome />} />
                <Route path="/servizi" element={<MindalistServices />} />
                <Route
                  path="/servizi/videomaking"
                  element={<VideomakingDetailPage />}
                />
                <Route
                  path="/servizi/post-produzione"
                  element={<PostProductionDetailPage />}
                />
                <Route path="/contatti" element={<MindalistContacts />} />
                <Route path="/chi-sono" element={<MindalistAbout />} />
                <Route
                  path="/termini-di-servizio"
                  element={<TermsOfService />}
                />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <MindalistFooter />
          </div>
        </SmoothScrollWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
