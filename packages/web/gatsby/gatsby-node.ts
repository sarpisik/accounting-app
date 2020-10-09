import _ from 'lodash';
import path from 'path';
import { createFilePath } from 'gatsby-source-filesystem';
import { fmImagesToRelative } from 'gatsby-remark-relative-images';
import { GatsbyNode } from 'gatsby';
import { MarkdownPagesQuery } from '../src/types/generated';

export const createPages: GatsbyNode['createPages'] = ({
    actions,
    graphql,
}) => {
    const { createPage } = actions;

    return graphql<MarkdownPagesQuery>(`
        query MarkdownPages {
            pages: allMarkdownRemark(limit: 1000) {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            tags
                            templateKey
                        }
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            result.errors.forEach((e) => console.error(e.toString()));
            return Promise.reject(result.errors);
        }

        const posts = result.data.pages.edges;

        posts.forEach((edge) => {
            const id = edge.node.id;
            createPage({
                path: edge.node.fields.slug,
                // @ts-ignore
                tags: edge.node.frontmatter.tags,
                component: path.resolve(
                    `src/templates/${String(
                        edge.node.frontmatter.templateKey
                    )}.tsx`
                ),
                // additional data can be passed via context
                context: { id },
            });
        });

        // Tag pages:
        let tags = [];
        // Iterate through each post, putting all found tags into `tags`
        posts.forEach((edge) => {
            if (_.get(edge, `node.frontmatter.tags`)) {
                tags = tags.concat(edge.node.frontmatter.tags);
            }
        });
        // Eliminate duplicate tags
        tags = _.uniq(tags);

        // Make tag pages
        tags.forEach((tag) => {
            const tagPath = `/tags/${_.kebabCase(tag)}/`;

            createPage({
                path: tagPath,
                component: path.resolve(`src/templates/tags.tsx`),
                context: {
                    tag,
                },
            });
        });
    });
};

export const onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    fmImagesToRelative(node); // convert image paths for gatsby images

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });
        console.log(node);
        console.log(value);
        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
};
