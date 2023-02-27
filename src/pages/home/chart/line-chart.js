import React, { useState, useRef } from 'react';
import { ResponsiveLine } from '@nivo/line';

const Linechart = () => {
  return (
    <>
      <div style={{ width: '500px', height: '500px', margin: '30px auto' }}>
        <ResponsiveLine
          data={[
            {
              id: 'japan',
              color: 'hsl(135, 70%, 50%)',
              data: [
                {
                  x: 'plane',
                  y: 151,
                },
                {
                  x: 'helicopter',
                  y: 106,
                },
                {
                  x: 'boat',
                  y: 44,
                },
                {
                  x: 'train',
                  y: 264,
                },
                {
                  x: 'subway',
                  y: 275,
                },
                {
                  x: 'bus',
                  y: 34,
                },
                {
                  x: 'car',
                  y: 211,
                },
                {
                  x: 'moto',
                  y: 288,
                },
                {
                  x: 'bicycle',
                  y: 86,
                },
                {
                  x: 'others',
                  y: 181,
                },
              ],
            },
            {
              id: 'france',
              color: 'hsl(18, 70%, 50%)',
              data: [
                {
                  x: 'plane',
                  y: 208,
                },
                {
                  x: 'helicopter',
                  y: 45,
                },
                {
                  x: 'boat',
                  y: 142,
                },
                {
                  x: 'train',
                  y: 233,
                },
                {
                  x: 'subway',
                  y: 129,
                },
                {
                  x: 'bus',
                  y: 80,
                },
                {
                  x: 'car',
                  y: 142,
                },
                {
                  x: 'moto',
                  y: 258,
                },
                {
                  x: 'bicycle',
                  y: 201,
                },
                {
                  x: 'others',
                  y: 97,
                },
              ],
            },
            {
              id: 'us',
              color: 'hsl(347, 70%, 50%)',
              data: [
                {
                  x: 'plane',
                  y: 296,
                },
                {
                  x: 'helicopter',
                  y: 4,
                },
                {
                  x: 'boat',
                  y: 247,
                },
                {
                  x: 'train',
                  y: 292,
                },
                {
                  x: 'subway',
                  y: 202,
                },
                {
                  x: 'bus',
                  y: 291,
                },
                {
                  x: 'car',
                  y: 285,
                },
                {
                  x: 'moto',
                  y: 233,
                },
                {
                  x: 'bicycle',
                  y: 207,
                },
                {
                  x: 'others',
                  y: 218,
                },
              ],
            },
            {
              id: 'germany',
              color: 'hsl(79, 70%, 50%)',
              data: [
                {
                  x: 'plane',
                  y: 44,
                },
                {
                  x: 'helicopter',
                  y: 44,
                },
                {
                  x: 'boat',
                  y: 187,
                },
                {
                  x: 'train',
                  y: 106,
                },
                {
                  x: 'subway',
                  y: 79,
                },
                {
                  x: 'bus',
                  y: 259,
                },
                {
                  x: 'car',
                  y: 85,
                },
                {
                  x: 'moto',
                  y: 292,
                },
                {
                  x: 'bicycle',
                  y: 286,
                },
                {
                  x: 'others',
                  y: 263,
                },
              ],
            },
            {
              id: 'norway',
              color: 'hsl(31, 70%, 50%)',
              data: [
                {
                  x: 'plane',
                  y: 5,
                },
                {
                  x: 'helicopter',
                  y: 130,
                },
                {
                  x: 'boat',
                  y: 50,
                },
                {
                  x: 'train',
                  y: 119,
                },
                {
                  x: 'subwa',
                  y: 173,
                },
                {
                  x: 'bus',
                  y: 227,
                },
                {
                  x: 'car',
                  y: 187,
                },
                {
                  x: 'moto',
                  y: 269,
                },
                {
                  x: 'bicycle',
                  y: 115,
                },
                {
                  x: 'others',
                  y: 267,
                },
              ],
            },
          ]}
          margin={{
            top: 50,
            right: 110,
            bottom: 50,
            left: 60,
          }}
          xScale={{
            type: 'point',
          }}
          yScale={{
            type: 'linear',
            stacked: true,
            min: 'auto',
            max: 'auto',
          }}
          minY="auto"
          maxY="auto"
          stacked={true}
          curve="cardinal"
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'center',
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'center',
          }}
          dotSize={10}
          dotColor="inherit:darker(0.3)"
          dotBorderWidth={2}
          dotBorderColor="#ffffff"
          enableDotLabel={true}
          dotLabel="y"
          dotLabelYOffset={-12}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
};

export default Linechart;
