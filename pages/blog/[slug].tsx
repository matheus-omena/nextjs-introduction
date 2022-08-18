import { GetStaticPaths, GetStaticProps } from "next";

export default function BlogPost() {
    return <h1>Hello</h1>
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            date: new Date().toISOString()
        },
        revalidate: 5
    };
}