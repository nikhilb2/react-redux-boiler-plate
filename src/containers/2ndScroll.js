// @flow

import React from 'react'
import "./style.css"

import Map from '../components/map'
import Address from '../components/address'
import SocialIcons from '../components/socialIcons'

const SecondScroll = () => {
  return (
    <div class="containerHeight">
      <div class="row">
        <div class="col-md-auto">
          <Map />
        </div>
        <div class="col">
          <Address />
          <SocialIcons black={true} />
        </div>
      </div>
    </div>
  )
}

export default SecondScroll
