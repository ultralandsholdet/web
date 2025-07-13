import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  descriptionb,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">

                  <div className="tile">
                    <div>
                      <h1 className="title">{mainpitch.title}</h1>
                      <p>Ultralandsholdet er et af tre danske ultralandshold - landshold i discipliner længere end marathon.</p>
                      <p>
                        <ul>
                          <li><Link to="https://www.facebook.com/ultralandsholdet"><b>Ultralandsholdet</b></Link>
                            <p>
                              Deltager i <Link to="https://iau-ultramarathon.org/iau-championships">IAU</Link> mesterskaber - 50 km, 100 km og 24 timer under <Link to="https://dansk-atletik.dk/atleter/ultraloeb/">DAF</Link>. Landstræner: <Link to="https://www.facebook.com/soren.raarup">Søren Raarup</Link>
                            </p> 
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>

                  <p></p> 
                  <div className="tile">
                    <div>
                      <p className="subtitle">Andre danske ultralandshold</p>
                      <p>
                        <ul>
                          <li><Link to="https://www.facebook.com/profile.php?id=61550677787724"><b>Multidagslandsholdet</b></Link>
                            <p>
                              Deltager i <Link to="https://www.gomu.org">Gomu</Link> mesterskaber - 48 timer og 6 dage. Landstræner: <Link to="https://www.facebook.com/jesperkennolsen">Jesper Kenn Olsen</Link>
                            </p>
                          </li>
                          <li><Link to="https://www.backyardultra.dk/tennessee/"><b>Backyard Ultra landsholdet</b></Link>
                            <p>
                              Deltager i semifinalen til <Link to="https://bigsbackyardultra.com/races/big-dogs-backyard-ultra-individual-world-championships/">Big Dog’s Backyard Ultra</Link> Individual World Championships under <Link to="https://www.backyardultra.dk/">Backyard Ultra Danmark</Link>. Team Manager: <Link to="https://www.facebook.com/KlingenbergMorten">Morten Klingenberg</Link>
                            </p>
                          </li>
                          <li><Link to="https://www.facebook.com/traillandsholdet"><b>Traillandsholdet</b></Link>
                            <p>
                              Deltager i <Link to="https://iau-ultramarathon.org/d-trail.html">IAU Trail- og bjerg</Link> mesterskaber (varetaget af WMRA og iTra) under <Link to="https://dansk-atletik.dk/atleter/trail-og-bjergloeb/">DAF</Link>. Landstræner: <Link to="https://www.facebook.com/sr.lobecoach">Søren Rasmussen</Link>
                            </p> 
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>

                  <p></p> 
                  <div className="tile">
                    <div>
                      <p className="title">{heading}</p>
                      <p>Ultralandsholdets ledelse står for udtagelse af løbere til mesterskaberne og administrationen bag dem.</p>                      

                      <p className="subtitle">Jeg vil også gerne med ultralandsholdet til VM eller EM. Hvordan kommer jeg lige det?</p>
                      <p>Du kvalificerer dig til stævnet ved at løbe en kvalificerende tid/distance. 
                        <br/>Derefter søger du om at komme med via <Link to="staevner2025">stævnesiden</Link>, hvor du også finder mere om kvalifikationskrav.
                      </p>

                      <p className="subtitle">Hvornår afholdes VM og EM?</p>
                      <p>Tommelfingerregel:
                        <br/>VM 100 km i lige år. EM ulige år.
                        <br/>VM 50 km og 24 timer i ulige år. EM lige år. 
                        <br/>Det er en fordel at blive kvalificeret året før VM, da det giver ro på træningen i VM året og da der ikke er mange løb at kvalificere sig i.
                      </p>

                      <p className="subtitle">Hvem er gode nok til VM?</p>
                      <p>50 km: Du finder dem på
                        <ul>
                          <li>Statletik Marathon: <Link to="https://www.statletik.eu/db/yearden.php?Gren=200&gender=1&top=50">M</Link>, <Link to="https://www.statletik.eu/db/yearden.php?Gren=200&gender=2&top=50">K</Link></li>
                          <li>DUV 50 km: <Link to="https://statistik.d-u-v.org/getintbestlist.php?year=all&dist=50km&gender=M&nat=DEN">M</Link>, <Link to="https://statistik.d-u-v.org/getintbestlist.php?year=all&dist=50km&gender=W&nat=DEN">K</Link></li>
                        </ul> 
                      </p>
                      <p>100 km: Du finder dem på
                        <ul>
                          <li>DUV 6 timer: <Link to="https://statistik.d-u-v.org/getintbestlist.php?year=all&dist=6h&gender=M&nat=DEN">M</Link>, <Link to="https://statistik.d-u-v.org/getintbestlist.php?year=all&dist=6h&gender=W&nat=DEN">K</Link></li>
                          <li>DUV 100 km: <Link to="https://statistik.d-u-v.org/getintbestlist.php?year=all&dist=100km&gender=M&nat=DEN">M</Link>, <Link to="https://statistik.d-u-v.org/getintbestlist.php?year=all&dist=100km&gender=W&nat=DEN">K</Link></li>
                        </ul> 
                      </p>
                      <p>24 timer: Du finder dem på
                        <ul>
                          <li>DUV 24 timer: <Link to="https://statistik.d-u-v.org/getintbestlist.php?year=all&dist=24h&gender=M&nat=DEN">M</Link>, <Link to="https://statistik.d-u-v.org/getintbestlist.php?year=all&dist=24h&gender=W&nat=DEN">K</Link></li>
                        </ul> 
                      </p>

                    </div>
                  </div>

                  <p></p> 
                  <div className="tile">
                    <div>
                      <p className="subtitle">Hvordan kan jeg blive lige så god?</p>
                      <p>Meld dig ind i en klub, hvor de gode i dit område løber og deltag i de løb de løber. Find dem i listerne her over.
                        <br/>Hvis du fokuserer på 50 km skal du være hurtig
                        <br/>Hvis du fokuserer på 24 timer skal du være udholdende - både fysisk og mentalt
                        <br/>Hvis du fokuserer på 100 km skal du både være hurtig og udholdende
                      </p>

                      <p className="subtitle">Hvilket program/træner bør jeg følge/få?</p>
                      <p>Til 50 km følg/få et/en marathon program/træner
                        <br/>Til 24 timer følg/få et/en ultra program/træner
                      </p>

                      <p className="subtitle">Hvor finder jeg ultraløb, når jeg skal teste eller kvalificere mig?</p>
                      <ul>
                        <li><Link to="https://ultralob.dk/">Danske løb</Link></li>
                        <li><Link to="https://statistik.d-u-v.org/calendar.php">Udenlandske løb</Link></li>
                      </ul>
                      <p>I begge tilfælde kik efter flade løb (modsat bjerg/trail) eller se hvilke løb de hurtige har løbet.</p>

                      <p className="subtitle">Er jeg gammel nok eller for gammel til landsholdet?</p>
                      <p>I Sverige har de en ultra elite løber, der startede med ultra da han var 17 år og kom på landsholdet få år efter.
                        <br/>Her i Danmark har vi haft en løber på 56 år på landsholdet.
                      </p>
                    </div>
                  </div>

                  <p></p> 
                  <div className="tile">
                    <div>
                    </div>
                  </div>

                  <p></p> 
                  <div className="tile">
                    <div>
                      <p className="subtitle">Hvorfor er 48 timer og 6 dage ikke under IAU?</p>
                      <p>
                        Det er nok bare et spørgsmål om efterspørgsel. Gomu gør arbejdet inden da. <br></br>
                        Måske delegerer IAU så arbejdet til Gomu.<br></br>
                        Hvis det sker at IAU overtager, så kommer diciplinerne også under DAF, da IAU er under <Link to="https://worldathletics.org/">WA</Link>, som varetages af DAF i Danmark</p>
                      <p></p>
                      <p>Fusioneres Multidagslandsholdet så med Ultralandsholdet?</p>
                      <p>Næppe - det er arbejdsbyrden for stor til, men det bliver også en del af (eller delegeres af) DAF på samme måde som Trail blev det.</p>
                    </div>
                  </div>
                  <div className="tile">
                    <div>
                      <p className="subtitle">Hvorfor er BYU ikke under IAU?</p>
                      <p>BYU er et privat initiativ, der selv har defineret regler i modsætning til regler fra for eksempel <Link to="https://worldathletics.org/">WA</Link> </p>
                    </div>
                  </div>

                  {/* <Features gridItems={intro.blurbs} /> */}
                  {/* <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div> */}
                  {/* <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  descriptionb: PropTypes.object,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        descriptionb={frontmatter.descriptionb}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
          description2
        }
        descriptionb {
          desc1
          desc2
          desc3
          desc4
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
