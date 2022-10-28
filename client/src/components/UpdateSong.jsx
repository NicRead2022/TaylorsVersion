//create functional componente Updatesong 
//axios get request to get songby id
//console.log(res.data)

const updateSong = () => {
  const [songs, setSongs] = useState([])
  const getSongs = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/song')
      console.log(response)
      setSongs(response.data)
    } catch (err) {
      console.log(err)
    }
  }