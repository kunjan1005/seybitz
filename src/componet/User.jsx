import React from "react";
import { NavLink } from "react-router-dom";

const User=()=>{
    return(
        <>
               <div class="container mt-4">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card card-1">
                            <h6>Total User</h6>
                            <h5>60</h5>
                        </div>
                    </div>
                </div>
                <div className='row'>
                <div class="song-card col-md-10 offset-md-1 mt-2 card-1">
                   
                  <div className="row card-container ">
                      
                   <div className='col-md-2'><img src="https://tse2.explicit.bing.net/th?id=OIP.uX2SdI94vtVF4bLqt6aLQgHaFj&pid=Api&P=0&w=217&h=80" alt="" /></div>
                   <div className='col-md-1'></div>
                   <div className='col-md-8'>
                       <h4 className='user_name'>User name  <span className="verfied">v</span></h4> 
                       <span className=''><b>Tickets: 2</b></span>&nbsp;
                       <span><b>Songs: 2</b></span>
                       <br />
                      
                 </div>
                
                   
                 
                  </div>
                  
                 </div>
                </div>
                    
            </div>

        </>
    )

}

export default User