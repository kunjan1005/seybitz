import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import env from "../env";
import Loading from "./Loading";

const Genre = () => {
    let [loading,setLoading]=useState(true)
    let [gener, setGener] = useState([{
        generName: "",
        totalTrack: "",
        _id: ""
    }])
    useEffect(async () => {
        setTimeout(() => setLoading(false), 1000)
        let { data } = await axios.get(`${env.URL}/gener`)
        let { geners } = data
        setGener((prev) => {
            return [...geners]
        })
      
    
    }, [gener.length])
    if(loading){
        return <Loading/>
    }
    return (
        <>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card card-1">
                            <h6>Total Genre</h6>
                            <h5>{gener.length}</h5>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {gener.map((each) => {
                        return <div class="song-card col-md-10 offset-md-1 mt-2 card-1">

                            <div className="row card-container ">
                                <div className='col-md-8'>
                                    <h5>{each.generName}</h5>
                                    <p>Total tracks:-{each.totalTrack}</p>

                                    <NavLink to={`/genre/edit?gener=${each._id}`} className='link edit_link'><Edit /></NavLink>
                                    <NavLink to={`/genre/delete?gener=${each._id}`} className='link delete_link'><Delete /></NavLink>

                                </div>
                            </div>
                        </div>
                    })}


                </div>


            </div>

        </>
    )

}

export default Genre