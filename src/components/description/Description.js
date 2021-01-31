import React from 'react'
import Row from './Row'
export default function Description() {

    const title1 = "Welcome to Asciifi"
    const text1 = "Asciifi is a fast peer-to-peer video calling platform - with a twist. Before your video is sent, Asciifi converts it to text characters, lowering your data usage."
    
    const title2 = "Faster than the others"
    const text2 = "Asciifi is over 3 times faster than other video-calling services, with a latency of just 10ms. Anyone with spotty cell service can utilize Asciifi to be seen"
    
    const title3 = "Stay Connected"
    const text3 = "Whether you need to ditch the bandwidth-hogging apps, or just have some fun with friends, Asciifi has your back. We believe that, during this pandemic, everyone should have the right to stay connected."
    return (
        <div>
            <Row img="img1@2x.png" text={text1} title={title1}/>
            <Row img="img3@2x.png" text={text2} title={title2}/>
            <Row img="img4@2x.png" text={text3} title={title3}/>
        </div>
    )
}
