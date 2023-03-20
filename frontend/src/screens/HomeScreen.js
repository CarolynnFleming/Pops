import React from 'react'

export default function HomeScreen() {
  return (
    <div 
    className='row center'>
        <div className='home-card'>
        <img className="home-popcorn"src="./public/popcorn.gif" alt="popcorn"/>
        {/* <p>It all starts with the best popcorn seeds<br/> <p className='second'>We serve Popcorn and Italian Ice</p></p> */}
      
            
        {/* </div> */}
        <div className='line'></div>
        <p className='first'>It all starts with the best popcorn seeds<br/> <p className='second'>We serve Popcorn and Italian Ice<br/> <br/><a className="button-85"href="/signIn">Sign In</a></p></p>
        {/* <a className="home-signin" href="/signIn">Sign In</a> */}
        </div>
    </div>
  )
}
