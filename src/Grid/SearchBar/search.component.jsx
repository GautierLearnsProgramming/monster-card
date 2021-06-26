import React from 'react';
import { Input } from 'antd';
import styles from './search.module.scss'

export default function SearchBar({onSearch}){
    return(
            <Input className={styles.searchContainer}
                   onChange = {onSearch}
            />
    )
}