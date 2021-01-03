import DoughnutChart from './../../components/charts/Doughnut';
import GroupedBar from './../../components/charts/GroupedBar';
import Pie from './../../components/charts/Pie';
import PolarChart from './../../components/charts/PolarChart';
import VerticalBar from './../../components/charts/VerticalBar';
import React from 'react';

const DashBorad = (props) => {
  return <div className="container-fluid ">
    <div className="row row-cols-2 justify-content-around">
      <div className="col-md-6">
        <div class="card  ">
          <div class="card-body">
            <h6 class="card-title">Bar Chart</h6>
            <div>
              <VerticalBar />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div class="card  ">
          <div class="card-body">
            <h6 class="card-title">Pie Chart</h6>
            <div>
              <Pie />
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div class="card  ">
          <div class="card-body">
            <h6 class="card-title">Doughnut Chart</h6>
            <div>
              <DoughnutChart />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div class="card  ">
          <div class="card-body">
            <h6 class="card-title">Polar Chart</h6>
            <div>
              <PolarChart />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div class="card  ">
          <div class="card-body">
            <h6 class="card-title">GroupedBar Chart</h6>
            <div>
              <GroupedBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div >;
};

export default DashBorad;
