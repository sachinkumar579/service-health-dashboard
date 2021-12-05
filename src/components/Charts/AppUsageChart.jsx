import React from 'react'
import { LineChart } from 'recharts';
import { XAxis } from 'recharts';
import { CartesianGrid } from 'recharts';
import { Line } from 'recharts';
import { YAxis } from 'recharts';
import "./AppUsageChart.css"

const AppUsageChart =(props)=> {
    
    return  <div className="app-usage-chart"><LineChart
    width={600} height={400} data={props.service.usage}
    margin={{ top: 40, right: 40, bottom: 20, left: 20 }}
  >
    <CartesianGrid vertical={false} />
    <XAxis dataKey="date"  />
    <YAxis domain={['auto', 'auto']} />
    <Line dataKey="price" stroke="#ff7300" dot={false} />
   
  </LineChart>
  
  <label style={{justifyContent:"center"}}>{props.service.name} (Total number of requests/ day) </label>
  </div>
}

export default AppUsageChart;
