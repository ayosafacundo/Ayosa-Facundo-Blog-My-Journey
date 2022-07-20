import React from 'react';
import './Main.css';
import Card from '../Cards/Cards.js';

function Main() {
    const portfolio = {
        balancesheet: "../Portfolio/Balance-sheet-preview.png",
        jsdoc: "../Portfolio/JS-Documentation-Preview.png",
        productlanding: "../Portfolio/Product-Landing-Page-Preview.png"
    }
    return <main><section id="about">
    <div className="center">
        <h1 className="no-margin">Hey I am Facundo Ayosa</h1>
        <p className="no-margin">A Front End Web Developer</p>
    </div>
    </section>
    <section id="projects">
        <h2 className="no-margin">These are some of my projects</h2>
        <div id="card-container">
            <Card title="Balance Sheet" origin="Part of the FreeCodeCamp Course." description="Focused on Semantic HTML & Table management, with little CSS." image={portfolio.balancesheet} badges={["css", "htmltable"]}/>
            <Card title="JS Documentation" origin="Part of the FreeCodeCamp Course." description="Focused on Semantic HTML & CSS Optimization." image={portfolio.jsdoc} badges={["css", "html"]}/>
            <Card title="Product Landing Page" origin="Part of the FreeCodeCamp Course." description="Focused on Responsiveness and Semantic HTML." image={portfolio.productlanding} badges={["css", "html"]}/>
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
export default Main;