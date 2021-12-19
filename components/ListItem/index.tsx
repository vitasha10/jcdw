import React, { Component } from 'react'
import styles from './ListItem.module.scss'
interface Props {
    name: string,
    picture: string,
    description: string,
}
interface State {
    
}

export class ListItem extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className={styles.listItem}>
                <h3>{this.props.name}</h3>
                <img
                    src={this.props.picture}
                    alt="Picture of the code"
                />
                <h4>{this.props.description}</h4>
            </div>
        )
    }
}

export default ListItem
