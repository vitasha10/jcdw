import React, { Component } from 'react'
import styles from './SearchWindow.module.scss'
import { faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    onRequestClose: any,
    searchIsOpen: boolean,
}
interface State {
    inputElement: any,
    inputValue: string,
}

export class SearchWindow extends Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            inputValue: "",
            inputElement: React.createRef(),
        }
        this.onKeyUp = this.onKeyUp.bind(this);
    }
    onKeyUp(event : any) {
        if (event.charCode === 13) {
          this.setState({ inputValue: event.target.value });
        }
    }
    componentDidMount(){
        if(this.props.searchIsOpen){
            this.state.inputElement.current.focus()
        }
    }
    componentDidUpdate(){
        if(this.props.searchIsOpen){
            this.state.inputElement.current.focus()
        }
    }
    render() {
        return (
            <div className={this.props.searchIsOpen ? styles.SearchWindow : styles.noneSearchWindow}>
                <input type="text" ref={this.state.inputElement} onKeyPress={this.onKeyUp} placeholder='Ваш запрос...'/>
                <button className={styles.close_btn} onClick={this.props.onRequestClose}>
                    <FontAwesomeIcon className={styles.close_btn_icon} icon={faTimes}/>
                </button>
                <div className={styles.searchResults}>
                    <h1>Поиск конечно не работает, но вы ищите:</h1><br/>
                    <b>{this.state.inputValue}</b>
                </div>
            </div>
        )
    }
}

export default SearchWindow
