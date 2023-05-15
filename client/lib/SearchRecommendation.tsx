
async function SearchRecommendation(inputText:string) {

const backend_url = process.env.backend_url
  const response = await fetch(`${backend_url}/api/search`,{
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
