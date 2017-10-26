import React from 'react'
import Home from './Home/Home.js';
import About from './About/About.js';
import HowItWorks from './HowItWorks.js';
import Contact from './Contact.js';
//import {browserHistory} from 'react-router'
import  {CSSTransitionGroup}  from 'react-transition-group';
import './AminationExample.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'


const routes = [
  { path: '/Home',
    component: Home
  },
  { path: '/About',
    component: About
  },
  { path: '/HowItWorks',
    component: HowItWorks
  },
  {
    path: '/Contact',
    component: Contact
  }
]

const AnimationExample = () => (
  <Router>
    <Route render={({ location }) => (
      <div style={styles.fill}>
        <Route exact path="/" render={() => (
          <Redirect to="/Home"/>
        )}/>

        <ul style={styles.nav}>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/HowItWorks">How It Works</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </ul>

        <div style={styles.content}>

            {/* no different than other usage of
                CSSTransitionGroup, just make
                sure to pass `location` to `Route`
                so it can match the old location
                as it animates out
            */}
            {routes.map((route, index) => (
          // You can render a <Route> in as many places
          // as you want in your app. It will render along
          // with any other <Route>s that also match the URL.
          // So, a sidebar or breadcrumbs or anything else
          // that requires you to render multiple things
          // in multiple places at the same URL is nothing
          // more than multiple <Route>s.
          <Route
            key={index}
            location={location}
            path={route.path}
            component={route.component}
          />
        ))}

        </div>
      </div>
    )}/>
  </Router>
)

const NavLink = (props) => (
  <li style={styles.navItem}>
    <Link {...props} style={{ color: 'inherit' }}/>
  </li>
)

const HSL = ({ match: { params } }) => (
  <div style={{
    ...styles.fill,
    ...styles.hsl,
    background: `hsl(${params.h}%)`
  }}>hsl({params.h}%)</div>
)

const styles = {}

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}

styles.content = {
  ...styles.fill,
  top: '40px',
  textAlign: 'center'
}

styles.nav = {
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: 0,
  height: '40px',
  width: '100%',
  display: 'flex'
}

styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  paddingTop: '10px',
  paddingBottom: '0px',
  fontSize: '35px',
  fontFamily: 'Creepster'
}

styles.hsl  = {
  ...styles.fill,
  color: 'white',
  paddingTop: '20px',
  fontSize: '40px'
}

export default AnimationExample
