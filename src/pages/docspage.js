import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from "../components/layout";
import Container from "../components/container";
import Img from 'gatsby-image';
import SEO from '../components/seo';

const BlogPage = ({data}) => {
    return (
        <Layout>
            {/*<Breadcrumb>*/}
                {/*<h2>Blog</h2>*/}
            {/*</Breadcrumb>*/}
            <SEO title="Documentation" />
            <div className="blog-list-container">
                <Container type="s">
                    { data.allMarkdownRemark.edges.map(post => (
                        <div className="blog-post" key={post.node.id}>
                            <div className="image-section">
                                <Link to={post.node.fields.slug}>
                                    { post.node.frontmatter.image &&
                                    <img src={post.node.frontmatter.image} alt={post.node.frontmatter.title} />
                                    }
                                </Link>
                            </div>
                            <div className="content-section">
                                <h3><Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link></h3>
                                <p>
                                    <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date} in
                                        <Link to={'blog/category/'+ post.node.frontmatter.category}> {post.node.frontmatter.category}</Link></small>
                                </p>
                                <p>
                                    {post.node.excerpt}
                                </p>
                                <Link to={post.node.fields.slug}>Read more</Link>
                            </div>
                        </div>
                    )) }
                </Container>
            </div>
        </Layout>
    )
}

export const PostQuery = graphql`
    query DocsIndexQuery {
        allMarkdownRemark(
            sort: {fields: [frontmatter___updated], order: DESC}, limit: 10
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        updated(formatString: "DD MMMM, YYYY")
                        author
                        category
                    }
                    excerpt
                    fields{
                        slug
                    }
                }
            }
        }
    }
`

export default BlogPage
