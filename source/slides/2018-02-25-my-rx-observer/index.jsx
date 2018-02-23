import React from 'react';
import { render } from 'react-dom';
import { format } from 'date-fns';
import { Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill, Heading, Image, Layout, Link, List, ListItem, Markdown, MarkdownSlides, Quote, Slide, SlideSet, Table, TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Text } from 'spectacle';
import InstagramEmbed from 'react-instagram-embed';
import createTheme from 'spectacle/lib/themes/default';
import preloader from 'spectacle/lib/utils/preloader';
import GoogleFonts from 'google-fonts';

import 'spectacle/lib/themes/default/index.css';

import sampleRx from './assets/sample-rx.js.code';
import sampleRx2 from './assets/sample-rx2.js.code';
// import samplePackageJson from './assets/sample-package.json.code';
// import sampleWebpackConfig from './assets/sample-webpack.config.js.code';
// import sampleGoogle from './assets/sample-google.js.code';

import bgFood1 from './assets/images/food_1.jpg';
import bgFood2 from './assets/images/food_2.jpg';
import bgFood3 from './assets/images/food_3.jpg';
import bgFood4 from './assets/images/food_4.jpg';
import bgFood5 from './assets/images/food_5.jpg';
import bgSwitch from './assets/images/switch.jpg';
import bgDesk from './assets/images/desk.jpg';
import bgEtc from './assets/images/etc.jpg';
import bgFl1 from './assets/images/fl_1.jpg';
import bgFl2 from './assets/images/fl_2.jpg';
import afx1 from './assets/images/afx1.jpg';
import afx2 from './assets/images/afx2.jpg';

GoogleFonts.add({
  'Open Sans Condensed': ['300', '700'],
  'Lobster Two': ['400', '700'],
  Roboto: ['400', '700'],
  Ubuntu: ['400', '700']
});

const colors = {
  fl: '#d23523',
  bianchi: '#a7e7d8',
  red: '#f44336',
  pink: '#e7a7d8',
  blue: '#a7d8e7',
  green: '#4caf50',
  yellow: '#ffeb3b',
  orange: '#ff5722',
  white: '#f0f0f0',
  black: '#222'
};

const theme = createTheme({
  primary: colors.blue,
  secondary: colors.black
}, {
  primary: 'Roboto',
  secondary: 'Lobster Two',
  tertiary: 'Ubuntu',
  quartenary: 'monospace'
});

const images = { bgFood1, bgFood2, bgFood3, bgFood4, bgFood5, bgFl1, bgFl2, bgSwitch, bgDesk, bgEtc, afx1, afx2 };
preloader(images);
const birthDay = new Date(Date.now() - new Date(1982, 9 - 1, 24, 6, 0, 0).getTime());

