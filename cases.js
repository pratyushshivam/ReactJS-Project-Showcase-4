import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";
// import Home2 from "../Home2";
import './cases.css'

const caseStudies = [
  {
    id: 1,
    subtitle: "MOTION NEXTJS WEBSITE",
    title: "Canvas added motion self website for projects",
    img: "selected1",
    url:"https://drekko.web.app/"
  },
  {
    
    
    id: 2,
    subtitle: "HULU STREAM TV SHOWS MOVIES",
    title: "An online movies and web series streaming website clones",
    img: "selected2",
    url:"https://github.com/pratyushshivam/Hulu"
  },
  {
    id: 3,
    subtitle: "CODEZI - IDE",
    title: "Integrated Development Environment for Windows",
    img: "selected3",
    url:"https://github.com/pratyushshivam/Codezi-IDE"
  },
  {
    id: 4,
    subtitle: "Dijkstras Algorithm Visualizer",
    title: "An algorithm to find the shortest path",
    img: "selected4",
    url:"https://github.com/pratyushshivam/Dijkstra-s-Algorithm-Visualizer"
  },

];

const Cases = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div className='row accessclass'>
          {caseStudies.map(caseItem => (
            <a href={caseItem.url} >
            <div className='case' key={caseItem.id}>
              <div className='case-details'>
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className='case-image'>
                <img
                  src={require(`../assets/${caseItem.img}.png`)}
                  alt={caseItem.title}
                />
              </div>
            </div>
            </a>
            
         
          ))}
        </div>
        
      </div>

    </section>
  );
};

export default Cases;
