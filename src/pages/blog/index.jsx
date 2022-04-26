import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/Layout';


export default function Blog({ posts }) {

    return (
        <Layout>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Blablabla contact"></meta>
            </Head>

            <h1 className='title'>Contact</h1>

            {posts.map((post) => (
                <div key={post.id}>
                    <Link href={`/blog/${post.id}`}>
                        <h4>{post.id} - {post.title}</h4>
                    </Link>
                    <li >{post.body}</li>
                </div>
            ))}

        </Layout>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    const posts = await res.json()

    return {
        props: {
            posts,
        },
    }
}


