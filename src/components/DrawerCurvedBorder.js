import React from 'react';
import PropTypes from 'prop-types'
import ScalablePath from "./ScalablePath";

const DrawerCurvedBorder = ({width, height, fill = 'black', style}) => (
    <ScalablePath
        width={width}
        height={height}
        path={` M 0.0  , 0.1
                Q 0.25 , 0
                  0.5  , 0.1
                  0.75 , 0.2
                  1.0  , 0.1
                L 1.0  , 0.0
                L 0.0  , 0.0
                z
                `}
        fill={fill}
        ratio={6}
        style={style}
    />
);

const propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    fill: PropTypes.string,
    style: PropTypes.object
};

DrawerCurvedBorder.propTypes = propTypes;

export default DrawerCurvedBorder;


/**

 `M 0.0 , 0.0
 L 0.0 , 0.1
 S 0.25, 0.0
 0.5 , 0.1
 S 0.75, 0.2
 1.0 , 0.1
 L 1.0 , 0.0
 z`

 **/
