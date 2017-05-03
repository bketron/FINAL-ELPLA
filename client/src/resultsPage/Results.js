import React from 'react'
import data from './data.json'

const styles = {
	container: {
		margin:'auto',
    	width:500,
    	height:350,
    	padding:10,
    	backgroundColor:'rgb(166, 165, 163)',
    	lineHeight:5
	},
	img: {
			width:400,
			height:100,
			backgroundColor:'blue',
			textAlign:'center',
			marginLeft:50
	},
	name: {
		width:150,
		height:30,
		lineHeight:2,
		backgroundColor:'grey',
		marginBottom:5,
		marginTop:10,
		textAlign:'center'
	},
	price: {
		width:150,
		height:30,
		lineHeight:2,
		backgroundColor:'grey',
		marginBottom:5,
		textAlign:'center'
	},
	type: {
		width:150,
		height:30,
		lineHeight:2,
		backgroundColor:'grey',
		marginBottom:5,
		textAlign:'center'
	},
	event: {
		width:150,
		height:30,
		lineHeight:2,
		backgroundColor:'grey',
		marginBottom:5,
		textAlign:'center'
	},
	location: {
		width:150,
		height:30,
		lineHeight:2,
		backgroundColor:'grey',
		marginBottom:5,
		textAlign:'center'
	},
	boxes: {
		display:'flex',
    flexDirection:'column'
	}
}


class Results extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			results: data.restaurants
		}
	}



    render() {
        return (
            <div style={styles.container}>
            		<p style={styles.img}>img</p>
            		<div style={styles.boxes}>
            			<input style={styles.name} type="text" placeholder="Name" />
            			<input style={styles.price} type="text" placeholder="Price" />
            			<input style={styles.type} type="text" placeholder="Type" />
            			<input style={styles.event} type="text" placeholder="Event" />
            			<input style={styles.location} type="text" placeholder="Location" />
            		</div>
            		{this.state.results.map(result=>(
            			<div key={'result' + result.id}>
            				<span>{result.name}</span>
            				<span>{result.price}</span>
            				<span>{result.type}</span>
            				<span>{result.eventType}</span>
            				<span>{result.location}</span>
            			</div>
            		))}
            </div>
        )
    }
}


export default Results
