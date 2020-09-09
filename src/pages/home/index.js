import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.less";
import * as actionCreators from "./store/actionCreators";
import { Carousel, Button } from "antd";
import img1 from '../../assets/photo/ED01.jpg'
import img2 from '../../assets/photo/ED02.png'
import img3 from '../../assets/photo/ED03.png'
import img4 from '../../assets/photo/ED04.png'
import img5 from '../../assets/photo/ED06.png'

function Home(props) {
  return (
    <div className="Home">
      <div className="carousel">
        <Carousel autoplay>
          <div>
            <img className="img" src={img1} />
          </div>
          <div>
            <img className="img" src={img2} />
          </div>
          <div>
            <img className="img" src={img3} />
          </div>
          <div>
            <img className="img" src={img4} />
          </div>
          <div>
            <img className="img" src={img5} />
          </div>
        </Carousel>,
      </div>
      <div>

      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  // state: state.registerReducer
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  mergeData: (data) => {
    dispatch({ type: data.type, payload: data.payload });
  },
  /*  getallData: data => {
    dispatch(actionCreators.getallData(data));
  } */
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
