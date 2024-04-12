function Movie_lists(props){

    const passed_items = props.items

    const movie_list = passed_items.map(item => <li key={item.id} > {item.name} &nbsp; {item.duration}</li>)

        return(

            
            <p>
                <ol>{movie_list}</ol>
            </p>
        );

}

export default Movie_lists