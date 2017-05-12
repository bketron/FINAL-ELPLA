import React from 'react';


const styles = {
	list: {
		
    	
    	border:'1px solid black',
    	backgroundColor:'grey',
    	marginTop:70,
    	width:500,
    	height:400
	},
	li: {
		border:'1px solid black',
		listStyle:'none'
	},
	heading: {
		textAlign: 'center'
	}
}

export default class Display extends React.Component {
	render() {
		return <div style={styles.list}>
				<h1 style={styles.heading}>Saved</h1>
				{this.props.items.map((item, i) => {
					return <li style={styles.li} key={item}> { item } </li>
				})}
			   </div>
	}
}