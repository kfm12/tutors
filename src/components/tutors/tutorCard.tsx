import * as React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import * as classes from "./tutors.css";

interface IProps {
    name: string;
    pay: number;
    description: string;
    courseList: string[];
    webpage: string;
    imgurl: string;
}

export const TutorCard = (props: IProps) => {

    let courseString = "";
    { props.courseList.map(x => courseString += x + ", ") }

    return (
        <div onClick={() => window.open(props.webpage, "_blank")}>
            <Paper elevation={1} className={classes.flex_container_outer}>

                <div className={classes.flex_container_inner}>
                <div className={classes.flex_container_inner_inner}>
                        <Typography variant="headline" component="h3" className={classes.name}>
                            {props.name}
                        </Typography>
                        <Typography component="p" className={classes.pay}>
                            From R{props.pay} per hour
                        </Typography>
                        <Typography component="p" className={classes.description}>
                            {props.description.substr(0, 100) + '...'}
                            {/* Cut off description length after a certain number of characters */}
                        </Typography>
                    </div>
                    <>
                        <img src={props.imgurl} className={classes.img} />
                    </>
                </div>

                <div>
                    <Typography component="p" className={classes.courses}>
                        Courses: {courseString.substr(0, courseString.length - 2)}
                    </Typography>

                </div>

            </Paper>
            <br/>

        </div>
    )
}