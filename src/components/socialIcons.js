// @flow

import React from 'react'
import "./style.css"

const SocialIcons = (props) => {
  const { black } = props
  return (
    <div className="flex-container">
    <img src={require(black?'../img/twitterblack.svg':'../img/twitter.svg')}/>
    <img src={require(black?'../img/fbblack.svg':'../img/fb.svg')}/>
    <img src={require(black?'../img/instablack.svg':'../img/insta.svg')}/>
    </div>
  )
}

export default SocialIcons
