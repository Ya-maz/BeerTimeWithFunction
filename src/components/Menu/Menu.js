import React from 'react'
import classes from './Menu.css'

class Menu extends React.Component {
    constructor(props){
        super(props)    
        this.cls = [
            classes.Menu,
            'fa'
        ]

    }

    // здесь нужно что-то поправить
    // // componentWillMount() {
    //     if (this.props.isOpen) {
    //         this.cls.push('fa-times')
    //         this.cls.push(classes.open)
    //     } else {
    //         this.cls.push('fa-bars')
    //     }
    // }
    classesHandler = () => {
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