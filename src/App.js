import Navbar from "./components/Navbar";
import "./App.css";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectList from "./components/ProjectsArray"
import Contact from "./components/Contact";
function App() {
  let NavBtn = ["ABOUT", "SKILLS","PROJECTS", "CONTACT"];
  let scrollArr={
    "ABOUT":"section2",
    "SKILLS":"section3",
    "PROJECTS":"section4",
    "CONTACT":"section5"
  }
  function scrollToSection(e) {
    let sectionToScroll=e.target.innerText;
    let scroll=scrollArr[sectionToScroll]
    let section = document.getElementById(scroll); // Replace "section2" with the ID of the target section
    const navbarHeight = 44; // Replace 44 with the actual height of your navbar in pixels

    const sectionTopOffset = section.getBoundingClientRect().top;
    const scrollPosition = sectionTopOffset + window.pageYOffset - navbarHeight;
  
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  }
  
  return (
    
    <div classNameName="App">
      <Navbar
        btnText={NavBtn.map((btn) => {
          return (
            <a className="topbtns">
              <li className="btns"> <button className="navbarbtn" onClick={scrollToSection}>{btn}</button></li>
            </a>
          );
        })}
        
      ></Navbar>
      <Intro></Intro>
      <About></About>
      <Skills></Skills>
      <Projects list={ProjectList}></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
