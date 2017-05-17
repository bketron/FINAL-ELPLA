import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getFavorites} from '../api/yelpapi'
import TopBar from '../HomePage/TopBar'

class Favorites extends Component {
    componentWillMount() {
        var favs = getFavorites()

        console.log('Favs:', favs)
    }

    render() {
        return (
            <div>
                <TopBar />
            </div>
        )
    }
}

const mapStateToProps = function(appState) {
    return {
        favorites: appState.favorites
    }
}

export default connect(mapStateToProps)(Favorites)