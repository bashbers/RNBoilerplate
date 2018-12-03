import React from 'react';
import PropTypes from 'prop-types';
import Svg, {Path} from "react-native-svg";
import {View} from "react-native";

const ScalablePath = ({width, height, path, ratio, fill = 'black', style}) => {
    const scaled = {};
    const calcWidth = () => height * ratio;
    const calcHeight = () => width / ratio;

    if (!width && !height) width = 100;
    if (!width) width = calcWidth();
    if (!height) height = calcHeight();

    scaled.width = calcWidth();
    scaled.height = calcHeight();

    if (scaled.width > width) {
        scaled.width = width;
        scaled.height = calcHeight();
    }
    if (scaled.height > height) {
        scaled.height = height;
        scaled.width = calcWidth();
    }

    return (
        <View style={[{
            width: width,
            height: height
        }, style]}>
            <Svg
                style={{
                    marginTop: (height - scaled.height) / 2,
                    marginLeft: (width - scaled.width) / 2
                }}
                width={scaled.width}
                height={scaled.height}>
                <Path
                    scale={scaled.width}
                    d={path}
                    fill={fill}
                />
            </Svg>
        </View>
    );
};

ScalablePath.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    path: PropTypes.string.isRequired,
    ratio: PropTypes.number.isRequired,
    fill: PropTypes.string,
    style: PropTypes.object
};

export default ScalablePath;
