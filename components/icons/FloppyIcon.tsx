import React from "react"

const FloppyIcon: React.FC<any> = () => {
    return (
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="88" height="88" rx="8" fill="#a8e6cf" stroke="#000" stroke-width="4"></rect>
            <rect x="3" y="3" width="88" height="88" rx="8" fill="#a8e6cf" stroke="#000" stroke-width="4"></rect>
            <rect x="20" y="20" width="60" height="60" rx="3" fill="#ffd93d" stroke="#000" stroke-width="4"></rect>
            <rect x="30" y="20" width="40" height="20" fill="#66d9ef" stroke="#000" stroke-width="3"></rect>
            <rect x="35" y="55" width="30" height="15" rx="2" fill="#000"></rect>
            <circle cx="50" cy="35" r="3" fill="#000"></circle>
        </svg>
    )
}

export default FloppyIcon