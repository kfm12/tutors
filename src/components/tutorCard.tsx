import * as React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

interface IProps{
    name: string;
    pay: number;
    description: string;
    courseList: string[];
    webpage: string;
    // Add photo later
}

export const TutorCard = (props: IProps) => {

    let courseString = "";
    {props.courseList.map(x => courseString += x + ", ")}

    return (
        <div onClick={() =>  window.open(props.webpage, "_blank") }>
            <Paper elevation={1}>
                <Typography variant="headline" component="h3">
                {props.name}
                </Typography>
                <Typography component="p">
                From R{props.pay} per hour
                </Typography>
                <Typography component="p">
                {props.description}   
                 {/* Cut off description length after a certain number of characters */}
                </Typography>
                <Typography component="p">
                Courses: {courseString.substr(0, courseString.length-2)}
                </Typography>

                {/* Add photo later */}

            </Paper> 
        </div>
    )
}