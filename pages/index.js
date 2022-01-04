import Head from "next/head";
import Link from "next/link";
import { sanityClient, urlFor } from "../lib/sanity";

const recipesQuery = `*[_type == "recipe"]{
  _id,
  name,
  slug,
  mainImage,
 
  chef->,
  instructions,
  description,
  likes,
}`;

const SLIDE_COUNT = 2;
const slides = Array.from(Array(SLIDE_COUNT).keys());
export default function Home({ recipes }) {
  return (
    <>
      <div>
        <Head>
          <title>Mehdy Kitchen 🍍</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container">
          <div className="mainheading">
            <h1 className="sitetitle">Welcome to Mehdy Kitchen 🍍</h1>
            <p className="lead">Find your recipes</p>
          </div>
          <section class="featured-posts">
            <div class="section-title">
              <h2>
                <span>Recipes</span>
              </h2>
            </div>
            <div className="card-columns listfeaturedtag">
              {recipes?.length > 0 &&
                recipes.map((recipe) => (
                  <div key={recipe._id} className="card">
                    <div class="row">
                      <div class="col-md-5 wrapthumbnail">
                        <Link href={`/recipes/${recipe.slug.current}`}>
                          <div
                            class="thumbnail"
                            style={{
                              backgroundImage: `url(${urlFor(
                                recipe.mainImage
                              ).url()})`,
                            }}
                          ></div>
                        </Link>
                      </div>
                      <div class="col-md-7">
                        <div class="card-block">
                          <h2 class="card-title">
                            <Link href={`/recipes/${recipe.slug.current}`}>
                              {recipe.name}
                            </Link>
                          </h2>
                          <h4 class="card-text">{recipe.description}</h4>
                          <div class="metafooter">
                            <div class="wrapfooter">
                              <span class="meta-footer-thumb">
                                <a href="author.html">
                                  <img
                                    class="author-thumb"
                                    src={urlFor(recipe.chef.image).url()}
                                    alt="Sal"
                                  />
                                </a>
                              </span>
                              <span class="author-meta">
                                <span class="post-name">
                                  <a href="author.html">{recipe.chef.name}</a>
                                </span>
                                <br />
                                <span class="post-date">
                                  {recipe.chef._updatedAt}
                                </span>
                                <span class="dot"></span>
                                <span class="post-read">Last update</span>
                              </span>
                              <span class="post-read-more">
                                <a href="post.html" title="Read Story">
                                  <svg
                                    class="svgIcon-use"
                                    width="25"
                                    height="25"
                                    viewbox="0 0 25 25"
                                  >
                                    <path
                                      d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                                      fill-rule="evenodd"
                                    ></path>
                                  </svg>
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export async function getStaticProps() {
  const recipes = await sanityClient.fetch(recipesQuery);
  return { props: { recipes } };
}
