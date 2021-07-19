import fetch from 'unfetch'


const fetchContents = () => fetch('api/v1/content/all');


export {fetchContents}