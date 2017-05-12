import React, {Component} from 'react'

const buttons = {
    button1: {
        color: '#757575',
        backgroundColor: '#BCBDBD'
    },
    button2: {
        color: '#757575',
        backgroundColor: '#BCBDBD'
    },
    button3: {
        color: '#757575',
        backgroundColor: '#BCBDBD'
    },
    button4: {
        color: '#757575',
        backgroundColor: '#BCBDBD'
    }

}

class PriceRange extends Component {
    constructor(props){
        super()
        this.state = {
            maxPrice: ''
        }
    }

    handleClick = (e) => {
        var max = e.target.name
        this.setState ({
            maxPrice: max
        })

        if(max === '1'){
            buttons.button1.color = '#F7F7F7'
            buttons.button1.backgroundColor = '#FF6E00'
            buttons.button2.color = '#757575'
            buttons.button2.backgroundColor = '#BCBDBD'
            buttons.button3.color = '#757575'
            buttons.button3.backgroundColor = '#BCBDBD'
            buttons.button4.color = '#757575'
            buttons.button4.backgroundColor = '#BCBDBD'
        }
        if(max === '2'){
            buttons.button1.color = '#F7F7F7'
            buttons.button1.backgroundColor = '#FF6E00'
            buttons.button2.color = '#F7F7F7'
            buttons.button2.backgroundColor = '#FF6E00'
            buttons.button3.color = '#757575'
            buttons.button3.backgroundColor = '#BCBDBD'
            buttons.button4.color = '#757575'
            buttons.button4.backgroundColor = '#BCBDBD'
        }
        if(max === '3'){
            buttons.button1.color = '#F7F7F7'
            buttons.button1.backgroundColor = '#FF6E00'
            buttons.button2.color = '#F7F7F7'
            buttons.button2.backgroundColor = '#FF6E00'
            buttons.button3.color = '#F7F7F7'
            buttons.button3.backgroundColor = '#FF6E00'
            buttons.button4.color = '#757575'
            buttons.button4.backgroundColor = '#BCBDBD'
        }
        if(max === '4') {
            buttons.button1.color = '#F7F7F7'
            buttons.button1.backgroundColor = '#FF6E00'
            buttons.button2.color = '#F7F7F7'
            buttons.button2.backgroundColor = '#FF6E00'
            buttons.button3.color = '#F7F7F7'
            buttons.button3.backgroundColor = '#FF6E00'
            buttons.button4.color = '#F7F7F7'
            buttons.button4.backgroundColor = '#FF6E00'
        }

        console.log(this.state)
    }

    render() {
        return (
            <div style={{margin: 'auto'}}>
                <button style={{
                    border: 'none',
                    outline: 'none',
                    color: buttons.button1.color,
                    backgroundColor: buttons.button1.backgroundColor,
                    borderRight: '1px solid rgba(0,0,0,0.2)',
                    height: '27px',
                    width: '36px',
                    borderRadius: '3px 0px 0px 3px',
                    fontSize: '14px'
                }} type="button" name="1" onClick={this.handleClick}>$</button>

                <button style={{
                    border: 'none',
                    outline: 'none',
                    color: buttons.button2.color,
                    backgroundColor: buttons.button2.backgroundColor,
                    borderRight: '1px solid rgba(0,0,0,0.2)',
                    height: '27px',
                    width: '36px',
                    fontSize: '14px'
                }} type="button" name="2" onClick={this.handleClick}>$</button>
                
                <button style={{
                    border: 'none',
                    outline: 'none',
                    color: buttons.button3.color,
                    backgroundColor: buttons.button3.backgroundColor,
                    borderRight: '1px solid rgba(0,0,0,0.2)',
                    height: '27px',
                    width: '36px',
                    fontSize: '14px'
                }} type="button" name="3" onClick={this.handleClick}>$</button>
                
                <button style={{
                    border: 'none',
                    outline: 'none',
                    color: buttons.button4.color,
                    backgroundColor: buttons.button4.backgroundColor,
                    height: '27px',
                    width: '36px',
                    borderRadius: '0px 3px 3px 0px',
                    fontSize: '14px'
                }} type="button" name="4" onClick={this.handleClick}>$</button>
            </div>
        )
    }
}

export default PriceRange