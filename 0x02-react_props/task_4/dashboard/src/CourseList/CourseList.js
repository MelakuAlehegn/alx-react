import React from 'react'
import CourseListRow from "./CourseListRow";
import "./CourseList.css";

export default function CourseList() {
    return (
        <table id='CourseList'>
            <thead>
                <CourseList textFirstCell="Available courses" isHeader={true} textSecondCell={null} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                <CourseListRow textFirstCell='textFirstCell="ES6"' textSecondCell="60" isHeader={false} />
                <CourseListRow textFirstCell='textFirstCell="Webpack"' textSecondCell="20" isHeader={false} />
                <CourseListRow textFirstCell='textFirstCell="React"' textSecondCell="40" isHeader={false} />
            </tbody>
        </table>
    )
}
