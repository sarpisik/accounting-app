import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { NotFoundPageTemplateQuery } from '../types/generated';

interface TemplateProps {
    title: string;
}

export function NotFoundPageTemplate(props: TemplateProps): ReactElement {
    const { title } = props;

    return (
        <div>
            <h1>{title}</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
    );
}

interface Props {
    data: NotFoundPageTemplateQuery;
}

export default function NotFoundPage({ data }: Props): ReactElement {
    const title = data.markdownRemark?.frontmatter?.title?.en || '';

    return (
        <Layout>
            <NotFoundPageTemplate title={title} />
        </Layout>
    );
}

export const pageQuery = graphql`
    query NotFoundPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "404-page" } }) {
            frontmatter {
                title {
                    en
                }
            }
        }
    }
`;
