import React, { Component } from 'react'

var stars = {
    star1solid: 'none',
    star1half: 'none',
    star1empty: 'block',

    star2solid: 'none',
    star2half: 'none',
    star2empty: 'block',

    star3solid: 'none',
    star3half: 'none',
    star3empty: 'block',

    star4solid: 'none',
    star4half: 'none',
    star4empty: 'block'
}

class Rating extends Component {
    constructor(props){
        super()
        this.state = {
            searchRating: 1
        }
    }

    setSearchRating = (value) => {
        console.log(value)

        if(value === 1){
            stars.star1empty = 'none'
            stars.star1solid = 'block'

            stars.star2empty = 'block'
            stars.star2solid = 'none'

            stars.star3empty = 'block'
            stars.star3solid = 'none'

            stars.star4empty = 'block'
            stars.star4solid = 'none'
        }

        if(value === 2){
            stars.star1empty = 'none'
            stars.star1solid = 'block'

            stars.star2empty = 'none'
            stars.star2solid = 'block'

            stars.star3empty = 'block'
            stars.star3solid = 'none'

            stars.star4empty = 'block'
            stars.star4solid = 'none'
        }

        if(value === 3){
            stars.star1empty = 'none'
            stars.star1solid = 'block'

            stars.star2empty = 'none'
            stars.star2solid = 'block'

            stars.star3empty = 'none'
            stars.star3solid = 'block'

            stars.star4empty = 'block'
            stars.star4solid = 'none'
        }

        if(value === 4){
            stars.star1empty = 'none'
            stars.star1solid = 'block'

            stars.star2empty = 'none'
            stars.star2solid = 'block'

            stars.star3empty = 'none'
            stars.star3solid = 'block'

            stars.star4empty = 'none'
            stars.star4solid = 'block'
        }
    }

    render() {
        return (
            <div>
                <div>
                    <button type="button" onClick={this.setSearchRating(1)}>
                        <div>
                            <i style={{
                                display: stars.star1solid
                            }} className="fa fa-star" aria-hidden="true"></i>

                            <i style={{
                                display: stars.star1empty
                            }} className="fa fa-star-o" aria-hidden="true"></i>
                        </div>
                    </button>

                    <button type="button" onClick={this.setSearchRating(2)}>
                        <div>
                            <i style={{
                                display: stars.star2solid
                            }} className="fa fa-star" aria-hidden="true"></i>

                            <i style={{
                                display: stars.star2empty
                            }} className="fa fa-star-o" aria-hidden="true"></i>
                        </div>
                    </button>

                    <button type="button" onClick={this.setSearchRating(3)}>
                        <div>
                            <i style={{
                                display: stars.star3solid
                            }} className="fa fa-star" aria-hidden="true"></i>

                            <i style={{
                                display: stars.star3empty
                            }} className="fa fa-star-o" aria-hidden="true"></i>
                        </div>
                    </button>

                    <button type="button" onClick={this.setSearchRating(4)}>
                        <div>
                            <i style={{
                                display: stars.star4solid
                            }} className="fa fa-star" aria-hidden="true"></i>

                            <i style={{
                                display: stars.star4empty
                            }} className="fa fa-star-o" aria-hidden="true"></i>
                        </div>
                    </button>
                </div>
            </div>
        )
    }
}

export default Rating
