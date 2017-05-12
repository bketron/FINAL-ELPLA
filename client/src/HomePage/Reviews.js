import React, { Component } from 'react'
import Slider from 'react-slick'

const styles = {
    container: {
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#DDDDDD'
    },
    reviewContainer: {
        margin: 'auto'
    },
    userPic: {
        width: '200px',
        height: '200px',
        backgroundColor: 'white',
        borderRadius: '50%',
        margin: '30px auto'
    },
    reviewText: {
        color: 'white',
        width: '40%',
        margin: 'auto'
    },
    reviewerName: {
        color: 'white',
        margin: '0px'
    },
    reviewTime: {
        color: 'white',
        margin: '0px'
    },
    slideCont: {
    },
    quoteCont: {
        width: '100%'
    },
    quoteIcon: {
        color: 'white',
        fontSize: '300px',
        textAlign: 'center',
        margin: 'auto'
    }
}

class Reviews extends Component {
    render(){
        return (
            <div style={styles.container}>
                <div style={styles.slideCont}>
                    <Slider
                        dots={false}
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                        autoplay={true}
                        autoplaySpeed={5000}
                        arrows={false}
                    >

                        <div style={styles.reviewContainer}>
                            <div style={styles.userPic}></div>
                            <div>
                                <p style={styles.reviewText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <span style={styles.reviewerName}>- User Name</span> <span style={styles.reviewTime}>(Time Stamp)</span></p>
                            </div>
                        </div>

                        <div style={styles.reviewContainer}>
                            <div style={styles.userPic}></div>
                            <p style={styles.reviewText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <span style={styles.reviewerName}>- User Name</span> <span style={styles.reviewTime}>(Time Stamp)</span></p>
                        </div>

                        <div style={styles.reviewContainer}>
                            <div style={styles.userPic}></div>
                            <p style={styles.reviewText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <span style={styles.reviewerName}>- User Name</span> <span style={styles.reviewTime}>(Time Stamp)</span></p>
                        </div>

                        <div style={styles.reviewContainer}>
                            <div style={styles.userPic}></div>
                            <p style={styles.reviewText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <span style={styles.reviewerName}>- User Name</span> <span style={styles.reviewTime}>(Time Stamp)</span></p>
                        </div>

                        <div style={styles.reviewContainer}>
                            <div style={styles.userPic}></div>
                            <p style={styles.reviewText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <span style={styles.reviewerName}>- User Name</span> <span style={styles.reviewTime}>(Time Stamp)</span></p>
                        </div>

                        <div style={styles.reviewContainer}>
                            <div style={styles.userPic}></div>
                            <p style={styles.reviewText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <span style={styles.reviewerName}>- User Name</span> <span style={styles.reviewTime}>(Time Stamp)</span></p>
                        </div>

                        <div style={styles.reviewContainer}>
                            <div style={styles.userPic}></div>
                            <p style={styles.reviewText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <span style={styles.reviewerName}>- User Name</span> <span style={styles.reviewTime}>(Time Stamp)</span></p>
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}

export default Reviews