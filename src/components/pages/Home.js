import React ,{useState, useEffect} from'react'
import Button from '../Button'
import { fetchContents } from '../Client'
import { paths } from '../Data'
import ContentBox from '../divComponents/ContentBox'
import ContentContainer from '../divComponents/ContentContainer'
import ChapterContainer from '../divComponents/ChapterContainer'
import DesContainerF from '../divComponents/DesContainerF'
import SearchBox from '../divComponents/SearchBox'
import WordContainerF from '../divComponents/WordContainerF'
import Footer from '../Footer'
import "./Home.css"


function Home() {
    // container related variables
    const [contents, setContents] = useState([])
    const [desContainer, setDesContainer] = useState(false)
    const[wordContainer, setWordContainer] = useState(false);
    const[contentContainer, setContentContainer] = useState(false);
    const[chapterContainer, setChapterContainer] = useState(false);
    //////
    const setContainer = () => setDesContainer(!desContainer);
    const showOrCloseWordContainer = () => setWordContainer(!wordContainer);
    const showOrCloseContentContainer = () => setContentContainer(!contentContainer);
    const showOrCloseChapterContainer = () => setChapterContainer(!chapterContainer);
   

    const[searchedWord, setSearchedWord] = useState("");
    const[searchedRule, setSearchedRule] = useState("");
    const[chosenContent, setChosenContent] = useState({});
    const[chosenChapter,setChosenChapter] = useState({});
    //
    const[currentIndexChapter, setCurrentIndexChapter] = useState();
    const[currentIndexContent, setCurrentIndexContent] = useState();
    // For chapter Change
    const nextChapter = () => {
        if ((currentIndexChapter + 1) != (chosenContent.chapters.length)) {
            setChosenChapter(chosenContent.chapters[currentIndexChapter + 1]);
            setCurrentIndexChapter(currentIndexChapter + 1);
        }
    }

    const lastChapter = () => {
        if (currentIndexChapter > 0 ) {
            setChosenChapter(chosenContent.chapters[currentIndexChapter -1 ]);
            setCurrentIndexChapter(currentIndexChapter - 1);
        }
    }
    // For content change
    const nextContent = () => {
        console.log("current indexed is" + currentIndexContent);
        if (currentIndexContent + 1 != (contents.length)) {
            setChosenContent(contents[currentIndexContent + 1])
            setCurrentIndexContent(currentIndexContent + 1);
        }
    }
    
    const previousContent = () => {
        if (currentIndexContent != 0) {
            setChosenContent(contents[currentIndexContent -1])
            setCurrentIndexContent(currentIndexContent -1);
        }

    }
    //
    const closeAndOpenCHC = () => {
        setChapterContainer(false);
        showOrCloseContentContainer();
    }
    
    const closeAndOpenCCH= (option,op) => {
        setCurrentIndexChapter(op)
        setChosenChapter(option);
        setContentContainer(false);
        showOrCloseChapterContainer();
     } 

 
    useEffect(() => {
        fetchContents().then(data => data.json()).then(data => {
            setContents(data)
        }).catch(error => {
            console.log("Could not fetch ERROR TYPE " + error)
        })
    },[])
    console.log("searched word is :" + searchedWord)
    return (
        <div className="home--class">
            <WordContainerF wordContainer={wordContainer} closeIt={setWordContainer} searchedWord={searchedWord}/>
            <DesContainerF desContainer={desContainer} closeIt={setDesContainer}/>
            <ContentContainer contentContainer={contentContainer} closeIt={setContentContainer} displayedContent = {chosenContent} closeAndOpenCCH={closeAndOpenCCH} nextContent={nextContent} previousContent={previousContent}/>
            <ChapterContainer chapterContainer={chapterContainer} closeIt={setChapterContainer} dsplayedChapter = {chosenChapter} nextChapter={nextChapter} lastChapter={lastChapter} toContent={closeAndOpenCHC}/>
            <div className="background--container">
                    <h2>OUR LIBRARY IS OPEN</h2>
                    <p>Want to read the gathering comprehsive rules ?</p>
                    <section className="button--section">
                        <Button chosenStyle="btn--outline" textGiven="SEE CONTENTS" isIconThere={true} icon="fas fa-eye" chosenSize="btn--large"/>
                    </section>

            </div>
            <div className="content--container">
            <h3>Table of content</h3>
            <section className="contents--cards">
                {contents.map((item, index) => {
                     const showOrClose = () => {
                        setChosenContent(item);
                        setCurrentIndexContent(index);
                        showOrCloseContentContainer();
                      };
                      const settingIndexd = () => setCurrentIndexContent(index);
                   return(
                        <ContentBox 
                        key={index}
                        itemG={item}
                        givenPath = {paths[index].imgPath} 
                        showOrClose={showOrClose} 
                        setChosenChapter = {setChosenChapter}
                        showOrCloseChapter = {showOrCloseChapterContainer}
                        setCurrentIndexChapter={setCurrentIndexChapter}
                        setChosenContent = {setChosenContent}
                        settingIndexd={settingIndexd}
                        />
                    )
                })}
              <SearchBox showIt={setContainer} 
                         showWordContainer={showOrCloseWordContainer}
                         setSearchedWord ={setSearchedWord} 
                         setSearchedRule={setSearchedRule}/>  
            </section>
            </div>
            {/**<Footer /> */}
        </div>
    )
}

export default Home