function Presentation () {
  return <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
      <Slide transition={["zoom", "slide"]} bgImage={images.bgFood1} bgDarken={0.3}>
        <Heading size={1} fit lineHeight={1} textColor={colors.white}>
          RxJSでWebサイトにノリを出す
        </Heading>
        <Heading size={1} fit lineHeight={1} textColor={colors.white}>
          ~跳ねるボール、エヴァンゲリオン、Flying Lotusに学ぶ~
        </Heading>
        <Text textSize="1.5em" margin="20px 0px 0px" textColor={colors.white} bold>
          2018/02/25 (日) Nagoya.JS #4
        </Text>
      </Slide>
      <Slide transition={["slide"]} bgImage={images.bgDesk} bgDarken={0.5}>
        <Heading margin="0 0 50px" size={2} textColor={colors.white}>
          わたし 😎
        </Heading>
        <Heading size={4} textColor={colors.white}>
          安部 亨佑 {birthDay.getYear() - 70}
          {format(birthDay, "歳Mヶ月D日")}
        </Heading>
        <Text margin="5px 0 0" textColor={colors.white} textSize="1em">
          GitHub: <a href="http://github.com/kaave/" style={{ color: "white" }}>
            kaave
          </a> / Twitter: <a href="https://twitter.com/junkjunctions" style={{ color: "white" }}>
            @junkjunctions
          </a>
        </Text>
        <Text margin="30px 0px 0px" textColor={colors.white}>
          🏢 株式会社FRAME LUNCH / WEB ENGINEER
        </Text>
        <Text fit textColor={colors.white}>
          (基本はWeb屋ですが、大須で撮影できるスタジオやってます)
        </Text>
        <Text margin="40px 0px 0px" textColor={colors.white}>
          🖌 IntelliJ IDEA : Vim : VSCode = 1 : 1 : 8くらい
        </Text>
        <Text margin="40px 0px 0px" textColor={colors.white}>
          ⌨ Dell → Epson → HHKB Pro JP → ErgoDox
        </Text>
        <Text margin="40px 0px 0px" textColor={colors.white}>
          💕 音楽鑑賞 / 自転車 / 筋トレ / 仮想通貨
        </Text>
      </Slide>
      <Slide transition={["slide"]} bgImage={images.bgEtc} bgDarken={0.5}>
        <Text fit textColor={colors.white}>
          (宣伝)スタジオはこんな感じです。よかったら。
        </Text>
        <Layout>
          <Fill>
            <InstagramEmbed url="https://www.instagram.com/p/BTbR7QCFwxk/" maxWidth={160} hideCaption />
            <InstagramEmbed url="https://www.instagram.com/p/BVTuq9glm8q/" maxWidth={160} hideCaption />
          </Fill>
          <Fill>
            <InstagramEmbed url="https://www.instagram.com/p/BTaaKCclm4I/" maxWidth={160} hideCaption />
            <InstagramEmbed url="https://www.instagram.com/p/BSzh5zoFBcr/" maxWidth={160} hideCaption />
          </Fill>
          <Fill>
            <InstagramEmbed url="https://www.instagram.com/p/BTvSAX8FnN_/" maxWidth={160} hideCaption />
            <InstagramEmbed url="https://www.instagram.com/p/BRKMwAiFiQe/" maxWidth={160} hideCaption />
          </Fill>
        </Layout>
      </Slide>
      <Slide transition={["slide", "fade"]} bgColor={colors.black}>
        <Heading size={1} fit textColor={colors.yellow}>
          ⚠️ 今日は90%くらい<br />
          趣味の話しかしません
        </Heading>
      </Slide>
      <Slide transition={["slide"]} bgImage={images.bgFood3} bgDarken={0.5}>
        <Heading size={3} textColor={colors.white}>
          AGENDA
        </Heading>
        <List textColor={colors.white}>
          <ListItem>RxJSの超雑な説明</ListItem>
          <ListItem>RxJSでEasingを使う</ListItem>
          <ListItem>RxJSでAphex Twinのエフェクトを再現</ListItem>
          <ListItem>RxJSでエヴァンゲリオンOPのリズムを再現</ListItem>
          <ListItem>RxJSでFlying LotusのGrooveを拝借</ListItem>
        </List>
      </Slide>
      {/*
        * RxJSの超雑な説明
        */}
      <Slide transition={["slide", "fade"]} bgColor={colors.white}>
        <Heading size={1} fit textColor={colors.black}>
          RxJSの超雑な説明
        </Heading>
      </Slide>
      <Slide transition={["fade"]} bgColor={colors.black}>
        <Heading size={2} fit textColor={colors.pink}>
          RxJSとは？
        </Heading>
        <Appear>
          <Text margin="20px auto" textColor={colors.white}>
            非同期処理の便利ライブラリ
          </Text>
        </Appear>
        <Appear>
          <Text margin="20px auto" textColor={colors.white}>
            DOM操作(+α)のjQuery<br />
            Array, Object操作(+α)のlodash<br />
            非同期処理のRxJS って感じ
          </Text>
        </Appear>
      </Slide>
      <Slide transition={["fade"]} bgColor={colors.blue}>
        <Heading fit size={2} textColor={colors.black}>
          たくさんあるRx○○
        </Heading>
        <Heading size={6}>
          <Link href="http://reactivex.io/languages.html" target="_blank" textColor={colors.black}>
            http://reactivex.io/languages.html
          </Link>
        </Heading>

        <Text bold textAlign="center" margin="30px 0 0">
          RxSwift
        </Text>
        <Text bold textAlign="center" margin="10px 0 0">
          RxKotlin
        </Text>
        <Text bold textAlign="center" margin="10px 0 0">
          RxJava
        </Text>
        <Text bold textAlign="center" margin="10px 0 0">
          Rx.NET
        </Text>
        <Text bold textAlign="center" margin="10px 0 0">
          RxScala
        </Text>
        <Text bold textAlign="center" margin="10px 0 0">
          RxPHP
        </Text>

        <Appear>
          <Text margin="20px auto">
            👉 一度覚えると<br />
            いろんな言語で知識を使いまわせるのでお得
          </Text>
        </Appear>
      </Slide>
      <Slide transition={["slide", "fade"]} bgColor={colors.pink}>
        <Heading fit size={2} textColor={colors.black}>
          こんなふうに書けます<br />
          (クリックイベント)
        </Heading>
        <Appear>
          <CodePane lang="js" source={sampleRx2} margin="20px auto" />
        </Appear>
      </Slide>
      <Slide transition={["slide", "fade"]} bgColor={colors.blue}>
        <Heading fit size={2} textColor={colors.black}>
          こんなふうに書けます<br />
          (1秒後に実行)
        </Heading>
        <Appear>
          <CodePane lang="js" source={sampleRx2} margin="20px auto" />
        </Appear>
        <Appear>
          <Text bold margin="20px auto">
            詳しく聞きたい人は後で聞いてください<br />
            そんなに詳しくないけど
          </Text>
        </Appear>
      </Slide>
      {/*
        * RxJSでEasingを使う
        */}
      <Slide transition={["slide", "fade"]} bgColor={colors.white}>
        <Heading size={1} fit textColor={colors.black}>
          RxJSでEasingを使う
        </Heading>
      </Slide>
      <Slide transition={["fade"]} bgColor={colors.black}>
        <Heading size={2} fit textColor={colors.pink} margin="0 0 30px">
          Easingといったら
        </Heading>
        <Appear>
          <iframe src="http://easings.net/ja" width="100%" height="500px" />
        </Appear>
      </Slide>
      <Slide transition={["slide", "fade"]} bgColor={colors.black}>
        <Heading size={1} fit textColor={colors.yellow}>
          でもRxJSですんなり使うのは面倒
        </Heading>
        <Heading size={2} fit textColor={colors.yellow} margin="30px 0 0">
          っていうか、とくになんも用意されてない
        </Heading>
      </Slide>
      <Slide transition={["slide", "fade"]} bgColor={colors.yellow}>
        <Heading fit size={2} textColor={colors.black}>
          ので作ってみました
        </Heading>
        <Appear>
          <CodePane lang="js" source={sampleRx} margin="20px auto" />
        </Appear>
        <Appear>
          <Text bold margin="20px auto">
            デモです
          </Text>
        </Appear>
      </Slide>
      <Slide transition={["slide", "fade"]} bgColor={colors.black}>
        <Heading size={1} fit textColor={colors.white}>
          もうちょっと洗練させたら配布します
        </Heading>
      </Slide>
      {/*
        * Bouncing ball
        */}
      <Slide transition={["slide", "fade"]} bgColor={colors.black}>
        <Heading size={1} fit textColor={colors.white}>
          Bouncing ball effect
        </Heading>
      </Slide>
      <Slide transition={["slide"]} bgColor={colors.black}>
        <Heading size={1} fit textColor={colors.white}>
          なにそれ
        </Heading>
        <Appear>
          <Text>
            名前の通り、ボールが跳ねるようなエフェクト
          </Text>
        </Appear>
      </Slide>
      {/*
        * RxJSでエヴァンゲリオンOPのリズムを再現
        */}
      <Slide transition={["slide", "fade"]} bgColor={colors.white}>
        <Heading size={1} fit textColor={colors.black}>
          RxJSでエヴァンゲリオンOPのリズムを再現
        </Heading>
      </Slide>
      {/*
        * RxJSでFlying LotusのGrooveを拝借
        */}
      <Slide transition={["slide", "fade"]} bgColor={colors.white}>
        <Heading size={1} fit textColor={colors.black}>
          RxJSでFlying LotusのGrooveを拝借
        </Heading>
      </Slide>
    </Deck>;
}

window.addEventListener('DOMContentLoaded', () => render(
  <Presentation />,
  document.getElementById('mount-point')
));
