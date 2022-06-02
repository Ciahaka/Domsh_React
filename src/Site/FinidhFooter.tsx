type FinishFooterType = {
    title:string
}

export const FinishFooter =(props:FinishFooterType)=> {
    return (
        <div>{props.title}</div>
    )
}
