import React from 'react';
import ReactWordCloud from 'react-wordcloud'; 


class WC extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {data: []};
    }
    componentWillMount() {
        fetch('./frequencies.txt')
        .then((r) => r.text())
        .then(text => {
                let tmp = text.split("\n").map((entry, idx) => {
                let A = entry.split(","); 
                return {
                    "text": A[0],
                    "value": parseInt(A[1]),
                };
            });
            this.setState({ data: tmp });
            console.log(this.state.data); 
        });
    }

    render() {
        return (<ReactWordCloud words={this.state.data} />); 
    }
}


export default WC; 