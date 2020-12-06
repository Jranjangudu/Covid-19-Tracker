import React from "react";
import CountUp from "react-countup";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
function Carts(props) {
  let { confirmed, deaths, recovered, lastUpdate } = props.Data; // All country data comes here !
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="row ">
        <div className="card-deck">
          <div className="card col-sm-4 shadow-lg mb-5 bg-white rounded">
            <div className="card-body text-center ">
              <h5 className="alert alert-light mb-0">
                <strong>confirmed case</strong>
              </h5>
              <h5>
                <CountUp // countup syntax / code here
                  start={0}
                  end={confirmed}
                  duration={2.75}
                  separator=","
                />
              </h5>
              <small>
                <em>{new Date(lastUpdate).toDateString()}</em>
              </small>
              <br />
              <small>
                <b>Number of confirmed cases of Covid-19</b>
              </small>
            </div>
            <p
              className="bg-success "
              style={{ height: "10px", width: "100%" }}
            ></p>
          </div>

          <div className="card col-sm-4  shadow-lg  mb-5 bg-white rounded">
            <div className="card-body text-center">
              <h5 className="alert alert-light mb-0">
                <strong>recovered case</strong>
              </h5>
              <h5>
                <CountUp
                  start={0}
                  end={recovered}
                  duration={2.75}
                  separator=","
                />
              </h5>
              <small>
                <em>{new Date(lastUpdate).toDateString()}</em>
              </small>
              <br />
              <small>
                <b>Number of recovered cases of Covid-19 </b>
              </small>
            </div>
            <p
              className="bg-info"
              style={{ height: "10px", width: "100%" }}
            ></p>
          </div>

          <div className="card col-sm-4  shadow-lg  mb-5 bg-white rounded">
            <div className="card-body text-center">
              <h5 className="alert alert-light mb-0">
                <strong>death case</strong>
              </h5>
              <h5>
                <CountUp start={0} end={deaths} duration={2.75} separator="," />
              </h5>
              <small>
                <em>{new Date(lastUpdate).toDateString()}</em>
              </small>
              <br />
              <small>
                <b>Number of deaths cases of Covid-19 </b>
              </small>
            </div>
            <p
              className="bg-danger"
              style={{ height: "10px", width: "100%" }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts;
