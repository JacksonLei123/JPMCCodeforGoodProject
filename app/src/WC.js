import React from 'react';
import ReactWordCloud from 'react-wordcloud'; 
import Typography from '@material-ui/core/Typography'; 
const options = {
    fontFamily: 'courier new',
    rotations: 30,
    fontSizes: [10, 50, 60, 70, 90],
    fontStyle: 'italic',
    fontWeight: 'bold',
};


class WC extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {data: []};
    }
    componentWillMount() {
        fetch('./newfrequencies.txt')
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
        const { innerWidth: width, innerHeight: height } = window; 
        return (
        <div>
            <div style={{ backgroundColor: '#efefef', height: '700px', width: '100%' }}>
                <Typography className="center_this">Most frequent keywords from 600+ reviews</Typography>
                <ReactWordCloud words={this.state.data} options={options} minSize={[width,700]} size={[width, 700]} />
            </div>
            
        </div>
        ); 
    }
}


export default WC; 