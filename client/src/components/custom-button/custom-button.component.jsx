import React from 'react'

import {CustomButtonContainer} from './custom-button.styles'
// import './custom-button.styles.scss'

const CustomButton = (props) => {
    // console.log(props)
    return (
        <CustomButtonContainer {...props}>
            {props.children}
        </CustomButtonContainer>
        // <button className={`${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
        //     {children}
        // </button>
    )
}


export default CustomButton
