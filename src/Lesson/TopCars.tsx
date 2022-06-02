import React from "react";

type TopCarsType = {
    topCars: topCars[]
}
type topCars = {
    id: number,
    manufacturer: string,
    model: string
}
export const TopCars = (props: TopCarsType) => {
    return (
        <table>
            <caption>Top cars</caption>
            <thead>
            <tr>
                <th>id</th>
                <th>manufacturer</th>
                <th>model</th>
            </tr>
            </thead>
            {props.topCars.map((objectFromTopCarsArray, index) => {
                return (
                    <tbody key={index+1}>
                    <tr>
                        <td>{objectFromTopCarsArray.id}</td>
                        <td>{objectFromTopCarsArray.manufacturer}</td>
                        <td>{objectFromTopCarsArray.model}</td>
                    </tr>
                    </tbody>
                )
            })}
        </table>
    )
}