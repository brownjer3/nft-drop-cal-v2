
const Search = (props: any) => {

    return(
        <div>
            <input type='text' onChange={props.handleSearch}/>
            <input type='date' onChange={props.handleDate}/>
        </div>
    )

}

export default Search