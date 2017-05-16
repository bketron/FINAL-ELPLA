import React, { Component } from 'react'

class Rating extends Component {

    getRating = (rating) => {
        if(rating === 0.5) {
            return <div>
                        <i className="material-icons">star_half</i>
                    </div>
        }

        if(rating === 1) {
            return <div>
                        <i className="material-icons">star</i>
                    </div>
        }

        if(rating === 1.5) {
            return <div>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star_half</i>
                    </div>
        }

        if(rating === 2) {
            return <div>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                    </div>
        }

        if(rating === 2.5) {
            return <div>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star_half</i>
                    </div>
        }

        if(rating === 3) {
            return <div>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                    </div>
        }

        if(rating === 3.5) {
            return <div>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star_half</i>
                    </div>
        }

        if(rating === 4) {
            return <div>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                    </div>
        }

        if(rating === 4.5) {
            return <div>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star_half</i>
                    </div>
        }

        if(rating === 5) {
            return <div>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                    </div>
        }
    }

    render() {
        var rating = this.props.rating
        console.log(this.props)
        return (
            <div>
                {this.getRating(rating)}
            </div>
        )
    }
}

export default Rating
