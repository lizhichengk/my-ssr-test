import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyle from '../../withStyle';
import { getHomeList } from './store/action';
import Style from './Style.css';
class Home extends Component {
  getNewsList () {
    const { newsList } = this.props;
    return newsList.map(item => <div key={item.id}>{item.title}</div>);
  }
  componentDidMount() {
    if (!this.props.newsList.length) {
      this.props.getHomeList();
    }
  }
  render() {
    return (
      <div className={Style.home}>
        <div> Home  嘿嘿嘿!!!</div>
        <div>{this.props.name} </div>
        { this.getNewsList() }
        {/* <button onClick={() => {alert(1)}}>点我</button> */}
      </div>
    )
  }
}



const mapStateToProps = state => ({
  name: state.home.name,
  newsList: state.home.newsList,
})

const mapDispatchToProps = dispatch => ({
  getHomeList () {
    dispatch(getHomeList());
  }
})
const ExportHome = connect(mapStateToProps, mapDispatchToProps)(withStyle(Home, Style))
ExportHome.loadData = (store) => {
  return store.dispatch(getHomeList());
}

export default ExportHome;