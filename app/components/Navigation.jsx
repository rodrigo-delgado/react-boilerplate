const React = require('react')
const {Link, IndexLink} = require('react-router')
const Timer = require('Timer')
const Countdown = require('Countdown')

const Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Timer
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="https://rodrigo-delgado-cv.herokuapp.com/" target="_blank">Rodrigo Delgado</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

module.exports = Navigation
