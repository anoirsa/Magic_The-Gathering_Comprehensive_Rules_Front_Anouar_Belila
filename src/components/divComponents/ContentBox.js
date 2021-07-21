import React from 'react'
import './ContentBox.css';
import {Link} from'react-router-dom';

function ContentBox(props) {

    return (
        <div className="content--main--box">
            <div className="image-link"
                 onClick = {() => props.showOrClose()}  >
               <img src={`/images/${props.givenPath}`}></img>
               <div className="content--description">
                <p>{props.itemG.fullTitle.toUpperCase()}</p>
               </div>
               </div>
               <section className="content-section">
                  {props.itemG.chapters.map((item,index) => {
                      const handleClick = () => {
                          props.setChosenContent(props.itemG);
                          props.setCurrentIndexChapter(index);
                          props.setChosenChapter(item)
                          props.showOrCloseChapter();
                      }
                      // Try code to be implemented
                      
                      // To be reviwed later
                       return(
                       <a key={index}
                        className="chapter--link"
                        onClick={() => handleClick()}
                        >{item.fullTitle}</a>
                       )
                   })}
               </section>
        </div>
    )
}

export default ContentBox
