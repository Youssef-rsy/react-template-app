import DoughnutChart from '@components/charts/Doughnut';
import GroupedBar from '@components/charts/GroupedBar';
import Pie from '@components//charts/Pie';
import PolarChart from '@components/charts/PolarChart';
import VerticalBar from '@components/charts/VerticalBar';
import { Card, Row, Col } from 'antd';
import React from 'react';

const DashBorad = (props) => {
  return <div className="container-fluid ">
    <Row gutter={[16, 24]}>
      <Col span={12}>
        <Card title="VerticalBar Chart" className="gutter-row"  >
          <VerticalBar />
        </Card></Col>
      <Col span={12}  >
        <Card title="BPiear Chart" className="gutter-row"  >
          <Pie />
        </Card>
      </Col>
      <Col span={12}>
        <Card title="PolarChart Chart" className="gutter-row"  >
          <PolarChart />
        </Card>
      </Col>
      <Col flex="auto"  >
        <Card title="DoughnutChart Chart" className="gutter-row"  >
          <DoughnutChart />
        </Card>
      </Col>
      <Col flex="auto"  >
        <Card title="GroupedBar Chart" className="gutter-row" loading={false} >
          <GroupedBar />
        </Card>
      </Col>
    </Row>
  </div >;
};

export default DashBorad;
