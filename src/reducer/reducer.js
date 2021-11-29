import action from "./action"
import axios from "axios"
// import env  from '../env'
const initialState = []

const getAllSong = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_SONG':
            axios.get(`/song/`).then((result) => {
                let { data } = result;
                let { songs } = data;
                return [...state, ...songs]
            })

            break;
        case 'GET_SINGLE_SONG':

            break;

        default:
            return state
    }
}
export default getAllSong