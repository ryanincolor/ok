
import PropTypes from 'prop-types'
import React from 'react'
import Logo from "../images/logo.svg" 
import { Link } from 'gatsby'



const SectionHeader = ({title}) => (

  <div style={{ margin: '0 auto', paddingTop: '128px'}} >
  
        <img src={Logo}
          style={{
            margin: '0 auto',
            textAlign: 'center',
            width: '16px',
            display: 'flex',
            paddingBottom: '20px'
          }}
        />
    <h2 style={{
          textAlign: 'center',
          color: 'white',
          letterSpacing: 8,
          textTransform: 'uppercase',
          fontWeight: 400,
          fontSize: '24px',
          paddingBottom: '24px'
    }}>{title}</h2>
  </div>
)

SectionHeader.propTypes = {
  title: PropTypes.string,
}

export default SectionHeader