import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content from '../components/Content';
import { NotFoundPageTemplateQuery } from '../types/generated';

interface TemplateProps {
    title: string;
    content: string;
}

export function NotFoundPageTemplate(props: TemplateProps): ReactElement {
    const { title, content } = props;

    return (
        <div>
            <h1>{title}</h1>
            <Content content={content} />
        </div>
    );
}

interface Props {
    data: NotFoundPageTemplateQuery;
}

export default function NotFoundPage({ data }: Props): ReactElement {
    const title = data.markdownRemark?.frontmatter?.title?.en || '';
    const content = data.markdownRemark?.frontmatter?.content?.en || '';

    return (
        <Layout>
            <NotFoundPageTemplate title={title} content={content} />
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
                content {
                    en
                }
            }
        }
    }
`;
