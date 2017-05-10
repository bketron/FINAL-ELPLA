import React from 'react'
import data from './data.json' 
import { Link } from 'react-router-dom'



const styles = {
	container: {
		margin:'auto',
    	width:750,
    	height:700,
    	padding:10,
    	backgroundColor:'rgb(166, 165, 163)',
    	lineHeight:5
	},
	img: {
			width:700,
			height:165,
			backgroundColor:'yellow',
			textAlign:'center',
			marginLeft:20
	},
	info: {
		display:'flex',
		marginLeft:20
	},
	rname: {
		width:600,
		marginTop:-20,
		height:10

	},
	minfo: {
		height:30,
		width:100
	},
	general: {
		
		width:380,
		height:300,
		lineHeight:'normal',
		wordWrap:'break-word'
	},
	bottom: {
		display:'flex',
		marginLeft:20
	},
	rimg: {
		width:700,
		height:165
	},
	map: {
		width:300,
		height:296,
		marginRight:20
	},
	footer: {
		backgroundColor:'red',
		width:700,
		height:150,
		marginLeft:20,
		marginTop:-30,
		marginBottom:50,
		lineHeight:'normal',
		wordWrap:'break-word',
		overflow:'scroll'
	},
	par: {
		lineHeight:'normal',
		wordWrap:'break-word'
	},
	p: {
		fontWeight:'bold'
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
            <Link to={'/Favorite/'}>
            	<button>Favorite</button>
            </Link>
            	{this.state.results.map(result=>(
            	<div key={'result' + result.id}>
            		<div style={styles.info}>
            			<span style={styles.rname}>{result.name}</span>
            			<a href={result.website} style={styles.minfo} class="button">More info</a>
            		</div>
            		<p style={styles.img}><img style={styles.rimg} src={result.img} alt="img" /></p>
            		<div style={styles.bottom}>
            			<div>
            				<iframe style={styles.map} src={result.map}></iframe>
            			</div>
            			<div style={styles.general}>
            				<p style={styles.p}>Website:</p> {result.website}
            				<p style={styles.p}>Phone Number:</p> {result.phone}
            				<p style={styles.p}>Address:</p> {result.address}
            			</div>
            		</div>
            		<div style={styles.footer}>
            			<p>About:</p>
            			<span style={styles.par}>{result.about}</span>
            		</div>		
            	</div>
            	))}
            	
            </div>
        )
    }
}


export default Results
