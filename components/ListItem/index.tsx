import React, { Component } from 'react'
import styles from './ListItem.module.scss'
interface Props {
    data: {
        name: string,
        picture: string,
        description: string,
    }
}
interface State {
    
}

export class ListItem extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className={styles.listItem}>
                <h3>{this.props.data.name}</h3>
                <img
                    src={this.props.data.picture}
                    alt="Picture of the code"
                />
                <h4>{this.props.data.description}</h4>
            </div>
        )
    }
}

export default ListItem
