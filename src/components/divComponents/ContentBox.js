import React from 'react'
import './ContentBox.css';
import {Link} from'react-router-dom';

function ContentBox(props) {

    return (
        <div className="content--main--box">
            <Link className="image-link">
               <img src={`/images/${props.givenPath}`}></img>
               <div className="content--description">
                <p>{props.contentTitle}</p>
               </div>
               </Link>
               <section className="content-section">
                  {props.chapters.map((item,index) => {
                       return(
                       <Link key={index} className="chapter--link">{item}</Link>
                       )
                   })}
               </section>
        </div>
    )
}

export default ContentBox
