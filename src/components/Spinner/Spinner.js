import React from 'react'

import './Spinner.scss'

export default function Spinner() {
    return (
        <svg className="Spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <circle className="Path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
    )
}