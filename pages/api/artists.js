const ACCESS_TOKEN = `Bearer ${process.env.STRAPI_API_KEY}`
const API_BASE = `http://localhost:1337`

export const getArtists = async () => {
  var myHeaders = new Headers()
  myHeaders.append('Authorization', ACCESS_TOKEN)

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  }

  return fetch(`${API_BASE}/api/artists?populate[0]=players`, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log('error', error))
}
