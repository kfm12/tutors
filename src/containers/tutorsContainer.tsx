import * as React from "react"
import SearchBar from 'material-ui-search-bar';
import { TutorList } from "../components/tutors/tutorList";
import * as classes from './tutorsContainer.css';

interface IProps {
    tutors: any[]
}

interface IState {
    query: string
}

export default class TutorSearch extends React.Component<IProps, IState> {

    state = {
        query: ""
    }

    render() {
        let filteredTutors = this.props.tutors.filter(
            (tutor) => {
                return tutor.courseList.toString().toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1;
            })

        return (
            <div className={classes.all}> 
                <SearchBar
                    onChange={e => this.setState({ query: e })}
                    placeholder="Search by course code"
                />
                <div className={classes.header} >Tutors</div>
                <div className={classes.list}>
                <TutorList tutors={filteredTutors}/>
                </div>
            </div >
        )
    }
}