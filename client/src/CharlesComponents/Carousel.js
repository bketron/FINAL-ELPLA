// 'use strict';

var React = require('react');

var Carousel = require('nuka-carousel');

const App = React.createClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    return (
      <Carousel>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
      </Carousel>
    )
  }
});

module.exports = App;


// 'use strict'
// import React from 'react'
// import Carousel from 'nuka-carousel'

// class Carousel extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//   	mixins: [Carousel.ControllerMixin],
//     return (
//       <div>
//         <Carousel>
// 	        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
// 	        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
// 	        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
// 	        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
// 	        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
// 	        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
// 	      </Carousel>
//       </div>
//     )
//   }
// }
// export default Carousel