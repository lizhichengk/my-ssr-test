import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslationList } from './store/action';
import { Redirect } from 'react-router-dom';

class Translation extends Component {
  getList () {
    const { translationList } = this.props;
    return translationList.map(item => <div key={item.id}>{item.title}</div>);
  }
  render() {
    const { login } = this.props;
    return login? (
        <div className='Translation'>
          翻译列表
          { this.getList() }
        </div>
      ): <Redirect to='/' />
  }
  componentDidMount() {
    if (!this.props.translationList.length) {
      this.props.getTranslationList();
    }
  }
}



const mapStateToProps = state => ({
    login: state.header.login,
    translationList: state.translation.translationList
})

const mapDispatchToProps = dispatch => ({
  getTranslationList () {
    dispatch(getTranslationList());
  }
})
const ExportTranslation = connect(mapStateToProps, mapDispatchToProps)(Translation);
ExportTranslation.loadData = (store) => {
	return store.dispatch(getTranslationList())
}

export default ExportTranslation;