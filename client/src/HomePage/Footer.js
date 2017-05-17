import React, {Component} from 'react'

const styles = {
    container: {
        width: '100%',
        padding: '20px 30px',
        backgroundColor: '#F7F7F7'
    },
    textSection: {
        width: '100%',
        paddingBottom: '10px',
        borderBottom: '1px solid rgba(125,125,125,0.2)'
    },
    linkSection: {
        display: 'flex',
        width: '100%',
        padding: '10px'
    },
    footerText: {
        color: 'rgba(0,0,0,0.2)',
		textAlign: 'center',
		padding: '0 350px',
		fontSize: '11px',
		marginTop: '25px'
    },
    list: {
        listStyleType: 'none',
        padding: '0px',
        display: 'flex',
        margin: 'auto'
    },
    listItem: {
        margin: '0px 5px'
    },
    socialIcon: {
        height: '25px',
		width: '25px',
		backgroundColor: 'rgba(125,125,125,0.1)',
		boxShadow: '0 1px 1px 1px rgba(0,0,0,0.2)',
		borderRadius: '50%',
		margin: '5px',
		cursor: 'pointer',
        lineHeight: '25px',
        textAlign: 'center',
        color: 'white'

    }
}

class Footer extends Component {
    render(){
        return (
            <div style={styles.container}>

                <div style={styles.linkSection}>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            <a href="https://www.twitter.com/elPlaApp/">
                                <i style={styles.socialIcon} className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li style={styles.listItem}>
                            <a href="https://www.facebook.com/El-Pla-1967050763529199/">
                                <i style={styles.socialIcon} className="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li style={styles.listItem}>
                            <a href="http://www.instagram.com/elplaapp">
                                <i style={styles.socialIcon} className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div style={styles.textSection}>
                    <p style={styles.footerText}>
                        elPla © 2017 | Crafted by Brennen, Charles & Sajid @ TheIronYard
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer