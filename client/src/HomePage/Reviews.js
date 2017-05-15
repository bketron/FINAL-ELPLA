import React, { Component } from 'react'
import Slider from 'react-slick'

const styles = {
    container: {
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        overflow: 'hidden'
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
        <div>
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
                                <p style={styles.reviewText}>This is a review of a random meal generator I found on the internet. I was mad hungry and clicking around and found elPla. The thing looked alright and gave me a couple cool suggestions so I guess I could us it next time the munchies hit. <span style={styles.reviewerName}>- StonedDude420</span> <span style={styles.reviewTime}>(Time Stamp)</span></p>
                            </div>
                        </div>

                        <div style={styles.reviewContainer}>
                            <div style={styles.userPic}></div>
                            <p style={styles.reviewText}>I can’t believe I’ve never heard of this app before! I used to have to decide things and that made me SO angry. Not any more. Thanks elPla! <span style={styles.reviewerName}>- Anonymous</span> <span style={styles.reviewTime}>(Time Stamp)</span></p>
                        </div>

                        <div style={styles.reviewContainer}>
                            <div style={styles.userPic}></div>
                            <p style={styles.reviewText}>This app is like a gift from god. It tells me where to go in a seemingly arbitrary manner,  I can pick and choose the parts I like, and pretend the rest don't exist. Bless you elPla. <span style={styles.reviewerName}>- GodsServant25</span> <span style={styles.reviewTime}>(Time Stamp)</span></p>
                        </div>

                        <div style={styles.reviewContainer}>
                            <div style={styles.userPic}></div>
                            <p style={styles.reviewText}>Does this thing keep track of my whereabouts!? Does the foil protect me!? Where are your contrails now, huh? I’m on to you elPla. <span style={styles.reviewerName}>- Anonymous</span> <span style={styles.reviewTime}>(Time Stamp)</span></p>
                        </div>

                        <div style={styles.reviewContainer}>
                            <div style={styles.userPic}></div>
                            <p style={styles.reviewText}>I would never have found that bouncy castle spot without this app. Much appreciated elPla.<span style={styles.reviewerName}>- CombatComic</span> <span style={styles.reviewTime}>(Time Stamp)</span></p>
                        </div>

                        <div style={styles.reviewContainer}>
                            <div style={styles.userPic}></div>
                            <p style={styles.reviewText}>When I was in a pinch and could not find a place I hadn't eaten at, elPla was there. When my husband devorced me for never eatting at the same place twice, elPla was there. When I needed to find a thing to do when I excaped from the institute, elpla was there. <span style={styles.reviewerName}>- IUseMyName</span> <span style={styles.reviewTime}>(Time Stamp)</span></p>
                        </div>

                        <div style={styles.reviewContainer}>
                            <div style={styles.userPic}></div>
                            <p style={styles.reviewText}>Grand Tata, she is elPla app. So many for the finding of the food times, but there is wild pig time in the blocking of the farm. She is make big fight for the foods with pork eatting. Then she die. Thanking you elPla peoples. <span style={styles.reviewerName}>- IamRaduHello</span> <span style={styles.reviewTime}>(Time Stamp)</span></p>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
        )
    }
}

export default Reviews