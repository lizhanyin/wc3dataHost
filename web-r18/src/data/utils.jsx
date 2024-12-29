import React from 'react';

function ColorGroup(arr, color) {
    const ColorComponent = key => <span style={{color}} key={key}>{arr}</span>;
    ColorComponent.displayName = 'ColorComponent';
    return ColorComponent;
}

const TitleContext = React.createContext(null);

export {ColorGroup, TitleContext}