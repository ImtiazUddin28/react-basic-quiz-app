import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Statistics = () => {
    const topicsData = useLoaderData();
    const data= topicsData.data;

      
    return (
        <AreaChart
            width={1200}
            height={400}
            data={data}
            margin={{
                top: 100,
                right: 150,
                left: 150,
                bottom: 0
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    );
};

export default Statistics;