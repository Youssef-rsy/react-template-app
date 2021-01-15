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
        <div className="card  ">
          <div className="card-header d-inline-flex py-1">
            <a
              data-toggle="collapse"
              href="#collapseExample"
              aria-expanded="true"
              aria-controls="collapseExample"
              className="d-flex mx-1 w-100 card-header-collapse pt-1"
            >
              <h6 className="card-title px-2">Bar Chart</h6>
            </a>
          </div>
          <div className=" card-body collapse show" id="collapseExample">
            <VerticalBar />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card  ">
          <div className="card-header d-inline-flex py-1">
            <a
              data-toggle="collapse"
              href="#collapseExample2"
              aria-expanded="true"
              aria-controls="collapseExample2"
              className="d-flex mx-1 w-100 card-header-collapse pt-1"
            >
              <h6 className="card-title px-2">Pie Chart</h6>
            </a>
          </div>
          <div className=" card-body collapse show" id="collapseExample2">
            <Pie />
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card  ">
          <div className="card-header d-inline-flex py-1">
            <a
              data-toggle="collapse"
              href="#collapseExample3"
              aria-expanded="true"
              aria-controls="collapseExample3"
              className="d-flex mx-1 w-100 card-header-collapse pt-1"
            >
              <h6 className="card-title px-2">Doughnut Chart</h6>
            </a>
          </div>
          <div className=" card-body collapse show" id="collapseExample3">
            <DoughnutChart />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card  ">
          <div className="card-header d-inline-flex py-1">
            <a
              data-toggle="collapse"
              href="#collapseExample4"
              aria-expanded="true"
              aria-controls="collapseExample"
              className="d-flex mx-1 w-100 card-header-collapse pt-1"
            >
              <h6 className="card-title px-2">Polar Chart</h6>
            </a>
          </div>
          <div className=" card-body collapse show" id="collapseExample4">
            <PolarChart />
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card  ">
          <div className="card-header d-inline-flex py-1">
            <a
              data-toggle="collapse"
              href="#collapseExample5"
              aria-expanded="true"
              aria-controls="collapseExample"
              className="d-flex mx-1 w-100 card-header-collapse pt-1"
            >
              <h6 className="card-title px-2">GroupedBar Chart</h6>
            </a>
          </div>
          <div className=" card-body collapse show" id="collapseExample5">
            <GroupedBar />
          </div>
        </div>
      </div>
    </div>
  </div >;
};

export default DashBorad;
