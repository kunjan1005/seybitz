import React, { useEffect, useState } from "react";
import axios from 'axios'
import Loading from "./Loading";

const Dashboard = () => {
    const [dashboard,setDashboad]=useState('')
    useEffect(async()=>{
        let {data}=await axios.get(`http://18.219.160.160:3000/song/get_dashboard/`)

        setDashboad(data) 
    },[1])
    if(dashboard==''){
        return (<Loading/>)
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card card-1">
                            <h3>Total Song</h3>
                            <h5>{dashboard.songsCount}</h5>
                        </div>
                        <span className="badge">3</span>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-2">
                            <h3>Total Artist</h3>
                            <h5>{dashboard.artistsCount}</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-3">
                            <h3>Total Alumb</h3>
                            <h5>{dashboard.albumsCount}</h5>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="card card-3">
                            <h4>Total Subscribed User</h4>
                            <h5>60</h5>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="card card-3">
                            <h3>Total User</h3>
                            <h5>60</h5>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Dashboard