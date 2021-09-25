import React from 'react';
import classes from './Filter.module.css'

export default class Filter extends React.Component {
  render() {
    return(
      <div className={classes.Filter}>
        <div>Подсказка: крепость алкоголя варируется от 3,5 до 9,5</div>
        <input type={'text'} />
        <button>Применить</button>
      </div>
    )
  }
}
