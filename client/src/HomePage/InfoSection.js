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
    }
}

class InfoSection extends Component {
    render() {
        return (
            <div style={styles.container}>
                <section style={styles.aboutSection}>
                    <p style={styles.header}>About Us</p>
                    <div style={styles.divLine}></div>
                    <p style={styles.caption}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </section>

                <section style={styles.pictureSection}>
                    <img style={styles.aboutPic} alt='' src="" />
                </section>
            </div>
        )
    }
}

export default InfoSection