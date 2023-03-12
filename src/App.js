import "./App.css";
import Home from "./Home";
import styled from "styled-components";
import Contact from "./Contact";
import StudentsProfits from "./StudentsProfits";
import About from "./About";
import DrawerAppBar from "./DrawerAppBar";
import CourseDetails from "./CourseDetails";
const AppStyle = styled.div`
  // position: relative;
`;

function App() {
  return (
    <div>
      <DrawerAppBar />
      <Home />
      <About/>
      <CourseDetails />
      <Contact />
      <StudentsProfits />
    </div>
  );
}

export default App;
