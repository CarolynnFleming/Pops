import React from 'react'

export default function HomeScreen() {
  return (
    <div 
    className='row center'>
        <div className='home-card'>
        <img className="home-popcorn"src="./public/popcorn.gif" alt="popcorn"/>
       
        <div className='line'></div>
        <span className='first'>It all starts with the best popcorn seeds<br/> <span className='second'>We serve Popcorn and Italian Ice<br/> <br/><a className="button-85"href="/signIn">Sign In</a></span></span>
       
        </div>
    </div>
  )
}
