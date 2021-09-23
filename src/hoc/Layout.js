 import React from 'react'
import classes from './Layout.module.css'
import Menu from './../components/Menu/Menu'

class Layout extends React.Component {
    state = {
        menu: false,
    }

    onToggleHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render () {
        return (
            <div className={classes.Layout}>
                 <Menu 
                    onToggle={this.props.onToggle}
                    isOpen={this.props.isOpen}
                    
                />
                <main onClick={this.props.onToggle}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout