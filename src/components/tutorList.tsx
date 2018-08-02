import * as React from "react";
import  { TutorCard } from './tutorCard'

interface IProps{
    tutors: any[];
}

export const TutorList = (props: IProps) => {
        return <div> {props.tutors.map(x => <TutorCard name={x.name} pay={x.pay} description={x.description} courseList={x.courseList} webpage={x.webpage} />)}</div>
}