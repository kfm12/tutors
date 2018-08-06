import * as React from "react";
import { TutorCard } from "./tutorCard";
import * as classes from "./tutors.css";

interface IProps {
    tutors: any[];
}

export const TutorList = (props: IProps) => {
    return <div className={classes.test}> {props.tutors.map(x => <TutorCard name={x.name} pay={x.pay} description={x.description} courseList={x.courseList} webpage={x.webpage} imgurl={x.imgurl} />)}
    </div>
}