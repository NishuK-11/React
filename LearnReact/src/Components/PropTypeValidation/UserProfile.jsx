
import PropTypes from "prop-types";

import React from "react";

const UserProfile = ({username,age,isActive}) => {
    return (
        <div>
            <h2>Username: {username}</h2>
            <h2>Age: {age}</h2>
            <h2>IsActive: {isActive?'Active':'Inactive'}</h2>
        </div>
    )
}

UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired
}

export default UserProfile;