import { Container } from "react-bootstrap";
import React, { useState } from "react";
import ComNavPon from './component/ComNavPon';
import Header from './component/Header';
import Category from './component/Category';
import CardContent from './component/CardContent';
import { items } from './component/Data'

let App = () => {
    const [stateData, setStateDate ] = useState(items)
    const categoryNotRepeat = ['الكل', ...new Set(items.map((e) => e.category))]
    const checkFilter = (filterCategory) => {
        if (filterCategory === 'الكل') {
            setStateDate(items)
        } else {
            const newArr = items.filter((e) => e.category === filterCategory)
            setStateDate(newArr);
        }
    }
    const checkFilterSearch = (filterSearch) => {
        if (filterSearch !== ' ') {
            const newArr = items.filter((e) => e.title === filterSearch)
            setStateDate(newArr);
        }
    }
    return (
        <div className="color-body font">
        <ComNavPon clickSearch={checkFilterSearch}/>
        <Container>
        <Header />
        <Category filtring={checkFilter} notRepeat={categoryNotRepeat}/>
        <CardContent info={stateData}/>
        </Container>
        </div>
    )
}
export default App;