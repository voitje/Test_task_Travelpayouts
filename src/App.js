import React, {Component} from 'react';
import  SearchBar from './components/SearchBar'
import UserList from './components/UserList'
import './App.css'
const data = require('./data/data');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firms: data.bonuses,
      curFirms: data.bonuses,
      searchValue: ''
    };
  }
  updateData(config) {
    this.setState(config);
  }
  render() {
    return (
        <div>
          <div className='slideBar'>
            <div className='t'>T</div>
          </div>
          <div className='footer'>
            <div>
              <div className='balanceText'>Баланс</div>
              <div className='balance'>213 920 ₽</div>
            </div>
            <div>
              <div className='payoffText'>К выплате</div>
              <div className='payoff'>159 465 ₽</div>
            </div>
          </div>
          <div className='content'>
            <div className='service'>Сервисы</div>
            <div className='filter'>ФИЛЬТР</div>
            <SearchBar
                searchValue={this.state.searchValue}
                data={this.state.firms}
                update={this.updateData.bind(this)}
              />
            <button
                className='reset'
                onClick={() => {
                  this.setState({
                        curFirms: data.bonuses,
                        firms: data.bonuses,
                        searchValue: ''})}}>
              Сбросить
            </button>
              <UserList data={this.state.curFirms} update={this.updateData.bind(this)}/>
          </div>
        </div>
    );
  };
}

export default App;