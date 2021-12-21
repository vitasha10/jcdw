import React, { Component } from 'react'
import styles from './SearchWindow.module.scss'
import { faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AudioSpectrum from 'react-audio-spectrum'

interface Props {
    onRequestClose: any,
    searchIsOpen: boolean,
}
interface State {
    inputElement: any,
    inputValue: string,
    audioElement: any,
}

export class SearchWindow extends Component<Props, State> {
    audioRef: any
    constructor(props: Props){
        super(props);
        this.state = {
            inputValue: "",
            inputElement: React.createRef(),
            audioElement: React.createRef(),
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
            this.audioRef.play();
        }
        else{this.audioRef.pause();}
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
                    <audio id="audio-element"
                     ref={(input) => {this.audioRef = input}}
                        src="/home.mp3?ddjk"
                        controls
                    >
                    </audio>
                </div>
                <AudioSpectrum
                        id="audio-canvas"
                        audioId={'audio-element'}
                        height={100}
                        capColor={'red'}
                        capHeight={0}
                        meterWidth={1}
                        meterCount={2000}
                        meterColor={[
                            {stop: 0, color: '#f0f'},
                            {stop: 0.5, color: '#eb0090'},
                            {stop: 1, color: '#eb0090'}
                        ]}
                        gap={0}
                />
            </div>
        )
    }
}

export default SearchWindow
