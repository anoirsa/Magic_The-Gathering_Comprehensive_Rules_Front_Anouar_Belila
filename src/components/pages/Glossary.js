import React, {useState, useEffect} from 'react'
import Button from '../Button';
import { fetchAllGlossary, fetchTermByWord } from '../Client';
import Wait from '../superDivs/Wait';
import './Glossary.css';

function Glossary() {
    const [fetched, setFetched] = useState(false);
    const [termsToBeShown, setTermsToBeShown] = useState([]);
    const[termToBeSearchedFor, setTermToBeSearchedFor] = useState(""); 
    const fetchAll = () => {
        fetchAllGlossary().then(data => data.json()).then(data =>{
            setTermsToBeShown(data);
        })
    }
    const fetchCertainTerm = () => {
        fetchTermByWord(termToBeSearchedFor).then(data => {
            if (data.status == 200) {
                data.json().then(tem => {
                    setTermsToBeShown([tem]);
                })
            }
        })
    }
    useEffect(() => {
        setTimeout(() => {
            fetchAll();
            setFetched(true)            
        },3000)
    },[])
    return (
        <div className="glossary--class">
            <section className="search--box">
            <input
                className='search-input'
                name='text'
                type='text'
                placeholder='Enter the word'
                onChange ={(e) => setTermToBeSearchedFor(e.target.value)}
                    />
             <Button chosenStyle="btn--search" textGiven="Find"  clickMe = {fetchCertainTerm} />
             <Button chosenStyle="btn--search" textGiven="Find All"  clickMe = {fetchAll} />

            </section>

            <section className="display--content">
            {fetched ? 
            <table className="glossary--table" >
                <tr>
                    <th>Term</th>
                    <th>Definition</th>
                </tr>
            {termsToBeShown.map((item, index) => {
                return(
                <tr key={index} >
                    <td>{item.term}</td>
                    <td>{item.description}</td>
                </tr>
                )
            })}

        </table> : <Wait  />}

            </section>
            
        </div>
    )
}

export default Glossary
