import fetch from 'unfetch'


const fetchContents = () => fetch('https://anouarlo.herokuapp.com/api/v1/content/all/inone');

const fetchChapterSpecific = (option) => fetch(`https://anouarlo.herokuapp.com/api/v1/content/rules/chapter_rules/${option}`)

const fetchWordInRules = (option) => fetch(`http://localhost:8080/api/v1/content/rules/search_rule/${option}`)

const fetchRuleById = (option) => fetch(`http://localhost:8080/api/v1/content/rules/get_rule/${option}`)

export {fetchContents, fetchChapterSpecific, fetchWordInRules, fetchRuleById}