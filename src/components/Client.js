import fetch from 'unfetch'


const fetchContents = () => fetch('https://anouarlo.herokuapp.com/api/v1/content/all/inone');

const fetchChapterSpecific = (option) => fetch(`https://anouarlo.herokuapp.com/api/v1/content/rules/chapter_rules/${option}`)

const fetchWordInRules = (option) => fetch(`https://anouarlo.herokuapp.com/api/v1/content/rules/search_rule/${option}`)

const fetchRuleById = (option) => fetch(`https://anouarlo.herokuapp.com/api/v1/content/rules/get_rule/${option}`)

const fetchAllGlossary = () => fetch('https://anouarlo.herokuapp.com/api/v1/content/glossary/all_glossary');

const fetchTermByWord = (option) => fetch(`https://anouarlo.herokuapp.com/api/v1/content/glossary/find_glossary/${option}`)

export {fetchContents, fetchChapterSpecific, fetchWordInRules, fetchRuleById, fetchAllGlossary, fetchTermByWord}