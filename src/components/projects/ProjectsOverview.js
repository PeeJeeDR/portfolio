import React from 'react';
import firebase from 'firebase';
import { app, db } from '../../firebase/firebase';

export class ProjectsOverview extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    
    componentWillMount = () => {
        db.ref('projects').on('value', snap => {
            console.log(snap);
        });
    }
    
    render = () => {
        return (
            <div id='ProjectsOverview'>
                
            </div>
        )
    }
}