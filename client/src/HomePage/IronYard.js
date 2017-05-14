import React, {Component} from 'react'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: '100px 75px',
        backgroundColor: '#EFEFEF',
        alignItems: 'center'
    },
    infoSection: {
        width: '50%',
        padding: '0px 25px',
        alignItems: 'center'
    },
    imageSection: {
        width: '50%',
        padding: '0px 20px'
    },
    divLine: {
        width: '80%',
        margin: 'auto',
        borderBottom: '1px solid rgba(125,125,125,0.1)'
    },
    header: {
        padding: '0px',
        margin: '0px',
        fontSize: '30px',
        textAlign: 'center',
        marginBottom: '10px',
        color: 'rgba(125,125,125,0.7)'
    },
    caption: {
        width: '80%',
        textAlign: 'center',
        padding: '0px',
        margin: 'auto',
        marginTop: '20px',
        fontSize: '14px',
        color: 'rgba(125,125,125,0.9)'
    },
    ironYardPic: {
        width: '60%',
        height: 'auto'
    }
}

class IronYard extends Component {
    render(){
        return (
            <div style={styles.container}>
                <section style={styles.imageSection}>
                    <img style={styles.ironYardPic} src="https://pbs.twimg.com/profile_images/552955646346145793/DKlUDGsR.png" alt="The Iron Yard" />
                </section>

                <section style={styles.infoSection}>
                    <p style={styles.header}>The Iron Yard</p>
                    <div style={styles.divLine}></div>
                    <p style={styles.caption}>Can a code school help you prepare for a career in tech? Can you really train for jobs in software development, web design or computer programming in a matter of weeks? If these are the questions you’re pondering, we’re here to help guide you. Developers and designers are in demand in Las Vegas, and we want to prepare you with the skills you need to land one of those jobs - and a career you love. At The Iron Yard, our full-time and part-time courses are designed with input from Las Vegas tech employers so we make sure our graduates are ready for those jobs.</p>
                </section>
            </div>
        )
    }
}

export default IronYard