import React, { Component } from 'react'

import {updateRating} from '../../api/yelpapi.js'

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
            searchRating: 1,
            star1solid: 'none',
            star1empty: 'block',
            star2solid: 'none',
            star2empty: 'block',
            star3solid: 'none',
            star3empty: 'block',
            star4solid: 'none',
            star4empty: 'block',
            star5solid: 'none',
            star5empty: 'block',
        }
    }

    toggleOneStar = (e) => {
            this.setState({
                searchRating: 1,
                star1solid: 'block',
                star1empty: 'none',
                star2solid: 'none',
                star2empty: 'block',
                star3solid: 'none',
                star3empty: 'block',
                star4solid: 'none',
                star4empty: 'block',
                star5solid: 'none',
                star5empty: 'block'
            })

            updateRating(1)
    }

    toggleTwoStar = (e) => {
            this.setState({
                searchRating: 2,
                star1solid: 'block',
                star1empty: 'none',
                star2solid: 'block',
                star2empty: 'none',
                star3solid: 'none',
                star3empty: 'block',
                star4solid: 'none',
                star4empty: 'block',
                star5solid: 'none',
                star5empty: 'block'
            })

            updateRating(2)
    }

    toggleThreeStar = (e) => {
            this.setState({
                searchRating: 3,
                star1solid: 'block',
                star1empty: 'none',
                star2solid: 'block',
                star2empty: 'none',
                star3solid: 'block',
                star3empty: 'none',
                star4solid: 'none',
                star4empty: 'block',
                star5solid: 'none',
                star5empty: 'block'
            })

            updateRating(3)
    }

    toggleFourStar = (e) => {
            this.setState({
                searchRating: 4,
                star1solid: 'block',
                star1empty: 'none',
                star2solid: 'block',
                star2empty: 'none',
                star3solid: 'block',
                star3empty: 'none',
                star4solid: 'block',
                star4empty: 'none',
                star5solid: 'none',
                star5empty: 'block'
            })

            updateRating(4)
    }

    toggleFiveStar = (e) => {
            this.setState({
                searchRating: 5,
                star1solid: 'block',
                star1empty: 'none',
                star2solid: 'block',
                star2empty: 'none',
                star3solid: 'block',
                star3empty: 'none',
                star4solid: 'block',
                star4empty: 'none',
                star5solid: 'block',
                star5empty: 'none'
            })

            updateRating(5)
    }

    render() {
        return (
            <div>
                <div>
                    <button
                        onClick={this.toggleOneStar}
                        name="one"
                        type="button"
                        style={{
                            background: 'none',
                            border: 'none',
                            outline: 'none'
                        }}
                    >
                        <div>
                            <i 
                                name="one"
                                style={{
                                display: this.state.star1solid,
                                color: '#FF6E00'
                            }} className="fa fa-star" aria-hidden="true"></i>

                            <i 
                                style={{
                                display: this.state.star1empty,
                                color: '#282828'
                            }} className="fa fa-star-o" aria-hidden="true"></i>
                        </div>
                    </button>

                    <button
                        onClick={this.toggleTwoStar}
                        name="one"
                        type="button"
                        style={{
                            background: 'none',
                            border: 'none',
                            outline: 'none'
                        }}
                    >
                        <div>
                            <i 
                                name="one"
                                style={{
                                display: this.state.star2solid,
                                color: '#FF6E00'
                            }} className="fa fa-star" aria-hidden="true"></i>

                            <i 
                                style={{
                                display: this.state.star2empty,
                                color: '#282828'
                            }} className="fa fa-star-o" aria-hidden="true"></i>
                        </div>
                    </button>

                    <button
                        onClick={this.toggleThreeStar}
                        name="one"
                        type="button"
                        style={{
                            background: 'none',
                            border: 'none',
                            outline: 'none'
                        }}
                    >
                        <div>
                            <i 
                                name="one"
                                style={{
                                display: this.state.star3solid,
                                color: '#FF6E00'
                            }} className="fa fa-star" aria-hidden="true"></i>

                            <i 
                                style={{
                                display: this.state.star3empty,
                                color: '#282828'
                            }} className="fa fa-star-o" aria-hidden="true"></i>
                        </div>
                    </button>

                    <button
                        onClick={this.toggleFourStar}
                        name="one"
                        type="button"
                        style={{
                            background: 'none',
                            border: 'none',
                            outline: 'none'
                        }}
                    >
                        <div>
                            <i 
                                name="one"
                                style={{
                                display: this.state.star4solid,
                                color: '#FF6E00'
                            }} className="fa fa-star" aria-hidden="true"></i>

                            <i 
                                style={{
                                display: this.state.star4empty,
                                color: '#282828'
                            }} className="fa fa-star-o" aria-hidden="true"></i>
                        </div>
                    </button>

                    <button
                        onClick={this.toggleFiveStar}
                        name="one"
                        type="button"
                        style={{
                            background: 'none',
                            border: 'none',
                            outline: 'none'
                        }}
                    >
                        <div>
                            <i 
                                name="one"
                                style={{
                                display: this.state.star5solid,
                                color: '#FF6E00'
                            }} className="fa fa-star" aria-hidden="true"></i>

                            <i 
                                style={{
                                display: this.state.star5empty,
                                color: '#282828'
                            }} className="fa fa-star-o" aria-hidden="true"></i>
                        </div>
                    </button>
                </div>
            </div>
        )
    }
}

export default Rating
