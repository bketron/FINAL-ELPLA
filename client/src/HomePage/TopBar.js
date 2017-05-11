import React, {Component} from 'react'
import Username from '../CharlesComponents/Username'

const styles = {
    container: {
        width: '100%',
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F7F7F7'
    },
    title: {
        fontSize: '35px',
        lineHeight: '80px',
        color: 'rgba(11,57,84,0.8)',
        margin: '0px 0px 0px 45px',
        fontFamily: 'Pontano Sans, sans-serif'
    },
    list: {
        padding: '0px',
        margin: '0px 30px 0px 0px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        listStyleType: 'none'
    },
    listItem: {
        height: '30px'
    },
    link: {
        textDecoration: 'none',
        color: 'rgba(125,125,125,0.6)',
        margin: '0 15px',
        lineHeight: '30px',
        fontSize: '13px',
        position: 'relative',
        top: '-3px',
        fontFamily: 'Pontano Sans, sans-serif'
    },
    divLine: {
        height: '23px',
        borderRight: '1px solid rgba(125,125,125,0.6)',
    }
}

class TopBar extends Component {
    render(){
        return (
            <div style={styles.container}>
                <p style={styles.title}>elPla</p>
                <div>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            <a style={styles.link} href="">Home</a>
                        </li>
                        <li style={styles.listItem}><div style={styles.divLine}></div></li>
                        <li style={styles.listItem}>
                            <a style={styles.link} href="">Social</a>
                        </li>
                        <li style={styles.listItem}><div style={styles.divLine}></div></li>
                        <li style={styles.listItem}>
                            <a style={styles.link} href="">About</a>
                        </li>
                        <li style={styles.listItem}><div style={styles.divLine}></div></li>
                        <li style={styles.listItem}>
                            <Username />
                        </li>
                    </ul>
                    
                </div>
            </div>
        )
    }
}

export default TopBar