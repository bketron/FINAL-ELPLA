import React, { Component } from 'react'
import TopBar from './TopBar'
import DateForm from './DateForm'
import InfoSection from './InfoSection'
import IronYard from './IronYard'
import Footer from './Footer'
import Reviews from './Reviews'
import ReviewForm from '../CharlesComponents/ReviewForm'


const styles = {
    container: {
        height: '100%',
        backgroundColor: '#282828'
    }
}

class Home extends Component {
    render() {
        return (
            <div style={styles.container}>
                    <TopBar />
                    <DateForm history={this.props.history}/>
                    <InfoSection />
                    <Reviews />
                    <ReviewForm />
                    <IronYard />
                    <Footer />
            </div>
        )
    }
}


export default Home