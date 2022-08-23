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
            <div>{`Current page: ${route}`}</div>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const route = context?.params?.myRoute.join('/');

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
