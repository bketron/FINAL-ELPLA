import React, { Component } from 'react'

const styles = {

}

class FilterForm extends Component {
  constructor(props){
    super()
    this.state = {

    }
  }


  render() {
    return (
      <div>
        filter form
      </div>
    )
  }
}

<<<<<<< HEAD

function mapStateToProps(appState) {
  return {
    ...appState.filters,
    username: appState.username
  }

}

export default connect(mapStateToProps)(FilterForm)
=======
export default FilterForm
>>>>>>> 8fa833c95028f65966b58ce6c2ed3942764f8934
