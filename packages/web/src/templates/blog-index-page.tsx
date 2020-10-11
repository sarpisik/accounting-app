import { graphql } from 'gatsby';
import React from 'react';
import BlogRoll from '../components/BlogRoll';
import Layout from '../components/Layout';
import { BlogIndexPageTemplateQuery } from '../types/generated';

interface Props {
    data: BlogIndexPageTemplateQuery;
}

export default function BlogIndexPageTemplate({
    data,
}: Props): React.ReactElement {
    const title = data.markdownRemark?.frontmatter?.title?.en;

    return (
        <Layout>
            <div
                className="full-width-image-container margin-top-0"
                style={{
                    backgroundImage: `url('/img/blog-index.jpg')`,
                }}
            >
                <h1
                    className="has-text-weight-bold is-size-1"
                    style={{
                        boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                        backgroundColor: '#f40',
                        color: 'white',
                        padding: '1rem',
                    }}
                >
                    {title}
                </h1>
            </div>
            <section className="section">
                <div className="container">
                    <div className="content">
                        <BlogRoll />
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query BlogIndexPageTemplate {
        markdownRemark(
            frontmatter: { templateKey: { eq: "blog-index-page" } }
        ) {
            frontmatter {
                title {
                    en
                }
            }
        }
    }
`;
