import React, { Component } from 'react'
import { connect } from 'react-redux'

import TopBar from '../HomePage/TopBar'
import RefreshIndicator from 'material-ui/RefreshIndicator'

const styles = {
    main: {
        width: '100%',
    },
    resultsContainer: {
        width: '100%',
        padding: '50px 150px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    resResult: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column'
    },
    actResult: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column'
    },
    regenButton: {
        display: 'block',
        width: '20px',
        height: '20px',
        border: 'none',
        outline: 'none'
    },
    image: {
        width: '400px',
        height: '300px',
        backgroundColor: 'black',
        overflow: 'hidden'
    }
}

class MealActResultsNew extends Component {
    state = {
        restaurants: [],
        res: {},
        activities: [],
        act: {},
        status: 'loading',
		loaded: 'none',
		loadDisp: 'block'
    }

    componentWillReceiveProps = (props) => {

        var resIndex = (Math.random() * props.restaurants.length).toFixed(0)
        var actIndex = (Math.random() * props.activities.length).toFixed(0)

        console.log('Restaurant #', resIndex)
        console.log('Activity #', actIndex)
        
        this.setState({
            restaurants: props.restaurants,
            res: props.restaurants[resIndex],
            activities: props.activities,
            act: props.activities[actIndex],
            status: 'hide',
            loaded: 'block',
            loadDisp: 'none'
        })
    }

    resRegen = (event) => {
        var newIndex = (Math.random() * this.state.restaurants.length).toFixed(0)

        this.setState({
            res: this.state.restaurants[newIndex]
        })
    }

    actRegen = (event) => {
        var newIndex = (Math.random() * this.state.activities.length).toFixed(0)

        this.setState({
            act: this.state.activities[newIndex]
        })
    }

    render() {
        console.log(this.state)
        return (
            <div style={styles.main}>
                <TopBar />
                <RefreshIndicator
						size={70}
						left={70}
						top={0}
						loadingColor="#FF6E00"
						status={this.state.status}
						style={{
							display: this.state.loadDisp,
							margin: '300px auto',
							position: 'initial',
							transform: 'none'
						}}
    			    />

                    <div style={styles.resultsContainer}>
                        <section style={styles.resResult}>
                            <button style={{
                                        border: 'none',
                                        outline: 'none',
                                        backgroundColor: 'rgba(125,125,125,0.8)',
                                        width: '50px',
                                        height: '23px',
                                        position: 'relative',
                                        top: '23px',
                                        cursor: 'pointer'
                                    }} 
                                    type="button" 
                                    onClick={this.resRegen}
                            >
                                <span style={{color: 'white', display: 'flex'}}>Next <i style={{fontSize: '14px', marginLeft: '3px'}} className="fa fa-angle-double-right" aria-hidden="true"></i></span>

                            </button>

                            <img style={styles.image} src={this.state.res.image_url} alt={ this.state.res.name + 'Cover Image'} />

                            <p>{this.state.res.name}</p>
                            <p>{this.state.res.display_phone}</p>

                        </section>

                        <section style={styles.actResult}>
                            <button style={{
                                        border: 'none',
                                        outline: 'none',
                                        backgroundColor: 'rgba(125,125,125,0.8)',
                                        width: '50px',
                                        height: '23px',
                                        position: 'relative',
                                        top: '23px',
                                        cursor: 'pointer'
                                    }} 
                                    type="button" 
                                    onClick={this.actRegen}
                            >
                                <span style={{color: 'white', display: 'flex'}}>Next <i style={{fontSize: '14px', marginLeft: '3px'}} className="fa fa-angle-double-right" aria-hidden="true"></i></span>

                            </button>

                            <img style={styles.image} src={this.state.act.image_url} alt={ this.state.act.name + 'Cover Image'} />

                            <p>{this.state.act.name}</p>
                            <p>{this.state.act.display_phone}</p>


                        </section>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = function(appState) {
    return {
        restaurants: appState.restaurants,
        activities: appState.activities
    }
}

export default connect(mapStateToProps)(MealActResultsNew)