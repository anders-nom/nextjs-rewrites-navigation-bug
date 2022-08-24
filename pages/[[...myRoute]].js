import React from 'react';
import Link from "next/link";

const MyComponent = ({ route }) => {
    return (
        <div>
            <Link href={"/page1"}>
                {'Page 1'}
            </Link>
            <span>{" | "}</span>
            <Link href={"/page2"}>
                {'Page 2'}
            </Link>
            <br/><br/>
            <div>{`Current page: ${route}`}</div>
            <br/><br/>
            <div>{'To reproduce the bug: Click a link, refresh the page (F5) and navigate back with the back button.' +
                ' Observe that the page props does not update to correspond to the previous page, if any rewrites are present in next.config.js'}</div>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const route = context?.params?.myRoute?.join?.('/') || '/';

    return {
        props: { route },
    };
};

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    };
};

export default MyComponent;
