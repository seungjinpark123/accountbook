import React, { useState, useRef } from 'react';
import Barchart from './chart/bar-chart';
import Linechart from './chart/line-chart';
import Piechart from './chart/pie-chart';

const ReportChart = () => {
  return (
    <>
      <div className="horizental">
        <div>
          <div>전월 대비 수입/지출</div>
          <Barchart />
        </div>
        <div>
          <div>항목별 지출</div>
          <Piechart />
        </div>
        <div>
          <div>년간 수입/지출</div>
          <Linechart />
        </div>
      </div>
    </>
  );
};

export default ReportChart;
