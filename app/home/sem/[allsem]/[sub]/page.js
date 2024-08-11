import React from 'react'
import Container from '@/components/container'
import PdfCard from '@/components/pdfCard'
import { subject } from '@/database/db'

const sem_list = [
    ...subject.sem1,
    ...subject.sem2,
    ...subject.sem3
];

const Subject = ({ params }) => {
    const subj = sem_list.filter(it => it.urlName == params.sub)
    if (!subj.length || !Array.isArray(subj[0].pdf)) {
        return (
            <Container child={
                <h1 className='text-4xl'>NOT AVAILABLE</h1>
            } />
        )
    }

    // return <pre>{JSON.stringify(subj, null, 2)}</pre>


    return (
        <Container child={
            subj[0].pdf.map((items, index) => (
                <PdfCard key={index} name={items.text} url={items.link} />
            ))
        } />
    )
}

export default Subject