import React from 'react';
import { createMuiTheme, MuiThemeProvider, makeStyles } from "@material-ui/core/styles";
import './App.css';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1035,
      lg: 1280,
      xl: 1920,
    }
  }
});

const Name = styled.h3({
  fontVariant: 'small-caps',
  fontFamily:'Raleway'
});
const Link = styled.a({
  textDecoration: 'none',
});
const Line = styled.hr({
  width: '50%',
  opacity: '0.1',
});
const Summary = styled.span({
  padding:'1em',
  textAlign: 'center',
  fontSize: '0.6em',
});
const Heading = styled.h6({
  textTransform: 'uppercase',
  fontWeight: 'bold',
  paddingBottom: '0.5em',
  margin: '1.5em',
  borderBottom: '0.01em solid #888',
  textAlign: 'left',
});

const ListMain = styled.ul({
  fontSize: '0.6em',
  listStyleType: 'square',
});
const ListSub = styled.ul({
  listStyleType: 'circle',
  paddingTop: '0.1em',
});
const ListInfo = styled.ul({
  listStyleType: 'disc',
});
const ListItem = styled.li({
  paddingTop: '0.5em',
});

const useStyles = makeStyles({
  root: {
    textAlign: 'justify',
    background: 'white',
    padding: '1em',
    height: '100vh',
    fontFamily:'Lato',
    overflowWrap: 'break-word',
  },
  content: {
    background: 'white',
    color: '#484848',
  },
  title: {
    background: '#484848',
    color: 'white',
    fontSize: '1.6em',
    textAlign: 'center',
  },
  left: {
    fontSize: '1.7em',
  },
  right: {
    fontSize: '1.7em',
    background: '#c1f7e5',
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
    <Container className={classes.root}>
    <Grid container className={classes.content} spacing={2} >

      <Grid className={classes.title} item xs={12}>
        <Name>Shalette D'Souza</Name>
        <p>Front end developer &amp; student at BMSIT&nbsp;&&nbsp;M</p>
        <Line></Line>
        <Summary>
          <b>Phone Number:</b><Link target="_blank" style={{color: "#d3d3d3"}} href="tel:+918861556855">&nbsp;&nbsp;+91&nbsp;8861556855</Link> <br/>
          <b>Email:</b><Link target="_blank" style={{color: "#d3d3d3"}} href="mailto:shalettedsouza@gmail.com">&nbsp;&nbsp;shalettedsouza@gmail.com</Link>
          <br/><br/>
          {/* <center>
            <small>View the most recent version of this resume at <Link style={{color: "#d3d3d3"}} target="_blank" href="https://shalette-resume.herokuapp.com">https://shalette-resume.herokuapp.com
            </Link></small>
          </center> */}
        </Summary>
      </Grid>

      <Grid id="left" className={classes.left} item sm={12} md={5} xs={12}>

      <Heading>Education</Heading>
      <div class="overflow">
        <table>
          <thead><tr><th>Qualification</th><th>Board</th><th>Institute</th><th>Year Of Passing</th><th>Score</th></tr></thead>
          <tbody>
            <tr>
              <td>B.E.</td>
              <td>V.T.U.</td>
              <td>BMS Institute of Technology</td>
              <td>2020 (to be completed)</td>
              <td>8.13 (CGPA up to 6th semester)</td>
            </tr>

            <tr>
              <td>P.U.</td>
              <td>Karnataka</td>
              <td>B.E.L. Composite P.U. College</td>
              <td>2016</td>
              <td>94.3%</td>
            </tr>

            <tr>
              <td>Class 10</td>
              <td>I.C.S.E.</td>
              <td>M.E.S. Kishore Kendra Public School</td>
              <td>2014</td>
              <td>94.3%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Heading>Profile Links</Heading>
      <ListMain>
        <ListItem><b>Linkedin&nbsp;Profile:</b>
          <Link target="_blank" href="https://in.linkedin.com/in/shalette-d-souza">
          &nbsp;https://in.linkedin.com/in/shalette-d-souza</Link>
        </ListItem>
          <ListItem><b>Website:</b>
          <Link target="_blank"  href="https://shalette.github.io/">
          &nbsp;https://shalette.github.io</Link>
        </ListItem>
        <ListItem><b>Github&nbsp;Profile:</b>
          <Link target="_blank" href="https://github.com/Shalette">
          &nbsp;https://github.com/Shalette</Link>
        </ListItem>
        <ListItem><b>Dribbble&nbsp;Profile:</b>
          <Link target="_blank" href="https://www.dribbble.com/Shalette">
          &nbsp;https://www.dribbble.com/Shalette</Link>
        </ListItem>
      </ListMain>

      <Heading>Skills</Heading>
      <ListMain>
        <ListItem><b>Programming Languages: </b>PHP, SQL, HTML, CSS, AJAX, JQuery, JavaScript, Java, Python, C</ListItem>
        <ListItem><b>Frameworks, Libraries and Systems: </b>Google Materialize, Bootstrap, Material UI, CSS Grid, Flexbox, Django, React, Laravel, Flask</ListItem>
        <ListItem><b>Software: </b>Inkscape, GIMP, Adobe XD, Adobe Photoshop, Adobe Illustrator</ListItem>
        <ListItem><b>Miscellaneous: </b>
          <ListSub>
            <ListItem>Strong Work Ethic</ListItem>
            <ListItem>Thirst For Learning</ListItem>
            <ListItem>Adaptability</ListItem>
            <ListItem>Communication Skills</ListItem>
            <ListItem>Creativity</ListItem>
          </ListSub>
        </ListItem>
      </ListMain>

      <Heading>Activities</Heading>
      <ListMain>
        <ListItem>Fiction Writing: <Link target="_blank" href="https://artinwords.home.blog/">https://artinwords.home.blog</Link></ListItem>
        <ListItem>Book Cover Designing: Created all covers posted on the blog listed above</ListItem>
        <ListItem>Solo and Choir Singing: Handled roles of an alto, tenor and soprano
          <ListSub>
              <ListItem>Member of Nativity Choir (Non-Profit Organization)</ListItem>
              <ListItem>Singer for events</ListItem>
          </ListSub>
        </ListItem>
        <ListItem>Instrumententalist: Proficient with the keyboard and guitar
          <ListSub>
              <ListItem>Keyboard Player for Nativity Choir</ListItem>
              <ListItem>Keyboard Player for events</ListItem>
              <ListItem>Guitar Player for events</ListItem>
          </ListSub>
        </ListItem>
      </ListMain>

      <Heading>Workshops&nbsp;&amp; Certifications</Heading>
      <ListMain>
        <ListItem>Google QuikLabs
          <ListSub>
              <ListItem>Baseline: Data, ML, AI <br /><small>Aug 2019</small></ListItem>
              <ListItem>GCP Essentials<br /><small>Apr 2019</small></ListItem>
          </ListSub>
        </ListItem>
        <ListItem>MTA: Introduction to Programming Using JavaScript<br /><small>Feb 2019 </small></ListItem>
        <ListItem>Internshala - Web Development<br /><small>Sept 2018</small></ListItem>
        <ListItem>5 Days Open Course on Understanding Blockchain at BMSIT&M<br /><small>Aug 2018</small>
        </ListItem>
      </ListMain>
      </Grid>

    
      <Grid id="right" className={classes.right} item sm={12} md={7} xs={12}>
      <Heading>Experience</Heading>
      <ListMain>

      <ListItem><b>Cloud Support Intern<br /><small>Informatica | Jan 2020 - Ongoing</small></b></ListItem>
      <ListInfo>
        <ListItem>Working with cloud based software and replicating customer issues in order to resolve them</ListItem>
        <ListItem>Trained in Power Center & Cloud Data Integration</ListItem>
        <ListItem>Learned working with Amazon ecosystems including S3, Salesforce and its related components such as Outbound messaging.</ListItem>
      </ListInfo>

      <ListItem><b>Front-end Developer<br /><small>Urbanstop | Nov 2019 - Jan 2020</small></b></ListItem>
      <ListInfo>
        <ListItem>Created several screens using React Native</ListItem>
        <ListItem>Learned how to apply the principles of UX to products</ListItem>
      </ListInfo>

      <ListItem><b>Designer<br/><small>Nativity Church (Non-Profit Organization) | Nov 2019</small></b></ListItem>
      <ListInfo>
        <ListItem>Designed the logo for the carol competition – Noelle Cantora</ListItem>
        <ListItem>Created multiple posters to advertise the competition</ListItem>
        <ListItem>Made certificates and stickers</ListItem>        
      </ListInfo>

      <ListItem><b>Design Intern<br /><small>CocoFresh | Sept 2019</small></b></ListItem>
      <ListInfo>
        <ListItem>Designed the logo for the company, with the input of the founders</ListItem>
        <ListItem>Created the brand stickers that goes on the products being sold</ListItem>
      </ListInfo>

      <ListItem><b>Web Development Intern<br /><small>Selectiall | Oct 2018 - Dec 2018</small></b></ListItem>
      <ListInfo>
        <ListItem>Site:&nbsp;<Link target="_blank" href="https://selectiall.000webhostapp.com">https://selectiall.000webhostapp.com</Link></ListItem>
        <ListItem>Designed and implemented a database for the site</ListItem>
        <ListItem>Recreated the entire UI of the site using Bootstrap3</ListItem>
        <ListItem>Connected the front end to the back end of the site using PHP</ListItem>
      </ListInfo>

      <ListItem><b>Marketing Intern<br /><small>H.O.P.E. | Jan 2018 - Apr 2018</small></b></ListItem>
      <ListInfo>
        <ListItem>Researched several businesses and communicated with potential business partners via emails and calls</ListItem>
        <ListItem>Coordinated the Designs &amp; Presentations team as its head</ListItem>
        <ListItem>Made HTML emails to inform customers about new developments regarding the product</ListItem>
        <ListItem>Created presentations on Prezi to market new start-up ideas</ListItem>
        <ListItem>Designed posters on Canva to advertise the company and its product</ListItem>
        <ListItem>Wrote engaging content in the form of scripts to hook potential clients</ListItem>
      </ListInfo>

      </ListMain>
      <Heading>Projects</Heading>

      <ListMain>
      <ListItem><b>InfoCrypt<br /><small>Sept 2019 - Ongoing</small></b></ListItem>
      <ListInfo>
        <ListItem>Implemented a basic version of partially homomorphic system (Paillier's Encryption)</ListItem>
        <ListItem>Researching methods to perform machine learning on encrypted data</ListItem>
        <ListItem>Working on a literature survey of existing methods</ListItem>
        <ListItem>Working on a paper that elaborates the methodology of proposed system</ListItem>
      </ListInfo>

      <ListItem><b>Profile Filter<br /><small>July 2019</small></b></ListItem>
      <ListInfo>
        <ListItem>Created a basic filter to search user profiles based on skill set using Laravel</ListItem>
        <ListItem>Implemented Bootstrap4 to create the UI</ListItem>
      </ListInfo>

      <ListItem><b>Sniprise<br /><small>Mar 2019 - May 2019</small></b></ListItem>
      <ListInfo>
        <ListItem>Site:&nbsp;
          <Link target="_blank" href="https://sniprise.herokuapp.com">https://sniprise.herokuapp.com
          </Link></ListItem>
        <ListItem>Created a document summariser that implements the TextRank algorithm</ListItem>
        <ListItem>Used Google Materialize to create the UI of the site</ListItem>
      </ListInfo>

      <ListItem><b>Particle System<br /><small>Apr 2019 - May 2019</small></b></ListItem>
      <ListInfo>
        <ListItem>Studied the properties of particle system</ListItem>
        <ListItem>Created a bubble generator by using OpenGL</ListItem>
      </ListInfo>

      <ListItem><b>Parallax Effect Demonstration<br /><small>Mar 2019</small></b></ListItem>
      <ListInfo>
        <ListItem>Site:&nbsp;
          <Link target="_blank" href="https://parallax-scene.netlify.com">https://parallax-scene.netlify.com
          </Link></ListItem>
        <ListItem>Made layers of a vector image</ListItem>
        <ListItem>Created a web page that implements parallax effect when the user is on a laptop</ListItem>
      </ListInfo>

      <ListItem><b>Complaint Management System<br/><small>Jan 2019 - Mar 2019</small></b></ListItem>
      <ListInfo>
      <ListItem>Site:&nbsp;
          <Link target="_blank" href="https://bmsitcms01.000webhostapp.com/">https://bmsitcms01.000webhostapp.com</Link></ListItem>
        <ListItem>Created the UI for both the student and administrator sides of the site</ListItem>
        <ListItem>Maintained documentation for both UI and working of system</ListItem>
      </ListInfo>
      </ListMain>

      </Grid>

      </Grid>
    </Container>
    </MuiThemeProvider>
  );
}
