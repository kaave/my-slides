import React from 'react';
import { render } from 'react-dom';
import { Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill, Heading, Image, Layout, Link, List, ListItem, Markdown, MarkdownSlides, Quote, Slide, SlideSet, Table, TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Text } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import createTheme from 'spectacle/lib/themes/default';
import preloader from 'spectacle/lib/utils/preloader';
import GoogleFonts from 'google-fonts';

import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

import code from './assets/code.js.code';
import city from './assets/city.jpg';
import kat from './assets/kat.png';
import logo from './assets/formidable-logo.svg';
import markdown from './assets/markdown.png';

GoogleFonts.add({
  'Open Sans Condensed': ['300', '700'],
  'Lobster Two': ['400', '700'],
  Roboto: ['400', '700'],
  Ubuntu: ['400', '700']
});
const theme = createTheme({
  primary: '#d23523',   // framelunch theme
  secondary: '#f0f',
  tertiary: '#23d277',
  quartenary: '#2e2e2e'
}, {
  primary: 'Ubuntu',
  secondary: 'Lobster Two',
  tertiary: 'Roboto',
  quartenary: 'monospace'
});

const images = { city, kat, logo, markdown };
preloader(images);

function Presentation () {
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide transition={['zoom']} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="#f0f0f0">
          Spectacle
        </Heading>
        <Heading size={1} fit caps textColor="quartenary">
          A ReactJS Presentation Library
        </Heading>
        <Heading size={1} fit caps textColor="black">
          Where You Can Write Your Decks In JSX
        </Heading>
        <Link href="https://github.com/FormidableLabs/spectacle">
          <Text bold caps textColor="secondary">View on Github</Text>
        </Link>
        <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
      </Slide>
      <Slide
        id="wait-what"
        transition={['slide']}
        bgColor="black"
        notes="You can even put notes on your slide. How awesome is that?"
      >
        <Image src={images.kat.replace('/', '')} margin="0px auto 40px" height="293px" />
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Wait what?
        </Heading>
      </Slide>
      <CodeSlide
        transition={[]}
        lang="js"
        code={code}
        ranges={[
          { loc: [0, 1], title: 'The Beginning' },
          { loc: [1, 2] },
          { loc: [1, 2], note: 'Heres a note!' },
          { loc: [2, 3] },
          { loc: [4, 7], image: images.city.replace('/', '') },
          { loc: [8, 10] }
          // ...
        ]}
      />
      <Slide>
        <ComponentPlayground
          theme="dark"
        />
      </Slide>
      <Slide transition={['slide']} bgImage={images.city.replace('/', '')} bgDarken={0.75}>
        <Appear fid="1">
          <Heading size={1} caps fit textColor="primary">
            Full Width
          </Heading>
        </Appear>
        <Appear fid="2">
          <Heading size={1} caps fit textColor="tertiary">
            Adjustable Darkness
          </Heading>
        </Appear>
        <Appear fid="3">
          <Heading size={1} caps fit textColor="primary">
            Background Imagery
          </Heading>
        </Appear>
      </Slide>
      <Slide transition={['zoom', 'fade']} bgColor="primary">
        <Heading caps fit>Flexible Layouts</Heading>
        <Layout>
          <Fill>
            <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
              Left
            </Heading>
          </Fill>
          <Fill>
            <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
              Right
            </Heading>
          </Fill>
        </Layout>
      </Slide>
      <Slide transition={['slide']} bgColor="black">
        <BlockQuote>
          <Quote>Wonderfully formatted quotes</Quote>
          <Cite>Ken Wheeler</Cite>
        </BlockQuote>
      </Slide>
      <Slide transition={['spin', 'zoom']} bgColor="tertiary">
        <Heading caps fit size={1} textColor="primary">
          Inline Markdown
        </Heading>
        <Markdown>
          {`
  ![Markdown Logo](${images.markdown.replace('/', '')})
  You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
  * Lists too!
  * With ~~strikethrough~~ and _italic_
  * And let's not forget **bold**
            `}
        </Markdown>
      </Slide>
      {
        MarkdownSlides`
#### Create Multiple Slides in Markdown
All the same tags and elements supported in <Markdown /> are supported in MarkdownSlides.
---
Slides are separated with **three dashes** and can be used _anywhere_ in the deck. The markdown can either be:
* A Tagged Template Literal
* Imported Markdown from another file
          `
      }
      <Slide transition={['slide', 'spin']} bgColor="primary">
        <Heading caps fit size={1} textColor="tertiary">
          Smooth
        </Heading>
        <Heading caps fit size={1} textColor="secondary">
          Combinable Transitions
        </Heading>
      </Slide>
      <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <List>
          <Appear><ListItem>Inline style based theme system</ListItem></Appear>
          <Appear><ListItem>Autofit text</ListItem></Appear>
          <Appear><ListItem>Flexbox layout system</ListItem></Appear>
          <Appear><ListItem>PDF export</ListItem></Appear>
          <Appear><ListItem>And...</ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={['slide']} bgColor="primary">
        <Heading size={1} caps fit textColor="tertiary">
          Your presentations are interactive
        </Heading>
      </Slide>
      <Slide transition={['slide']} bgColor="primary" notes="Hard to find cities without any pizza">
        <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
          Pizza Toppings
        </Heading>
        <Layout>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem />
                <TableHeaderItem>2011</TableHeaderItem>
                <TableHeaderItem>2013</TableHeaderItem>
                <TableHeaderItem>2015</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>None</TableItem>
                <TableItem>61.8%</TableItem>
                <TableItem>39.6%</TableItem>
                <TableItem>35.0%</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Pineapple</TableItem>
                <TableItem>28.3%</TableItem>
                <TableItem>54.5%</TableItem>
                <TableItem>61.5%</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Pepperoni</TableItem>
                <TableItem />
                <TableItem>50.2%</TableItem>
                <TableItem>77.2%</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Olives</TableItem>
                <TableItem />
                <TableItem>24.9%</TableItem>
                <TableItem>55.9%</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Layout>
      </Slide>
      <Slide transition={['spin', 'slide']} bgColor="tertiary">
        <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
          Made with love in Seattle by
        </Heading>
        <Link href="http://www.formidable.com"><Image width="100%" src={images.logo} /></Link>
      </Slide>
    </Deck>
  );
}

window.addEventListener('DOMContentLoaded', () => render(<Presentation />, document.getElementById('mount-point')));

/*

 <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
 <CodePane
 lang="jsx"
 source={require('raw-loader!../assets/deck.example')}
 margin="20px auto"
 />
 </Slide>
 */

