import React from "react";
import './Card.css'



function Card(props) {
    const svgobj = {
        html: "../Icons/AkarIconsHtmlFill.svg",
        css: "../Icons/AkarIconsCssFill.svg",
        htmltable: "../Icons/html-table.svg"
    }
    let badgelist = props.badges.map((src) => {
        return <img src={svgobj[src]}/>
    });
    class Card extends React.Component {
        render() {
            return <a href="#" id="card">
                <div className="badges invert">{badgelist}</div>
                <img src={props.image} alt=""/>
                <div className="content">
                    <h3 className="project-title no-margin">{props.title}</h3>
                    <p className="origin no-margin">{props.origin}</p>
                    <p className="no-margin">{props.description}</p>
                </div>
            </a>
        }
    }
    return <Card/>
}

export default Card;