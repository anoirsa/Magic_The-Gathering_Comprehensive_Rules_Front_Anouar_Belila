import React ,{useState, useEffect} from'react'
import Button from '../Button'
import { fetchContents } from '../Client'
import { paths } from '../Data'
import ContentBox from '../divComponents/ContentBox'
import "./Home.css"
function Home() {
    const [contents, setContents] = useState([])

    useEffect(() => {
        fetchContents().then(data => data.json()).then(data => {
            console.log(data);
            setContents(data)
        }).catch(error => {
            console.log("Could not fetch ERROR TYPE " + error)
        })
    },[])
    return (
        <div className="home--class">
            <div className="background--container">
                    <h2>OUR LIBRARY IS OPEN</h2>
                    <p>Want to read the gathering comprehsive rules ?</p>
                    <section className="button--section">
                        <Button chosenStyle="btn--outline" textGiven="SEE CONTENTS" isIconThere={true} icon="fas fa-eye"/>
                    </section>

            </div>
            <div className="content--container">
            <h3>Table of content</h3>
            <section className="contents--cards">
                {contents.map((item, index) => {
                    const title = item.contentNumber + "."+item.contentTitle;
                    return(
                        <ContentBox contentTitle={title} chapters={item.chapterTitles} givenPath = {paths[index].imgPath}/>
                    )
                } )}
            </section>
            </div>
        </div>
    )
}

export default Home
