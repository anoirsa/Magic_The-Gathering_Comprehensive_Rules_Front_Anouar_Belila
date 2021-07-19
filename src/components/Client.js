import fetch from 'unfetch'


const fetchContents = () => fetch('https://anouarlo.herokuapp.com//api/v1/content/all');


export {fetchContents}