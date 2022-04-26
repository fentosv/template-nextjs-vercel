import React from 'react'
import Head from 'next/head'

import Layout from '../components/Layout';

import toast from 'react-hot-toast';

export default function Home() {

    const toastExample = () => {
        toast((t) => (
            <div>
                <div>
                    <div>
                        Something <strong>«text»</strong>,
                    </div>
                    <div>
                        are you sure?
                    </div>
                </div>
                <div >
                    <button
                        onClick={() => {
                            toast.dismiss(t.id)
                        }}>
                        Confirm
                    </button>
                    <button

                        onClick={() =>
                            toast.dismiss(t.id)
                        }>
                        Cancel
                    </button>
                </div>
            </div>
        ),
            {
                position: "bottom-center",
                icon: '🤔',
                duration: 30000
            }
        );
    }


    return (
        <Layout>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home blablabla"></meta>
            </Head>

            <h1 className='title'>Home</h1>

            <button
                onClick={toastExample}
            >Click to toast!</button>

        </Layout>
    );
}