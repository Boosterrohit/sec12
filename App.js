import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Navbar/Header";
import About from "./component/About";
import Services from "./component/services/Services";
import LetTalk from "./component/letstalk/LetTalk";
import WorkProgress from "./component/WorkProgress";
import Latest from "./component/allinone/Latest";
import Choose from "./component/allinone/Choose";
import Collection from "./component/allinone/Collection";
import Awesome from "./component/allinone/Awesome";
import Awesome2 from "./component/allinone/Awesome2";
import News from "./component/allinone/News";
import Search from "./component/Search";
import FindUs from "./component/allinone/FindUs";
import Footer from "./footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Services />
      <LetTalk />
      <WorkProgress />
      <Latest />
      <Choose />
      <Collection />
      <Awesome />
      <Awesome2 />
      <News />
      <Search />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
