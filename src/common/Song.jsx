import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';


const Song = (props) => {
    let {song}=props

    return (
        <>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card card-1">
                            <h6>Total Song</h6>
                            <h5>{song.length}</h5>
                        </div>
                    </div>
                </div>
                <div className='row'>
                 {
                     song.map(each=>{
                         return( 
                          <div class={`song-card col-md-10 offset-md-1 mt-2 card-1`}>
                               <div className="row card-container ">
                                 <div className='col-md-2'><img src={each.picture} alt="" style={{width:"6rem",height:'5rem'}} /></div>
                                 <div className='col-md-1'></div>
                                 <div className='col-md-8'>
                                 <h4>{each.songTitle}</h4>
                                  <NavLink to={`/song/edit?songID=${each._id}`} className='link edit_link'><Edit/></NavLink>
                                  <NavLink to={`/song/delete?songID=${each._id}`} className='link delete_link'><Delete/></NavLink>
                               </div>
                         </div>
                     </div>)
                     })
                 }
                   
                </div>

            </div>

        </>
    )

}

export default Song