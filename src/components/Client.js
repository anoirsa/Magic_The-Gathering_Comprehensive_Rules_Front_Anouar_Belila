import fetch from 'unfetch'


const fetchContents = () => fetch('https://anouarlo.herokuapp.com/api/v1/content/all/inone');

const fetchChapterSpecific = (option) => fetch(`https://anouarlo.herokuapp.com/api/v1/content/rules/chapter_rules/${option}`)

 
export {fetchContents, fetchChapterSpecific}