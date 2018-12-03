import React from 'react'
import {AreaChart, Grid} from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import {Card} from 'react-native-elements'

class AreaChartExample extends React.PureComponent {

    render() {

        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, 0]

        return (
            <Card>
                <AreaChart
                    style={{height: 200}}
                    data={data}
                    contentInset={{top: 30, bottom: 30}}
                    curve={shape.curveNatural}
                    svg={{
                        fill: 'rgba(235,39,76, 0.5)',
                        stroke: 'rgba(235,39,76, 1)',
                        strokeWidth: 2
                    }}
                >
                    <Grid/>
                </AreaChart>
            </Card>
        )
    }
}

export default AreaChartExample;
