// Search.js
import React, { useState } from 'react';
import colorsData from '../colors.json';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredColors = colorsData.filter(color =>
        color.color.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search color..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="color-list">
                {filteredColors.map((color, index) => (
                    <div key={index} className="color-card" style={{ backgroundColor: color.value }}>
                        <p>{color.color}</p>
                        <p>{color.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
