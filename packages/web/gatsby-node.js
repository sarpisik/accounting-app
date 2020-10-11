const path = require('path');
// const _ = require('lodash');

const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

// const config = require('./gatsby-config');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    return graphql(`
        {
            allMarkdownRemark(limit: 1000) {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            templateKey
                            slug {
                                en
                                tr
                            }
                        }
                    }
                }
            }
            site {
                siteMetadata {
                    locales
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            result.errors.forEach((e) => console.error(e.toString()));
            return Promise.reject(result.errors);
        }
        const posts = result.data.allMarkdownRemark.edges;
        const locales = result.data.site.siteMetadata.locales;

        posts.forEach((edge) => {
            const node = edge.node;
            const id = node.id;
            const { templateKey, slug } = node.frontmatter;

            locales.forEach((locale) => {
                const isLandingPage = templateKey === 'index-page';
                const isBlogPost = templateKey === 'blog-post';
                const _path = `/${locale.concat(isBlogPost ? '/blog' : '')}/${
                    isLandingPage ? '' : slug[locale]
                }`;
                createPage({
                    path: _path,
                    component: path.resolve(
                        `src/templates/${String(templateKey)}.tsx`
                    ),
                    // additional data can be passed via context
                    context: { id, locale },
                });
            });
        });
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    fmImagesToRelative(node); // convert image paths for gatsby images

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });
        // console.log(value);
        // console.log(node);
        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
};

// exports.onCreatePage = async ({
//     page,
//     actions: { createPage, deletePage },
// }) => {
//     // console.log(page);
//     // Delete the original page (since we are gonna create localized versions of it)
//     await deletePage(page);

//     // Create one page for each locale
//     await Promise.all(
//         config.siteMetadata.locales.map(async (lang) => {
//             const localizedPath = `/${lang}${page.path}`;

//             await createPage({
//                 ...page,
//                 path: localizedPath,
//             });
//         })
//     );
// };
