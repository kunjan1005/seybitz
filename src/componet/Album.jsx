import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import env from "../env";
import Loading from "./Loading";
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';

const Alumb = () => {
    let [loading,setLoading]=useState(true)
    let [alumb, setAlumb] = useState([])
    useEffect(async()=>{
        setTimeout(() => setLoading(false), 1000)
        let {data}=await axios.get(`${env.URL}/album`)
        let {albums}=data
        setAlumb(()=>{
            return [...albums]
        })

    })
    if(loading){
        return <Loading/>
    }
    return (
        <>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card card-1">
                            <h6>Total Alumb</h6>
                            <h5>{alumb.length}</h5>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {alumb.map((each)=>{
                        return  <div class="song-card col-md-10 offset-md-1 mt-2 card-1">

                        <div className="row card-container ">

                            <div className='col-md-2'><img src={each.picture} alt="" style={{width:'5rem',height:'6rem'}}/></div>
                            <div className='col-md-1'></div>
                            <div className='col-md-8'>
                                <h4>{each.albumTitle}</h4>
                                <p style={{ fontSize: '13px' }}><span><b>Total Tracks</b>: {each.totalTracks}</span>&nbsp;<span><b>Price</b>: ${each.albumPrice}</span></p>
                                   <NavLink to={`/alumb/edit?alumbId=${each._id}`} className='link edit_link'><Edit/></NavLink>
                                  <NavLink to={`/alumb/delete?alumbId=${each._id}`} className='link delete_link'><Delete/></NavLink>
                            </div>


                        </div>
                    </div>
                    })}
                   
                </div>

            </div>

        </>
    )

}

export default Alumb