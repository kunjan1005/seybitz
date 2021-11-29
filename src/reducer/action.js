
const getAllSongs=()=>{
    return {
        type:'GET_ALL_SONG'
    }
}
const getSingleSong=(_id)=>{
    return {
        type:'GET_SINGLE_SONG',
        payload:_id
    }
}

export {getAllSongs,getSingleSong}