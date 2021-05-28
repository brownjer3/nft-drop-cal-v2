type testProps = {
    text: string
}

function Test(props: testProps) {

    return(
        <div>{props.text}</div>
    )
}

export default Test