import React, { Component } from 'react'
import style from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
interface Props {
    
}
interface State {
    
}

export class Header extends Component<Props, State> {
    state = {}

    render() {
        return (
            <header className={style.header}>
                <div className={style.logo}>
                    <h1>JSDW</h1>
                    <h2>Just click, don&apos;t write!</h2>
                </div>
                <FontAwesomeIcon className={style.search} icon={faSearch} />
            </header>
        )
    }
}

export default Header
