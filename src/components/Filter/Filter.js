import React from 'react';
import classes from './Filter.module.css'

const Filter = (props) => {
  return(
    <div className={classes.Filter}>
      <div>Фильтр</div>
      <div className={classes.FilterSelect}>
        <div>ALC:&nbsp;</div>
        <select id="filter" onChange={event => {props.onFilterALCHandler(event)}}>
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
export default Filter
