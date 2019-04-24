import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import NavigationBar from './components/navBar'
import Map from './components/map'
import Scroll from './components/scroll'
import ReactPageScroller from "react-page-scroller";
import SecondScroll from "./containers/2ndScroll"
import ThirdScroll from "./containers/3rdScroll"

const goToPage = (pageNumber) => {
  this.reactPageScroller.goToPage(pageNumber);
}


class App extends Component {
  render() {
    return (
      <div>
        <ReactPageScroller ref={c => this.reactPageScroller = c}>
          <NavigationBar image={true} />
          <SecondScroll />
          <ThirdScroll />
        </ReactPageScroller>
        <div className="fixedscroll" onClick={()=>goToPage(2)}>
          <Scroll />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({

})

const mapStateToProps = state => ({

})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
