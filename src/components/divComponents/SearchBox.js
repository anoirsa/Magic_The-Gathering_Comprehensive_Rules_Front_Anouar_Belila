import React from 'react'
import Button from '../Button';
import './ContentBox.css';


function SearchBox(props) {
    return (
        <div className="content--main--box">
             <div className="image-link-search-box">
               <img src={`/images/libs.jpeg`}></img>
               <div className="search">
                <p>SEARCH BOX</p>
               </div>
               </div>
               <section className="search--section">

                   <h5>Enter a word and then find all the rules that contains it :</h5>
                   <div className="center--section">
                   <input
                     className='search-input'
                    name='text'
                    type='text'
                    placeholder='Enter the word'
                    onChange ={(e) => props.setSearchedWord(e.target.value)}
                    />
                       <Button
                      chosenStyle="btn--search" textGiven="Find" clickMe={props.showIt}
                    />
                   </div>

                   <hr />

                   <h5>Enter a specific rule number and read its description :</h5>
                   <div className="center--section">
                   <input
                     className='search-input'
                    name='text'
                    type='text'
                    placeholder='Enter the rule number'
                    onChange={(e) => props.setSearchedRule(e.target.value)}
                    />
                       <Button
                      chosenStyle="btn--search" textGiven="Find" clickMe={props.showWordContainer}
                        />
                   </div>
                  
               </section>
            
        </div>
    )
}

export default SearchBox
