import axios from 'axios';
const KEY = 'AIzaSyB15L8aZ4l2cRpa4yC7jt9E2eWLr7gxlt0'

export default axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3` ,
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})