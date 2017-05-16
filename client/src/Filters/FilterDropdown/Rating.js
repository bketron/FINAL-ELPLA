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

    setSearchRating = (event, value) => {
        console.log(value)
        console.log(event.target.name)

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

            console.log('1 star', this.state.searchRating)
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

            console.log('2 stars', this.state.searchRating)
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

            console.log('3 stars', this.state.searchRating)
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

            console.log('4 stars', this.state.searchRating)
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

            console.log('5 stars', this.state.searchRating)
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
