import React from 'react';
import {Row, Image, Col} from 'antd'
import styles from './monster-card.module.scss'

function MonsterCard({name, email, id}){
    return(
        <div className={styles.card}>
            <Row justify={'center'}>
                <Image src = {`https://robohash.org/${name}?set=set2`} preview = {false}/>
            </Row >
            <Row justify={'center'}>
                <Col className = {styles.name}>
                    {name}
                </Col>
            </Row>
            <Row justify={'center'}>
                <Col className={styles.email}>
                    {email}
                </Col>
            </Row>
        </div>
    )
}

export default MonsterCard