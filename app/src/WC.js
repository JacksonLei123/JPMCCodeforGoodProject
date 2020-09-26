import React from 'react';
import ReactWordCloud from 'react-wordcloud'; 

// const words = [
//     {
//         text: 'told',
//         value: 64,
//     },
//     {
//         text: 'mistake',
//         value: 11,
//     },
//     {
//         text: 'thought',
//         value: 16,
//     },
//     {
//         text: 'bad',
//         value: 17,
//     },
// ]; 


class Reviews extends React.Component {
    componentWillMount() {
        fetch('./data.csv')
        .then((r) => r.text())
        .then(text => {
                let tmp = text.split("\n").map((entry, idx) => {
                let A = tmp.split(","); 
                return {
                    "message": A[0],
                    "stars": int(A[1]),
                };
            });

        });
    }
}
export default function WC (pass_words) {
    return <ReactWordCloud words={pass_words} />
}

