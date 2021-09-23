import React from 'react'
import classes from './Menu.module.css'

class Menu extends React.Component {
    constructor(props){
        super(props)    

        this.cls = [
            classes.Menu,
            'fa'
        ]
    }

    classesHandler = () => {
        if (this.props.isOpen){
            this.cls.push('fa-times')
            this.cls = this.cls.filter(element => element !== 'fa-bars')
        } else {
            this.cls.push('fa-bars')
            this.cls = this.cls.filter(element => element !== 'fa-times')
        }
        return this.cls.join(' ')
    }
    render() {
        return(
            <i 
                className={this.classesHandler()}
                onClick={this.props.onToggle}
            ></i>
        )
    }
}

export default Menu