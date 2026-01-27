import React from "react";

const FragmentIcon: React.FC<any> = () => {
    return (
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="88" height="88" rx="8" fill="#66d9ef" stroke="#000" stroke-width="4"></rect>
            <rect x="3" y="3" width="88" height="88" rx="8" fill="#66d9ef" stroke="#000" stroke-width="4"></rect>
            <path d="M35 40 L20 50 L35 60" stroke="#000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M65 40 L80 50 L65 60" stroke="#000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
            <line x1="55" y1="35" x2="45" y2="65" stroke="#000" stroke-width="5" stroke-linecap="round"></line>
        </svg>
    );
};

export default FragmentIcon;