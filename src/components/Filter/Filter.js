import React from 'react';
import classes from './Filter.module.css'

export default class Filter extends React.Component {
  render() {
    return(
      <div className={classes.Filter}>
        <div>Фильтр</div>
        <div style={{
                      display: 'flex',
                      flexDirection: 'row'}}>
          <div>ALC:&nbsp;</div>
          <select id="filter" onChange={this.props.onFilterALCHandler}>
            <option value=""></option>
            <option value="4">4-5</option>
            <option value="5">5-6</option>
            <option value="6">6-7</option>
            <option value="7">7-8</option>
            <option value="8">8-9</option>
          </select>
        </div>
      </div>
    )
  }
}
