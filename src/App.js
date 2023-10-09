import './App.css';
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import BlogOne from "./components/Blog1";
import Registration from './components/Registration';
import Footer from "./components/Footer";
import View from "./components/view";
import ViewDsa from "./components/viewDsa";
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import BlogTwo from './components/Blog2';
import CoursePage from "./components/coursePage";
import Narendra from './components/placements/testimonials/placement'
import CoursePageWebDev from "./components/courses/webDev/coursePageWebDev";
// import DSA from "./components/coursePageDSA";

function App() {

  return (
    <div className="App">
      <div id="top"></div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog-placements" element={<BlogOne/>}/>
        <Route path={"/blog-college"} element={<BlogTwo/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/efkocefo/efvee/re" element={<View/>}/>
        <Route path="/efkvdfvdso/dgrvee/re/dsa" element={<ViewDsa/>}/>
        <Route path="/coursePage/java" element={<CoursePage/>}/>
        <Route path="/coursePage/webdev" element={<CoursePageWebDev/>}/>
        <Route path="/Narendra" element={<Narendra/>}/>
        {/* <Route path="/coursePage/dsa" element={<DSA/>}/> */}
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/termsofuse" element={<TermsOfUse/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
