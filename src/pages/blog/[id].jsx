import React from 'react'
import Head from 'next/head'


import Layout from '../../components/Layout';

export default function PageTest({ data }) {

    return (
        <Layout>
            <Head>
                <title>{data.id} - {data.title}</title>
                <meta name="description" content={`Bablabla ${data.title}`}></meta>
            </Head>

            <h1 className='title'>{data.id} - {data.title}</h1>
            <div>{data.body}</div>

        </Layout>
    );
}


export async function getStaticPaths() {

    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        const paths = data.map(({ id }) => ({
            params: { id: `${id}` }
        }))

        return {
            paths,
            fallback: false
        }
    } catch (error) {
        console.log(error.message);
    }
}


export async function getStaticProps({ params }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id)
    const data = await res.json()

    return {
        props: {
            data,
        },
    }
}




