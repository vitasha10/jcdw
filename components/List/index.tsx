import React from 'react'
import styles from './List.module.scss'
import useSWR from 'swr'

import ListItem from '../ListItem'
const fetcher = (url : string) => fetch(url).then((res) => res.json())

type ListItemType = {
    name: string,
    picture: string,
    description: string,
}

function List(): JSX.Element {
    const { data, error } = useSWR('http://data.speak-up.space/one.json', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <div className={styles.list}>
            {data.map((item : ListItemType) => (
                <div key={item.name}>
                    <ListItem name={item.name} picture={item.picture} description={item.description}/>
                </div>
            ))}
        </div>
    )
}

export default List
