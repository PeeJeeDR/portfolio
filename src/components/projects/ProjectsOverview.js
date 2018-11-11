import React from 'react';
import { db } from '../../firebase/firebase';
import { SingleProject } from './SingleProject';
import { LogoPlaceholder } from '../logos/LogoPlaceholder';

export class ProjectsOverview extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    
    componentWillMount = () => {
        db.ref('projects').on('value', snap => {
            this.setState({
                data: snap.val(),
            });
        })
    }

    renderProjects = () => {
        return this.state.data.map((project, i) => (
            <SingleProject key={ i } project={ project }/>
        ));
    }

    renderLogo = () => {
        if (this.state.data.length % 2 !== 0)
        {
            return (
                <LogoPlaceholder />
            );
        }
    }
    
    render = () => {
        return (
            <div id='ProjectsOverview'>
                { this.renderProjects() }
                { this.renderLogo() }
            </div>
        )
    }
}