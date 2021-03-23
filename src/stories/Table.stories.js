import React from 'react';
import Table from '../components/Table';
import { withKnobs, object } from '@storybook/addon-knobs';

//decorators: [withKnobs] added to the object

export default {
    title: 'Table component',
    component: Table,
    decorators: [withKnobs]     //now knob bar is available in the data which we can use it
}


const data = [
    { name: 'Abdulazeez Abdulazeez', course: 'Water Resources and Environmental Engineering' },
    { name: 'Albert Einstein', course: 'Physics' },
    { name: 'John Doe', course: 'Estate Managment' },
    { name: 'Sigismund Freud', course: 'Neurology' },
    { name: 'Leonhard Euler', course: 'Mathematics' },
    { name: 'Ben Carson', course: 'Neurosurgery' }
]

//first story showstudentdata
export function ShowStudentsData() {
    return (
        <Table data={object('data', data)} />   //here using decorators knob using object 
    )
}

//second story for empty table

export function EmptyData() {
    return (
        <Table />
    )
}

