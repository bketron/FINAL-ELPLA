import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getFavorites} from '../api/yelpapi'
import TopBar from '../HomePage/TopBar'
import FaveList from '../FavPage/FaveList'

class Favorites extends Component {
    componentWillMount() {
        var favs = getFavorites()

        console.log('Favs:', favs)
    }

    render() {
        return (
            <div>
                <TopBar />
                <FaveList />
            </div>
        )
    }
}

const mapStateToProps = function(appState) {
    // console.log(appState.favorites, 'bot')
    return {
        favorites: appState.favorites
    }
}

export default connect(mapStateToProps)(Favorites)