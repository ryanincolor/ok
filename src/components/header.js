import { Link } from 'gatsby'
import logo from "../images/logo.svg" 
import PropTypes from 'prop-types'
import React from 'react'
import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <div className={styles.header}>
    <Link to="/">
    	<img src={logo} alt="Logo" />
    </Link>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
