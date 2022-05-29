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
    debugger
    return (

        <table>
            <tr>
                <th>id</th>
                <th>manufacturer</th>
                <th>model</th>
            </tr>
            <caption>Top cars</caption>
            {props.topCars.map((objectFromTopCarsArray, index,) => {
                return (
                    <>
                        <tr key={index + 1}>
                            <td>{objectFromTopCarsArray.id}</td>
                            <td>{objectFromTopCarsArray.manufacturer}</td>
                            <td>{objectFromTopCarsArray.model}</td>
                        </tr>
                    </>
                )
            })}
        </table>
    )
        ;
}