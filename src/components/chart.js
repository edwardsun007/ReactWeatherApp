import React from 'react';

import {Sparklines,SparklinesLine,SparklinesSpots} from "react-sparklines"; // 3rd API for charts

/* creating chart as function based RE-USABLE component because it doesn't need access to state of other components */
export default (props) => {  // weather_list will pass temps, pressures, humid etc as data to props
    return (
        <div>
            <Sparklines data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesSpots />
            </Sparklines>
        </div>
    );
}