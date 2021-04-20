import axios from 'axios'

const KEY = 'AIzaSyA49U04ePU9kR22-jS1hBD8Qb5L1ImqHEs'

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
})

export const fetchPopularData = async () => {
    return await youtube.get('/videos',{
        params: {
            part: 'snippet',
            maxResults: 40,
            key: KEY,
            regionCode: 'JP',
            type: 'video',
            chart: 'mostPopular'
        }
    })
}