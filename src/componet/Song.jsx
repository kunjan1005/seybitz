import React,{useEffect,useState} from "react";
import axios from "axios";
import CommonSong from '../common/Song'
import env from '../env'
import Loading from './Loading'

const Song=()=>{
    let [song, setSong] = useState([{
        songtitle: '',
        picture: '',
        _id: ''
    }])
    let cardImg=['card-1','card-2','card-3']
    useEffect(async () => {
        let { data } = await axios.get(`${env.URL}/song/`)
     
        setSong(data.songs.map((each) => {
            return {
                songTitle: each.songTitle,
                picture: each.picture,
                _id: each._id
            }
        }))
    }, [song.length])
    if(song.length==1){
        return <Loading/>
        
    }
    return <CommonSong song={song}/>
}

export default Song