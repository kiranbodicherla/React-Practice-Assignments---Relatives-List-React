import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        const relatives = [{id:"relativeListItem1",name:"kiran"},{id:"relativeListItem2",name:"prem"},{id:"relativeListItem3",name:"shiva"},{id:"relativeListItem4",name:"rohit"},{id:"relativeListItem5",name:"akhil"}
    ];
    const listItem = relatives.map((names)=>
    <li key={names.id}>{names.name}</li>);

        return(
            <div id="main">
                <ol key={listItem.key}>{listItem}</ol>
              
            </div>
        )
    }
}


export default App;
