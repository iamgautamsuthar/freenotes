import React from 'react'
import FolderCard from '@/components/folderCard'
import Container from '@/components/container'
import { subject } from '@/database/db'

const AllSem = ({ params }) => {
    let sub;
    if (params.allsem == 1) {
        sub = subject.sem1;
    } else if (params.allsem == 2) {
        sub = subject.sem2;
    } else if (params.allsem == 3) {
        sub = subject.sem3;
    } else {
        return (
            <Container child={
                <h1 className='text-4xl'>NOT AVAILABLE</h1>
            } />
        )
    }

    return (
        <Container child={
            sub.map((items, index) => (
                <FolderCard key={index} name={items.text} url={items.link} />
            ))
        } />
    )

}

export default AllSem