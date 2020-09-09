import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.less";
import * as actionCreators from "./store/actionCreators";
import { Carousel, Icon } from "antd";
import img1 from '../../assets/photo/ED01.jpg'
import img2 from '../../assets/photo/ED02.png'
import img3 from '../../assets/photo/ED03.png'
import img4 from '../../assets/photo/ED04.png'
import img5 from '../../assets/photo/ED06.png'
const img = [img1, img2, img3, img4, img5];
const colors = ['#2db7f5', '#87d068', '#f50', '#108ee9', 'orange', '#364d79', '#4bff04', '#dd1717'];
const randomcol = () => colors[parseInt(Math.random() * colors.length)]
const randomimg = () => img[parseInt(Math.random() * (img.length - 1))]

const list = [
  {
    title: '白茶知识',
    path: '',
  },
  {
    title: '白茶知识',
    path: '',
  },
  {
    title: '白茶知识',
    path: '',
  },
  {
    title: '白茶知识',
    path: '',
  },
  {
    title: '白茶知识',
    path: '',
  },
  {
    title: '白茶知识',
    path: '',
  },
]
function Home(props) {
  const onClick = (path) => {
  }
  const showCard = (list) => {
    let retlist = [];
    for (let item of list) {
      retlist.push(
        <div className="card" onClick={() => onClick(item.path)}>
          <div className="card_img">
            <img className="card_img_cell" src={randomimg()} />
          </div>
          <div className="card_text" style={{ backgroundColor: randomcol() }}>
            <div className="title">{item.title}</div>
            {item.text ? <div className="text">{item.text}</div> : null}
            <div className="icon"><Icon style={{fontSize:24}} type="right-circle" /></div>
          </div>
        </div>
      )
    }
    return retlist;
  }
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
        {showCard(list)}
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
