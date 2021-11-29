import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios'
import Loading from '../componet/Loading'
import env from '../env'

const Artist = () => {
    let [loading, setLoading] = useState(true)
    let [artist, setArtist] = useState([])
    useEffect(async () => {
        setTimeout(() => setLoading(false), 1000)
        let { data } = await axios.get(`${env.URL}/artist`)
        let { artists } = data
        setArtist(() => {
            return [...artists]
        })

    })
    if (loading) {
        return <Loading />
    }
    return (
        <>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card card-1">
                            <h6>Total Artist</h6>
                            <h5>{artist.length}</h5>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {artist.map((each) => {
                        return <div class="song-card col-md-10 offset-md-1 mt-2 card-1">

                            <div className="row card-container ">

                                <div className='col-md-2'><img src={each.picture} alt="" style={{ width: '5rem', height: '6rem' }} /></div>
                                <div className='col-md-1'></div>
                                <div className='col-md-8'>
                                    <h4>{each.artistName}</h4>
                                    <span><b>tracks:{each.totalTracks}</b></span>&nbsp;
                                    <span><b>albums:{each.totalAlbums}</b></span>
                                    <br />

                                    <NavLink to='/alumb/edit'>Edit</NavLink>
                                    <NavLink to='/alumb/delete'>Delete</NavLink>
                                    <NavLink to='/alumb/new'>new</NavLink>

                                </div>

                            </div>
                        </div>
                    })}

                </div>

            </div>

        </>
    )

}

export default Artist