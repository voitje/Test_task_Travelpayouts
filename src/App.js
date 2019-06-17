import React, {Component} from 'react';
import  SearchBar from './components/SearchBar'
import UserList from './components/UserList'
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
          <SearchBar
              searchValue={this.state.searchValue}
              data={this.state.firms}
              update={this.updateData.bind(this)}
            />
            <UserList data={this.state.curFirms} update={this.updateData.bind(this)}/>
        </div>
    );
  }
}

export default App;