import React from "react"
import PropTypes from "prop-types"

class Navbar extends React.Component {
  render () {
    return(
    	<div>
    		<ul>
    			<li>Home</li>
    			<li>My Profile</li>
    			<li>Create a Post</li>
    		</ul>
    	</div>
    )
  }
}

export default Navbar
