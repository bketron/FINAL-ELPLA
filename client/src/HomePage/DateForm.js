import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField'
// import SelectField from 'material-ui/SelectField'
// import MenuItem from 'material-ui/MenuItem'
import {addFilters} from '../api/filter.js'
import FilterPanel from '../Filters/FilterPanel.js'
import {generateDate} from '../api/yelpapi'
import {getRestaurants, getActivities} from '../api/yelpapi'

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
    constructor() {
        super()
        this.state = {
            dateType: '',
            partySize: '',
            maxPrice: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDropChange = (event, index, value) => {
        this.setState({
            dateType: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        var priceRange = ''
        // addFilters(this.state)
        if(this.state.maxPrice !== ''){
            if(this.state.maxPrice <= 10){
                priceRange = '1'
            }
            if(this.state.maxPrice > 10 && this.state.maxPrice <= 30){
                priceRange = '1,2'
            }
            if(this.state.maxPrice > 30 && this.state.maxPrice <=  60){
                priceRange = '1,2,3'
            }
            if(this.state.maxPrice > 60){
                priceRange = '1,2,3,4'
            }
        }

        getRestaurants({
            price: priceRange
        })

        getActivities({
            price: priceRange
        })

        if(this.state.dateType === ''){this.props.history.push('/results/meal+act')}
        if(this.state.dateType === 'meal'){this.props.history.push('/results/meal')}
        if(this.state.dateType === 'entertainment'){this.props.history.push('/results/activity')}
        if(this.state.dateType === 'both'){this.props.history.push('/results/meal+act')}
    }

    render() {
        return (
            <div style={styles.container}>
                <p style={styles.title}>Date Generator</p>
                <form style={styles.form} onSubmit={this.handleSubmit}>
                    <DropDownMenu
                        value={this.state.dateType}
                        onChange={this.handleDropChange}
                        autoWidth={false}
                        style={{
                            width: '100%',
                            backgroundColor: 'white',
                            height: '40px',
                            margin: '0px 0px 10px 0px'
                        }}
                        labelStyle={{
                            lineHeight: '40px',
                            padding: '0px 15px',
                        }}
                        selectedMenuItemStyle={{
                            color: '#FF6E00',
                        }}
                        underlineStyle={{
                            margin: '-1px 0px'
                        }}
                        menuItemStyle={{
                            width: '100%'
                        }}
                        iconStyle = {{
                            border: '10px',
                            boxSizing: 'border-box',
                            display: 'inline-block',
                            fontFamily: 'Roboto, sans-serif',
                            WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            margin: '0px',
                            padding: '12px',
                            outline: 'none',
                            fontSize: '0px',
                            fontWeight: 'inherit',
                            position: 'absolute',
                            zIndex: '1',
                            overflow: 'visible',
                            transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
                            width: '48px',
                            height: '48px',
                            fill: 'rgb(224, 224, 224)',
                            right: '16px',
                            top: '-2px',
                            background: 'none'
                        }}
                    >
                        <MenuItem
                            value=''
                            disabled={true}
                            primaryText="Date Type"
                        />
                        <MenuItem value='meal' primaryText="Meal Only" />
                        <MenuItem value='entertainment' primaryText="Activity Only" />
                        <MenuItem value='both' primaryText="Meal and Activity" />
                    </DropDownMenu>

                    <div style={styles.lowerForm}>
                        <TextField
                            hintText="Party Size"
                            onChange={this.handleChange}
                            name="partySize"
                            underlineFocusStyle={{borderColor: '#FF6E00'}}
                            value={this.state.partySize}
                            type="number"
                            style={{
                                backgroundColor: 'white',
                                height: '40px',
                            }}
                            hintStyle={{
                                position: 'absolute',
                                top: '8px',
                                left: '15px',
                                color: 'black'
                            }}
                            inputStyle = {{
                                lineHeight: '40px',
                                fontSize: '17px',
                                padding: '0px 15px'
                            }}
                            underlineStyle={{
                                position: 'relative',
                                top: '0px'
                            }}
                        />
                        
                        <TextField
                            hintText="Max. Price (per person)"
                            onChange={this.handleChange}
                            name="maxPrice"
                            underlineFocusStyle={{borderColor: '#FF6E00'}}
                            value={this.state.maxPrice}
                            type="number"
                            style={{
                                backgroundColor: 'white',
                                height: '40px',
                            }}
                            hintStyle={{
                                position: 'absolute',
                                top: '8px',
                                left: '15px',
                                color: 'black'
                            }}
                            inputStyle = {{
                                lineHeight: '40px',
                                fontSize: '17px',
                                padding: '0px 15px'
                            }}
                            underlineStyle={{
                                position: 'relative',
                                top: '0px'
                            }}
                        />
                    </div>

                    <FilterPanel />
                    
                    <button style={styles.generateButton} type="submit">Generate</button>
                </form>
            </div>
        )
    }
}

export default DateForm