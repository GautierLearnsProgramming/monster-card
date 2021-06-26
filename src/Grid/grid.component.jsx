import React, { useState } from 'react';
import styles from './grid.module.scss';
import { Row, Col, Image } from 'antd';
import MonsterCard from "../MonsterCard/monster-card.component";
import SearchBar from "./SearchBar/search.component";

function Grid() {



    let arr = [
        {name: 'Janneth'},
        {name: 'Louis'},
        {name: 'Josiah'},
        {name: 'Charlie'},
        {name: 'Eddie'},
        {name: 'Lukas'},
        {name: 'Robin'},
        {name: 'Nora'},
        {name: 'Cory'},
        {name: 'Sonny'},
        {name: 'Owen'},
        {name: 'Edgar'},
        {name: 'Mallory'},
        {name: 'Derek'},
        {name: 'Vernon'},
        {name: 'Bridget'},
        {name: 'Kayla'},
        {name: 'Sabrina'},
        {name: 'Jesse'},
        {name: 'Dexter'},
        {name: 'Zea'},
        {name: 'Ollie'},
    ]
    arr = arr.map((el) => {
        return {name: el.name,
            email: `${el.name.toLowerCase()}@rolodex.com`}
    })

    let [dispArr, setDispArr] = useState(arr)


    const search = (event) => {
        console.log(event)
        setDispArr(arr.filter((el) => el.name.toLowerCase().includes(event.target.value.toLowerCase())))
    }



    return(
        <div>
            <Row justify="center">
                <SearchBar
                    onSearch = {search}
                />
            </Row>
            <Row gutter={[24, 24]} align="top" justify = "center">
                {dispArr.map((el) =>
                        <Col >
                            <MonsterCard
                                email = {el.email}
                                name = {el.name}
                            />
                        </Col>
                    )
                }
            </Row>
        </div>
    )
}

export default Grid;