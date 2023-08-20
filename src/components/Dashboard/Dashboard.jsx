import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {

    const studentScores = [
        {
          id: 1,
          name: "John",
          phy: 85,
          chem: 70,
          math: 90,
          bio: 78
        },
        {
          id: 2,
          name: "Emma",
          phy: 92,
          chem: 88,
          math: 75,
          bio: 95
        },
        {
          id: 3,
          name: "Michael",
          phy: 78,
          chem: 82,
          math: 88,
          bio: 68
        },
        {
          id: 4,
          name: "Sophia",
          phy: 95,
          chem: 72,
          math: 85,
          bio: 90
        },
        {
          id: 5,
          name: "William",
          phy: 88,
          chem: 78,
          math: 92,
          bio: 83
        },
        {
          id: 6,
          name: "Olivia",
          phy: 70,
          chem: 85,
          math: 95,
          bio: 74
        },
        {
          id: 7,
          name: "James",
          phy: 83,
          chem: 90,
          math: 72,
          bio: 68
        },
        {
          id: 8,
          name: "Ava",
          phy: 92,
          chem: 67,
          math: 80,
          bio: 88
        },
        {
          id: 9,
          name: "Ethan",
          phy: 78,
          chem: 80,
          math: 91,
          bio: 76
        },
        {
          id: 10,
          name: "Isabella",
          phy: 87,
          chem: 95,
          math: 84,
          bio: 91
        },
        {
          id: 11,
          name: "Liam",
          phy: 75,
          chem: 81,
          math: 78,
          bio: 83
        },
        {
          id: 12,
          name: "Mia",
          phy: 89,
          chem: 92,
          math: 77,
          bio: 85
        }
      ];

    return (
        <div className='mt-5 md:w-100'>
            <LineChart 
            width={1000}
            height={300}
            data={studentScores}
            >
              <Line dataKey="phy"></Line>
              <Line stroke="#8884d8"  dataKey="chem"></Line>
              <Line dataKey="math"></Line>
              <Line dataKey="bio"></Line>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
        </div>
    );
};

export default Dashboard;