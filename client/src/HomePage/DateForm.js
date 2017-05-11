import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import SelectField from 'material-ui/SelectField'
// import MenuItem from 'material-ui/MenuItem'
import {addFilters} from '../api/filter.js'
import FilterPanel from '../CharlesComponents/FilterPanel.js'
import {generateDate} from '../api/yelpapi'
import {getRestaurants} from '../api/yelpapi'

const styles = {
    container: {
        width: '100%',
        padding: '190px 0px',
        backgroundColor: 'rgba(0,0,0,0.9)',
        backgroundImage: 'url("http://howtofindluv.com/wp-content/uploads/2015/06/bigstock-restaurant-couple-and-holiday-65420062.jpg")',
        backgroundSize: '100% auto'
    },
    title: {
        fontSize: '50px',
        color: '#F7F7F7',
        textAlign: 'center',
        margin: '0px',
        fontFamily: 'Montserrat, sans-serif'
    },
    form: {
        width: '40%',
        padding: '10px 25px',
        display: 'flex',
        flexDirection: 'column',
        margin: '0px auto'
    },
    party: {
        borderRadius: '0',
        height: '25px'
    },
    typeButton: {
        borderRadius: '0px',
        height: '40px',
        width: '100%',
        border: 'none',
        outline: 'none',
        backgroundColor: '#F7F7F7',
        color: '#0B3954',
        margin: '10px 0px',
        fontSize: '16px'
    },
    dateSelect: {
        height: '40px',
        border: 'none',
        outline: 'none',
        borderRadius: '0px',
        marginBottom: '10px'
    },
    partyInput: {
        borderRadius: '0px',
        height: '40px',
        width: '50%',
        border: 'none',
        outline: 'none',
        backgroundColor: '#F7F7F7',
        color: '#0B3954',
        fontSize: '17px',
        padding: '0px 0px 0px 10px'
    },
    maxPrice: {
        height: '40px',
        width: '50%',
        color: '#0B3954',
        backgroundColor: 'white',
        fontSize: '17px',
        padding: '0px',
        margin: '0px 0px 0px 10px',
        outline: 'none',
        border: 'none',
        paddingLeft: '10px'
    },
    lowerForm: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
    },
    moreFiltersButton: {
        width: '100%',
        backgroundColor: '#0B3954',
        textAlign: 'center',
        height: '40px',
        border: 'none',
        outline: 'none',
        marginTop: '10px',
        color: 'white',
        fontSize: '17px'
    },
    generateButton: {
        width: '100%',
        height: '40px',
        backgroundColor: '#FF6E00',
        border: 'none',
        outline: 'none',
        marginTop: '10px',
        fontSize: '20px',
        cursor: 'pointer'
        
    }
}

class DateForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dateType: null,
            partySize: '',
            maxPrice: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDropChange = (event, index, value) => {this.setState({value});}

    handleSubmit(e){
        e.preventDefault()
        // addFilters(this.state)
        getRestaurants()
    }

    render() {
        return (
            <div style={styles.container}>
                <p style={styles.title}>Date Generator</p>
                <form style={styles.form} onSubmit={this.handleSubmit}>
                    <select style={styles.dateSelect} name="dateType" onChange={this.handleChange}>
                        <option name="dateType" value="any" selected>Any</option>
                        <option name="dateType" value="meal">Meal Only</option>
                        <option name="dateType" value="entertainment">Entertainment Only</option>
                        <option name="dateType" value="both">Meal and Entertainment</option>
                    </select>

                    <div style={styles.lowerForm}>
                        <input style={styles.partyInput} onChange={this.handleChange} name="partySize" type="number" min="0" max="12" placeholder="Party Size" value={this.state.partySize} />
                        <input style={styles.maxPrice} onChange={this.handleChange} type="text" name="maxPrice" value={this.state.maxPrice} placeholder="Max. Price" />
                    </div>

                    <FilterPanel />
                    
                    <button style={styles.generateButton} type="submit">Generate</button>
                </form>
            </div>
        )
    }
}

export default DateForm