
import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./Lesson/NewComponent";
import {TopCars} from "./Lesson/TopCars";
/*import {Header} from './site/Header';
import { Body } from './site/Body';
import { Footer } from './site/Footer';
import { NewBody } from './site/NewBody';
import { AgainHeader } from './site/AgainHeader';
import { ParaTruper } from './site/ParaTruper';
import { FinishFooter } from './site/FinishFooter';

function App() {
    return (
        <>
            <Header title={'Mad cars'}/>
            <AgainHeader title={'Gerasimenko cars'}/>
            <Body title={'Crazzy cars'}/>
            <NewBody title={'Frantic cars'}/>
            <ParaTruper title={'Mega puper cars'}/>
            <Footer title={'Desperate cars'}/>
            <FinishFooter title={'Stop cars'}/>

        </>
    );
}
export default App;*/

function App() {

    /*const [students, setStudents] = useState([
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
]);

    return (
        <NewComponent students={students}/>
    );*/

    const topCars = [
        {id:1,manufacturer:'BMW', model:'m5cs'},
        {id:2,manufacturer:'Mercedes', model:'e63s'},
        {id:3,manufacturer:'Audi', model:'rs6'}
    ]


    return (
        <TopCars  topCars={topCars}/>
    )
}
export default App;
