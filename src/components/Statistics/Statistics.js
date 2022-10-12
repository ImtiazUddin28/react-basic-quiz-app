import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const topicsData = useLoaderData();
    const data= topicsData.data;

      
    return (
        <div className="chart">
            <div className="chart_container">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={1200}
                    height={400}
                    data={data}
                    margin={{
                        top: 50,
                        right: 50,
                        left: 50,
                        bottom: 0
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;