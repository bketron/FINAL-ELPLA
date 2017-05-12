import React, {Component} from 'react'
import Username from '../CharlesComponents/Username'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton'
import SocialMenu from './SocialMenu'

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
        fontFamily: 'Pontano Sans, sans-serif',
        textDecoration: 'none',
        cursor: 'pointer'
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
        margin: '0 40px',
        lineHeight: '30px',
        fontSize: '13px',
        position: 'relative',
        top: '-3px',
        fontFamily: 'Pontano Sans, sans-serif',
        cursor: 'pointer'
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
                <Link style={styles.title} to="/">Date Gen</Link>
                <div>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            <FlatButton
                                style={{
                                    height: '23px'
                                }}
                            >
                                <div>
                                    <a style={{
                                        textDecoration: 'none',
                                        fontSize: '13px',
                                        fontFamily: 'Pontano Sans, sans-serif',
                                        textTransform: 'normal',
                                        lineHeight: '23px',
                                        color: 'rgba(125,125,125,0.6)',
                                        position: 'relative',
                                        top: '-6px',
                                        width: '100px',
                                    }} href="/">Home</a>
                                </div>
                            </FlatButton>
                        </li>
                        <li style={styles.listItem}><div style={styles.divLine}></div></li>
                        <li style={styles.listItem}>
                            <SocialMenu />
                        </li>
                        <li style={styles.listItem}><div style={styles.divLine}></div></li>
                        <li style={styles.listItem}>
                            <FlatButton
                                style={{
                                    height: '23px'
                                }}
                            >
                                <div>
                                    <a style={{
                                        textDecoration: 'none',
                                        fontSize: '13px',
                                        fontFamily: 'Pontano Sans, sans-serif',
                                        textTransform: 'normal',
                                        lineHeight: '23px',
                                        color: 'rgba(125,125,125,0.6)',
                                        position: 'relative',
                                        top: '-6px',
                                        width: '100px',
                                    }} href="/#about">About</a>
                                </div>
                            </FlatButton>
                        </li>
                        <li style={styles.listItem}><div style={styles.divLine}></div></li>
                        <li style={styles.listItem}>
                           <FlatButton
                                style={{
                                    height: '23px'
                                }}
                            >
                                <div>
                                    <div style={{
                                        textDecoration: 'none',
                                        fontSize: '13px',
                                        fontFamily: 'Pontano Sans, sans-serif',
                                        textTransform: 'normal',
                                        lineHeight: '23px',
                                        color: 'rgba(125,125,125,0.6)',
                                        position: 'relative',
                                        top: '0px',
                                        width: '100px',
                                        display: 'inlineBlock'
                                    }}>

                                    {this.props.username ? this.props.username : <Username />}
                                    </div>
                                </div>
                            </FlatButton>
                        </li>
                    </ul>
                    
                </div>
            </div>
        )
    }
}


function mapStateToProps(appState) {
  return {
    username: appState.username
  }
}
export default connect(mapStateToProps)(TopBar)