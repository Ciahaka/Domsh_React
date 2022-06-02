type NewBodytype={
    title:string
}
export const NewBody=(props:NewBodytype)=> {
    return (
        <div>{props.title}</div>
    )
}