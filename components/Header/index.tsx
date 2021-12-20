import React, { Component } from 'react'
import style from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import SearchWindow from '../SearchWindow';
interface Props {
    
}
interface State {
    searchIsOpen: boolean
}

export class Header extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    
        this.state = {
          searchIsOpen: false
        };
    
        this.openSearch = this.openSearch.bind(this);
        this.closeSearch = this.closeSearch.bind(this);
    }
    openSearch(){
        this.setState({searchIsOpen: true});
    }
    closeSearch(){
        this.setState({searchIsOpen: false});
    }
    render() {
        return (
            <header className={style.header}>
                <div className={style.logo}>
                    <h1>JСDW</h1>
                    <h2>Just click, don&apos;t write!</h2>
                </div>
                <FontAwesomeIcon className={style.search} icon={faSearch} onClick={this.openSearch}/>
                <FontAwesomeIcon className={style.bars} icon={faBars} />
                <SearchWindow searchIsOpen={this.state.searchIsOpen} onRequestClose={this.closeSearch} />
            </header>
        )
    }
}

export default Header
