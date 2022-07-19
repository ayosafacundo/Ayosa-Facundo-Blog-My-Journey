import React from "react";
import './Main.css'

function Main() {
    const svgobj = {
        htmlfill: "../Icons/AkarIconsHtmlFill.svg",
        cssfill: "../Icons/AkarIconsCssFill.svg",
        HtmlTable: "../Icons/html-table.svg"
    }
    const portfolio = {
        balancesheet: "../Portfolio/Balance-sheet-preview.png",
        jsdoc: "../Portfolio/JS-Documentation-Preview.png",
        productlanding: "../Portfolio/Product-Landing-Page-Preview.png"
    }
    class Main extends React.Component {
        render() {
          return  <main><section id="about">
          <div className="center">
              <h1 className="no-margin">Hey I am Facundo Ayosa</h1>
              <p className="no-margin">A Front End Web Developer</p>
          </div>
          </section>
          <section id="projects">
                    <h2 className="no-margin">These are some of my projects</h2>
                    <div id="card-container">    
                        <a href="#" id="card">
                            <div className="badges invert">
                                <img src={svgobj.htmlfill} alt="HTML5 badge"/>
                                <img src={svgobj.HtmlTable} alt="HTML5 Table badge"/>
                            </div>
                            <img src={portfolio.balancesheet} alt=""/>
                            <div className="content">
                                <h3 className="project-title no-margin">Balance Sheet</h3>
                                <p className="no-margin">Part of the FreeCodeCamp Course.</p>
                                <p className="no-margin">Focused on Semantic HTML & Table management, with little CSS.</p>
                            </div>
                        </a>
                        <a href="#" id="card">
                            <div className="badges invert">
                            <img src={svgobj.htmlfill} alt="HTML5 badge"/>
                            <img src={svgobj.cssfill} alt="CSS badge"/>
                        </div>
                        <img src={portfolio.jsdoc} alt=""/>
                        <div className="content">
                            <h3 className="project-title no-margin">JS Documentation</h3>
                                <p class="no-margin">Part of the FreeCodeCamp Course. Focused on Semantic HTML and CSS Optimization.</p>
                            </div>
                        </a>
                        <a href="#" id="card">
                            <div className="badges invert">
                                <img src={svgobj.htmlfill} alt="HTML5 badge"/>
                                <img src={svgobj.cssfill} alt="CSS badge"/>
                            </div>
                            <img src={portfolio.productlanding} alt=""/>
                            <div className="content">
                                <h3 className="project-title no-margin">Product Landing Page</h3>
                                <p className="no-margin">Part of the FreeCodeCamp Course. Focused on Responsiveness and Semantic HTML.</p>
                            </div>
                        </a>
                    </div>
                </section>
                <section id="contact">
                    <h1 className="no-margin">Let's work together</h1>
                    <p className="no-margin">Care for a coffee?</p>
                    <div className="contact-info">
                        <a className="contact-card" href="https://www.linkedin.com/in/ayosafacundo/" target="_blank">
                            <img className="invert" src="/Icons/AkarIconsLinkedinBoxFill.svg" alt="LinkedIn icon"/>
                            LinkedIn
                        </a>
                        <a className="contact-card" href="https://github.com/Facundo-Ayosa" target="_blank">
                            <img className="invert" src="/Icons/AkarIconsGithubFill.svg" alt="Github icon"/>
                            Github
                        </a>
                        <a className="contact-card">
                            <img className="invert" src="../Icons/AkarIconsEnvelope.svg" alt="Email icon"/>
                            Email
                        </a>
                        <a className="contact-card">
                            <img className="invert" src="/Icons/AkarIconsPerson.svg" alt="Contact icon"/>
                            Phone
                        </a>
                    </div>
                </section>
          </main>
        }
      }
    return <Main/>
}
export default Main;