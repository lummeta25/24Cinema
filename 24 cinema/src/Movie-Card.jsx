import PropTypes from 'prop-types'


function Movie_Card(props){
    return(
        <div className="movie-card">
            <div className="movie-card-img">
                <img src={props.movie_img_src} alt="oppenheimer poster image" />
            </div>
            <div className="movie-info">
                <h3 className="movie-title">{props.movie_title}</h3>
                {/* <p className="movie-desc">During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.</p> */}
                <button>Get tickets</button>
            </div>
        </div>
    );
}

Movie_Card.propTypes = {
    movie_img_src: PropTypes.string,
    movie_title: PropTypes.number
}

Movie_Card.defaultProps = {
    movie_img_src: "",
    movie_title: "Default"
}
export default Movie_Card