import React from 'react'
import './ContentBox.css';
import {Link} from'react-router-dom';

function ContentBox(props) {

    return (
        <div className="content--main--box">
            <div className="image-link">
               <img src={`/images/${props.givenPath}`}></img>
               <div className="content--description">
                <p>{props.contentTitle.toUpperCase()}</p>
               </div>
               </div>
               <section className="content-section">
                  {props.chapters.map((item,index) => {
                       return(
                       <a key={index} className="chapter--link">{item}</a>
                       )
                   })}
               </section>
        </div>
    )
}

export default ContentBox
