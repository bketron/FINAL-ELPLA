import React, { Component } from 'react'
import Slider from 'react-slick'

const styles = {
    container: {
        backgroundColor: '#DDDDDD',
        overflow: 'hidden',
        padding: '35px 40px 100px'
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
        margin: 'auto',
        textAlign: 'center'
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
                <p style={{
                    fontSize: '35px',
                    textAlign: 'center',
                    marginBottom: '0px'
                }}>User Reviews</p>

                <p style={{
                    fontSize: '13px',
                    textAlign: 'center',
                    marginTop: '0px'
                }}>From some of our most noteworthy users!</p>
                <div style={styles.slideCont}>
                    <Slider
                        dots={false}
                        infinite={true}
                        speed={700}
                        slidesToShow={1}
                        slidesToScroll={1}
                        autoplay={true}
                        autoplaySpeed={5000}
                        arrows={true}
                    >

                        <div style={styles.reviewContainer}>
                                <div style={{
                                    width: '200px',
                                    height: '200px',
                                    borderRadius: '50%',
                                    backgroundColor: 'white',
                                    margin: '30px auto',
                                    background: 'url(http://static5.businessinsider.com/image/56f7c1a4910584155c8b8dc8-1190-625/wow-donald-trump-tweets-out-fake-time-magazine-cover-naming-him-person-of-the-year.jpg)',
                                    backgroundSize: '470px 230px',
                                    backgroundPosition: '-100px 0px',
                                    boxShadow: '0px 3px 0px #FF6E00'
                                }}></div>
                            <div>
                                <p style={styles.reviewText}>
                                    <span style={{
                                        color: 'rgba(0,0,0,0.5)',
                                        fontStyle: 'italic'
                                    }}>"I can’t believe I’ve never heard of this app before! I used to have to decide things and that made me SO angry. Not any more. Thanks elPla!"</span>
                                    <span style={{
                                        color: 'rgba(0,0,0,0.5)',
                                        marginLeft: '5px',
                                        fontWeight: 'bold'
                                    }}>- TrumpDawg</span>
                                </p>
                            </div>
                        </div>

                        <div style={styles.reviewContainer}>
                            <div style={{
                                    width: '200px',
                                    height: '200px',
                                    borderRadius: '50%',
                                    backgroundColor: 'white',
                                    margin: '30px auto',
                                    background: 'url(http://www.geekinsider.com/wp-content/uploads/2013/10/bill-nye.jpg)',
                                    backgroundSize: '320px 230px',
                                    backgroundPosition: '-50px 0px',
                                    boxShadow: '0px 3px 0px #FF6E00'
                                }}></div>

                                <p style={styles.reviewText}>
                                    <span style={{
                                        color: 'rgba(0,0,0,0.5)',
                                        fontStyle: 'italic'
                                    }}>"This is a review of a random meal generator I found on the internet. I was mad hungry and clicking around and found elPla. The thing looked alright and gave me a couple cool suggestions so I guess I could us it next time the munchies hit."</span>
                                    <span style={{
                                        color: 'rgba(0,0,0,0.5)',
                                        marginLeft: '5px',
                                        fontWeight: 'bold'
                                    }}>- ScienceGuy</span>
                                </p>
                        </div>

                        <div style={styles.reviewContainer}>
                            <div style={{
                                    width: '200px',
                                    height: '200px',
                                    borderRadius: '50%',
                                    backgroundColor: 'white',
                                    margin: '30px auto',
                                    background: 'url(http://i.onionstatic.com/avclub/5434/67/16x9/960.jpg)',
                                    backgroundSize: '400px 230px',
                                    backgroundPosition: '-90px 0px',
                                    boxShadow: '0px 3px 0px #FF6E00'
                                }}></div>
                            <p style={styles.reviewText}>
                                <span style={{
                                        color: 'rgba(0,0,0,0.5)',
                                        fontStyle: 'italic'
                                    }}>"This app is like a gift from god. It tells me where to go in a seemingly arbitrary manner,  I can pick and choose the parts I like, and pretend the rest don't exist. Bless you elPla."</span>
                                <span style={{
                                        color: 'rgba(0,0,0,0.5)',
                                        marginLeft: '5px',
                                        fontWeight: 'bold'
                                    }}>- GodsServant25</span>
                            </p>
                        </div>

                        <div style={styles.reviewContainer}>
                            <div style={{
                                width: '200px',
                                height: '200px',
                                backgroundColor: 'white',
                                borderRadius: '50%',
                                margin: '30px auto',
                                background: 'url(http://bearingdrift.com/wp-content/uploads/george-w-bush-saul-loeb-afp.jpg)',
                                backgroundSize: '300px 200px',
                                backgroundPosition: '-90px 0px',
                                boxShadow: '0px 3px 0px #FF6E00'
                            }}></div>
                            <p style={styles.reviewText}>
                                <span style={{
                                        color: 'rgba(0,0,0,0.5)',
                                        fontStyle: 'italic'
                                    }}>"Does this thing keep track of my whereabouts!? Does the foil protect me!? Where are your contrails now, huh? I’m on to you elPla."</span>
                                <span style={{
                                        color: 'rgba(0,0,0,0.5)',
                                        marginLeft: '5px',
                                        fontWeight: 'bold'
                                    }}>- G-Dub</span>
                            </p>
                        </div>

                        <div style={styles.reviewContainer}>
                            <div style={{
                                width: '200px',
                                height: '200px',
                                backgroundColor: 'white',
                                borderRadius: '50%',
                                margin: '30px auto',
                                background: 'url(http://i2.cdn.cnn.com/cnnnext/dam/assets/131211074516-pope-waving-story-top.jpg)',
                                backgroundSize: '370px 200px',
                                backgroundPosition: '-50px 0px',
                                boxShadow: '0px 3px 0px #FF6E00'
                            }}></div>

                            <p style={styles.reviewText}>
                                <span style={{
                                        color: 'rgba(0,0,0,0.5)',
                                        fontStyle: 'italic'
                                    }}>"I would never have found that bouncy castle spot without this app. Much appreciated elPla."</span>
                                <span style={{
                                        color: 'rgba(0,0,0,0.5)',
                                        marginLeft: '5px',
                                        fontWeight: 'bold'
                                    }}>- Franci</span>
                            </p>
                        </div>

                        <div style={styles.reviewContainer}>
                            <div style={{
                                width: '200px',
                                height: '200px',
                                backgroundColor: 'white',
                                borderRadius: '50%',
                                margin: '30px auto',
                                background: 'url(https://i.kinja-img.com/gawker-media/image/upload/s--LJ4kR8Aa--/c_scale,fl_progressive,q_80,w_800/197gkt72jr0e1jpg.jpg)',
                                backgroundSize: '370px 200px',
                                backgroundPosition: '-70px 0px',
                                boxShadow: '0px 3px 0px #FF6E00'
                            }}></div>

                            <p style={styles.reviewText}>
                                <span style={{
                                        color: 'rgba(0,0,0,0.5)',
                                        fontStyle: 'italic'
                                    }}>"When I was in a pinch and could not find a place I hadn't eaten at, elPla was there. When my husband devorced me for never eating at the same place twice, elPla was there. When I needed to find a thing to do when I excaped from the institute, elpla was there."</span>
                                <span style={{
                                        color: 'rgba(0,0,0,0.5)',
                                        marginLeft: '5px',
                                        fontWeight: 'bold'
                                    }}>- Dr. Evil</span>
                            </p>
                        </div>

                        <div style={styles.reviewContainer}>
                            <div style={{
                                width: '200px',
                                height: '200px',
                                backgroundColor: 'white',
                                borderRadius: '50%',
                                margin: '30px auto',
                                background: 'url(https://files.slack.com/files-pri/T03FAV5N3-F5F7T135L/14611148_1322130631144719_8506796716915536532_n.jpg)',
                                backgroundSize: '200% 200%',
                                backgroundPosition: '-120px 0px',
                                boxShadow: '0px 3px 0px #FF6E00'
                            }}></div>
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