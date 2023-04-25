
async function SearchRecommendation(inputText:string) {
  const response = await fetch('http://127.0.0.1:8080/api/search',{
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({
      "inputText": inputText
    }),
    headers: {
      "Content-Type": "application/json",
    },


  })
  return  response.json()
}

export default SearchRecommendation
