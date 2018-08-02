import * as React from "react"
import SearchBar from 'material-ui-search-bar';
import { TutorList } from "../components/tutorList";

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
            <div>
                <SearchBar
                    onChange={e => this.setState({ query: e })}
                    placeholder="Search by course code"
                />
                <h1>List of Tutors</h1>
                <TutorList tutors={filteredTutors} />
            </div >
        )
    }
}