import React, {Component} from 'react'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: '100px 75px',
        backgroundColor: '#F7F7F7'
    },
    aboutSection: {
        width: '50%',
        padding: '0px 25px'
    },
    pictureSection: {
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
        color: 'rgba(125,125,125,0.6)'
    },
    caption: {
        width: '80%',
        textAlign: 'center',
        padding: '0px',
        margin: 'auto',
        marginTop: '20px',
        fontSize: '14px',
        color: 'rgba(125,125,125,0.8)'
    },
    aboutPic: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
    target: {
        position: 'relative',
        top: '-200px'
    }
}

class InfoSection extends Component {
    render() {
        return (
            <div style={styles.container}>
                <a style={styles.target} name="about"></a>
                <section style={styles.aboutSection}>
                    <p style={styles.header}>About Us</p>
                    <div style={styles.divLine}></div>
                    <p style={styles.caption}>The year was 2017. Three unlikely comrades joined forces to unravel the mysteries of figuring out what to do on a first date. Several methods were attempted to no avail. Suddenly, one of the three had a flash of incite, “We take the decision from them and automate it!”. This is how the elPla date generator was born. Powered by Yelp™, and allowing for filtered parameters, users are able to generate a place to eat, a thing to do, or both. The user can then get directions, or generate a new random meal/activity. This is all to assist in reducing the amount of thought the average human devotes to social interaction, freeing those brain cells to consider the mysteries of time and space. </p>
                </section>

                <section style={styles.pictureSection}>
                    <div
                        style={{
                            width: '500px',
                            height: '100%',
                            background: 'url(https://tiy-site-herokuapp-com.global.ssl.fastly.net/assets/aesthetic/photos/tiy-classroom-33c04997bbb47abfc89ab8a772d9b68190ecfcb589923dd1bf550ee7eef6fa61.jpg) no-repeat',
                            backgroundSize: '500px 300px'
                        }}></div>
                </section>
            </div>
        )
    }
}

export default InfoSection