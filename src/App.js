
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './components/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import SavingAccount from './components/pages/SavingAccount';
import Premiumsavingsacco from './components/pages/Premiumsavingsacco';
import Currentaccount from './components/pages/Currentaccount';
import Plan from './components/pages/Plan';
import Branch from './components/pages/Branch';
import Branches from './components/pages/Branches';
import GalleryPage from './components/pages/GalleryPage';
import CustomerServiceCenter from './components/pages/CustomerServiceCenter';
import Loan from './components/pages/Loan';
import Media from './components/pages/Media';
// import AnnualReport from './components/pages/AnnualReport';
import FAQ from './components/pages/FAQ';
import Contact from './components/pages/Contact';
import AboutUs from './components/pages/AboutUs';
import Login from './components/Login';
import Chairman from './components/pages/Chairman';
import ExecutiveDirector from './components/pages/ExecutiveDirector';
import AnnualReport from './components/pages/AnnualReport';
import ManagingDirector from './components/pages/ManagingDirector';
import Calculator from './components/pages/Calculator';
import MahilaSavingsAccount from './components/pages/MahilaSavingsAccount';
import LoanCalculator from './components/pages/LoanCalculator';


import AdminDashboard from './components/Admin/AdminDashboard';
import AdminRigister from './components/Admin/AdminRigister';
import AdminGallery from './components/Admin/AdminGallery';
import AdminMedia from './components/Admin/AdminMedia';
import MarqueeDisplay from './components/Admin/MarqueeDisplay';
import AdminMarquee from './components/Admin/AdminMarquee';

// Layout wrapper component
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  
  // Routes where navbar and footer should be hidden
  const hideLayoutRoutes = ['/login', '/admin-dashboard', '/admin-register', '/admin-gallery', '/admin-media', '/admin-marquee'];
  const shouldHideLayout = hideLayoutRoutes.some(route => location.pathname.startsWith(route));
  
  return (
    <>
      {!shouldHideLayout && <Navbar />}
      {children}
      {!shouldHideLayout && <Footer />}
    </>
  );
};

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <LanguageProvider>
            <LayoutWrapper>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:lang' element={<Home />} />
                <Route path='/savings-account' element={<SavingAccount />} /> 
                <Route path='/savings-account/:lang' element={<SavingAccount />} />
                <Route path='/premium-savings-account' element={<Premiumsavingsacco />} />
                <Route path='/premium-savings-account/:lang' element={<Premiumsavingsacco />} />
                <Route path='/current-account' element={<Currentaccount />} />
                <Route path='/current-account/:lang' element={<Currentaccount />} />
                <Route path='/mahila-savings-account' element={<MahilaSavingsAccount />} />
                <Route path='/mahila-savings-account/:lang' element={<MahilaSavingsAccount />} />

                <Route path='/plan' element={<Plan />} />
                <Route path='/plan/:lang' element={<Plan />} />
                <Route path='/plan-pension' element={<Plan />} />
                <Route path='/plan-pension/:lang' element={<Plan />} />
                <Route path='/plan-recurring' element={<Plan />} />
                <Route path='/plan-recurring/:lang' element={<Plan />} />
                <Route path='/plan-half-price' element={<Plan />} />
                <Route path='/plan-half-price/:lang' element={<Plan />} />
                <Route path='/plan-subhmangal' element={<Plan />} />
                <Route path='/plan-subhmangal/:lang' element={<Plan />} />
                <Route path='/plan-billionaire' element={<Plan />} />
                <Route path='/plan-billionaire/:lang' element={<Plan />} />
                <Route path='/plan-personal' element={<Plan />} />
                <Route path='/plan-personal/:lang' element={<Plan />} />
                <Route path='/plan-emi-gold' element={<Plan />} />
                <Route path='/plan-emi-gold/:lang' element={<Plan />} />
                <Route path='/plan-regular-gold' element={<Plan />} />
                <Route path='/plan-regular-gold/:lang' element={<Plan />} />
                <Route path='/plan-easy-gold' element={<Plan />} />
                <Route path='/plan-easy-gold/:lang' element={<Plan />} />
                <Route path='/plan-gold-overdraft' element={<Plan />} />
                <Route path='/plan-gold-overdraft/:lang' element={<Plan />} />
                <Route path='/plan-bullet-gold' element={<Plan />} />
                <Route path='/plan-bullet-gold/:lang' element={<Plan />} />
                <Route path='/plan-doorstep-gold' element={<Plan />} />
                <Route path='/plan-doorstep-gold/:lang' element={<Plan />} />
                <Route path='/branch' element={<Branch />} />
                <Route path='/branch/:lang' element={<Branch />} />
                <Route path='/branches' element={<Branches />} />
                <Route path='/branches/:lang' element={<Branches />} /> 
                <Route path='/gallery' element={<GalleryPage />} />
                <Route path='/gallery/:lang' element={<GalleryPage />} />
                <Route path='/customer-service' element={<CustomerServiceCenter />} />
                <Route path='/customer-service/:lang' element={<CustomerServiceCenter />} />
                <Route path='/loan' element={<Loan />} />     
                <Route path='/loan/:lang' element={<Loan />} />
                <Route path='/media' element={<Media />} />
                <Route path='/media/:lang' element={<Media />} />
                {/* <Route path='/annual-report' element={<AnnualReport />} /> */}
                <Route path='/faq' element={<FAQ />} />
                <Route path='/faq/:lang' element={<FAQ />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/contact/:lang' element={<Contact />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/about/:lang' element={<AboutUs />} />
                <Route path='/login' element={<Login />} />
                <Route path='/chairman' element={<Chairman />} />
                <Route path='/chairman/:lang' element={<Chairman />} />
                <Route path='/executive-director' element={<ExecutiveDirector />} />
                <Route path='/executive-director/:lang' element={<ExecutiveDirector />} />
                <Route path='/annual-report' element={<AnnualReport />} />
                <Route path='/annual-report/:lang' element={<AnnualReport />} />
                <Route path='/managing-director' element={<ManagingDirector />} />
                <Route path='/managing-director/:lang' element={<ManagingDirector />} />
                <Route path='/calculator' element={<Calculator />} />
                <Route path='/calculator/:lang' element={<Calculator />} />
                <Route path='/loan-calculator' element={<LoanCalculator />} />
                <Route path='/loan-calculator/:lang' element={<LoanCalculator />} />

                <Route path='/admin-dashboard' element={<AdminDashboard />} />
                <Route path='/admin-register' element={<AdminRigister />} />
                <Route path='/admin-gallery' element={<AdminGallery />} />
                <Route path='/admin-media' element={<AdminMedia />} />
                <Route path='/marquee' element={<MarqueeDisplay />} />
                <Route path='/admin-marquee' element={<AdminMarquee />} />
                
              </Routes>
            </LayoutWrapper>
          </LanguageProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
