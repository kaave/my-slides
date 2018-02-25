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
import sampleEasing from './assets/sample-easing.js.code';
import sampleBouncing from './assets/sample-bouncing.js.code';
import sampleEva from './assets/sample-eva.js.code';
import sampleFlyingLotus from './assets/sample-fl.js.code';
import sourceEasing from './assets/source-easing.ts.code';
import sourceBouncing from './assets/source-bouncing.ts.code';
import sourceSequencer from './assets/source-sequencer.ts.code';

import bgFood1 from './assets/images/food_1.jpg';
import bgFood2 from './assets/images/food_2.jpg';
import bgFood3 from './assets/images/food_3.jpg';
import bgFood4 from './assets/images/food_4.jpg';
import bgFood5 from './assets/images/food_5.jpg';
import bgSwitch from './assets/images/switch.jpg';
import bgDesk from './assets/images/desk.jpg';
import bgEtc from './assets/images/etc.jpg';
import imageFlBeat from './assets/images/fl_beat.png';
import bgSunset from './assets/images/sunset.jpg';

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

const images = { bgFood1, bgFood2, bgFood3, bgFood4, bgFood5, bgSwitch, bgDesk, bgEtc, bgSunset, imageFlBeat };
preloader(images);
const birthDay = new Date(Date.now() - new Date(1982, 9 - 1, 24, 6, 0, 0).getTime());

function Presentation () {
  return (<Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
    <Slide transition={['zoom', 'slide']} bgImage={images.bgFood1} bgDarken={0.3}>
      <Heading size={1} fit lineHeight={1} textColor={colors.white}>
          RxJSでWebサイトにノリを出す
        </Heading>
      <Heading size={1} fit lineHeight={1} textColor={colors.white}>
          ~スーパーボール、エヴァンゲリオン、Flying Lotusに学ぶ~
        </Heading>
      <Text textSize="1.5em" margin="20px 0px 0px" textColor={colors.white} bold>
          2018/02/25 (日) Nagoya.JS #4
        </Text>
    </Slide>
    <Slide transition={['slide']} bgImage={images.bgDesk} bgDarken={0.5}>
      <Heading margin="0 0 50px" size={2} textColor={colors.white}>
          わたし 😎
        </Heading>
      <Heading size={4} textColor={colors.white}>
          安部 亨佑 {birthDay.getYear() - 70}
        {format(birthDay, '歳Mヶ月D日')}
      </Heading>
      <Text margin="5px 0 0" textColor={colors.white} textSize="1em">
          GitHub: <a href="http://github.com/kaave/" style={{ color: 'white' }}>
            kaave
          </a> / Twitter: <a href="https://twitter.com/junkjunctions" style={{ color: 'white' }}>
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
    <Slide transition={['slide']} bgImage={images.bgEtc} bgDarken={0.5}>
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
          <InstagramEmbed url="https://www.instagram.com/p/BT6OYamFi5Y/" maxWidth={160} hideCaption />
          <InstagramEmbed url="https://www.instagram.com/p/BfiWFFrn5ir/" maxWidth={160} hideCaption />
        </Fill>
      </Layout>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor={colors.black}>
      <Heading size={1} fit textColor={colors.red}>
        今日は最近の趣味を強引にまとめて話すため、<br />
        Rxを曲解したような話を連発するので、<br />
        スタンダードな話を聞きたい人はこのあと個別に聞いてください
      </Heading>
    </Slide>
    <Slide transition={['slide']} bgImage={images.bgFood3} bgDarken={0.5}>
      <Heading size={3} textColor={colors.white}>
          AGENDA
        </Heading>
      <List textColor={colors.white}>
        <ListItem>RxJSの超雑な説明</ListItem>
        <ListItem>RxJSでEasingを使う</ListItem>
        <ListItem>RxJSでスーパーボールを再現</ListItem>
        <ListItem>RxJSでエヴァンゲリオンOPのリズムを再現</ListItem>
        <ListItem>RxJSでFlying LotusのGrooveを拝借</ListItem>
      </List>
    </Slide>
    {/*
      * RxJSの超雑な説明
      */}
    <Slide transition={['slide', 'fade']} bgColor={colors.white}>
      <Heading size={1} fit textColor={colors.black}>
          RxJSの超雑な説明
        </Heading>
    </Slide>
    <Slide transition={['fade']} bgColor={colors.black}>
      <Heading size={2} fit textColor={colors.pink}>
          RxJSとは？
        </Heading>
        <Appear>
          <Text margin="20px auto" textColor={colors.white}>
            非同期処理を抽象化して色々便利にするやつ<br />
            ※ユーザ入力、タイマー系処理、通信処理etcetc
          </Text>
      </Appear>
      <Appear>
        <Text margin="20px auto" textColor={colors.white}>
            DOM操作(+α)のjQuery<br />
            非同期処理のRxJS...かな？めちゃ強引です
        </Text>
      </Appear>
      <Appear>
        <Text margin="20px auto" textColor={colors.white}>
          由来とか歴史も語れるけど今回はスルー
        </Text>
      </Appear>
    </Slide>
    <Slide transition={['fade']} bgColor={colors.blue}>
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
            いろんな言語で知識を使いまわせるのでお得<br />
            モバイルアプリはほぼ必須？<br />
            (最近触ってないからあんま知らないです)
          </Text>
      </Appear>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor={colors.pink}>
      <Heading fit size={2} textColor={colors.black}>
          こんなふうに書けます<br />
          (クリックイベント)
        </Heading>
      <Appear>
        <CodePane lang="js" source={sampleRx} margin="20px auto" />
      </Appear>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor={colors.blue}>
      <Heading fit size={2} textColor={colors.black}>
          こんなふうに書けます<br />
          (1秒後に実行)
        </Heading>
      <Appear>
        <CodePane lang="js" source={sampleRx2} margin="20px auto" />
      </Appear>
    </Slide>
    {/*
      * RxJSでEasingを使う
      */}
    <Slide transition={['slide', 'fade']} bgColor={colors.white}>
      <Heading size={1} fit textColor={colors.black}>
          RxJSでEasingを使う
        </Heading>
    </Slide>
    <Slide transition={['fade']} bgColor={colors.black}>
      <Heading size={2} fit textColor={colors.pink} margin="0 0 30px">
          Easingといったら
        </Heading>
      <Appear>
        <iframe src="http://easings.net/ja" width="100%" height="500px" />
      </Appear>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor={colors.black}>
      <Heading size={1} fit textColor={colors.yellow}>
          でもRxJSですんなり使うのは面倒
        </Heading>
      <Heading size={2} fit textColor={colors.yellow} margin="30px 0 0">
          っていうか、とくになんも用意されてない
        </Heading>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor={colors.yellow}>
      <Heading fit size={2} textColor={colors.black}>
          ので作ってみました
        </Heading>
      <Appear>
        <CodePane lang="js" source={sampleEasing} margin="20px auto" />
      </Appear>
      <Appear>
        <Text bold margin="20px auto">
            デモです
          </Text>
      </Appear>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor={colors.blue}>
      <Heading fit size={2} textColor={colors.black}>
        Observable.easingのソースはこんな感じ
      </Heading>
      <Appear>
        <CodePane lang="js" source={sourceEasing} margin="20px auto" />
      </Appear>
      <Appear>
        <Text textSize="30px">コード少ないでしょ</Text>
      </Appear>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor={colors.black}>
      <Heading size={1} fit textColor={colors.white}>
        もうちょっと洗練させたら配布します
      </Heading>
    </Slide>
    {/*
        * Bouncing ball
        */}
    <Slide transition={['slide', 'fade']} bgColor={colors.white}>
      <Heading size={1} fit textColor={colors.black}>
        RxJSでスーパーボールを再現
      </Heading>
    </Slide>
    <Slide transition={['slide']} bgColor={colors.black}>
      <Heading size={1} fit textColor={colors.white}>
        スーパーボールを再現とわ？
      </Heading>
      <Appear>
        <Text textColor={colors.white} margin="30px 0 0">
          スーパーボールのように<br />
          ビヨンビヨン跳ねるノリをRxJSで再現
          <br />
          文言で語るの微妙なので後ほどデモで
        </Text>
      </Appear>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor={colors.yellow}>
      <Heading fit size={2} textColor={colors.black}>
        コードはこんな感じ
      </Heading>
      <Appear>
        <CodePane lang="js" source={sampleBouncing} margin="20px auto" />
      </Appear>
      <Appear>
        <Text bold margin="20px auto">
          デモです
        </Text>
      </Appear>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor={colors.blue}>
      <Heading fit size={2} textColor={colors.black}>
        Observable.bouncingのソースはこんな感じ
      </Heading>
      <Appear>
        <CodePane lang="js" source={sourceBouncing} margin="20px auto" />
      </Appear>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor={colors.black}>
      <Heading size={1} fit textColor={colors.white}>
        これももうちょっと洗練させたら配布します
      </Heading>
    </Slide>
    {/*
      * RxJSでエヴァンゲリオンOPのリズムを再現
      */}
    <Slide transition={['slide', 'fade']} bgColor={colors.white}>
      <Heading size={1} fit textColor={colors.black}>
        RxJSでエヴァンゲリオンOPのリズムを再現
      </Heading>
    </Slide>
    <Slide transition={['slide']} bgColor={colors.black}>
      <Heading size={1} fit textColor={colors.white} margin="0 0 50px">
        なにそれとお思いでしょうが<br />
        この辺のリズムを再現しようと…
      </Heading>
      <iframe
        src="https://www.youtube.com/embed/t-QSmNReDyI?rel=0&amp;start=67"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        width="400px"
        height="300px"
      />
      <Appear>
        <Text bold margin="20px auto" textColor={colors.white}>
          (あらためて見るとメチャクチャ複雑<br />すげえなー)
        </Text>
      </Appear>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor={colors.yellow}>
      <Heading fit size={2} textColor={colors.black}>
        ので、ざくっと再現するためにこんなの作ってみました
      </Heading>
      <Appear>
        <CodePane lang="js" source={sampleEva} margin="20px auto" />
      </Appear>
      <Appear>
        <Text bold margin="20px auto">
          デモです
        </Text>
      </Appear>
    </Slide>
    {/*
      * RxJSでFlying LotusのGrooveを拝借
      */}
    <Slide transition={['slide', 'fade']} bgColor={colors.white}>
      <Heading size={1} fit textColor={colors.black}>
        RxJSでFlying LotusのGrooveを拝借
      </Heading>
    </Slide>
    <Slide transition={['slide']} bgColor={colors.black}>
      <Heading size={1} fit textColor={colors.white}>
        Who's Flying Lotus?
      </Heading>
      <Appear>
        <div>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flying-Lotus.jpg" height="300px" />
          <Text margin="20px auto" textSize="12px">
            <Link href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Flying-Lotus.jpg" target="_blank" textColor={colors.white}>
              https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Flying-Lotus.jpg
            </Link>
          </Text>
          <Text margin="20px auto" fit textSize="32px" textColor={colors.white}>
            この人 トラックメーカー<br />
            (ヒップホップの曲を作る人だと思ってください)
          </Text>
        </div>
      </Appear>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor={colors.pink}>
      <Heading size={1} fit textColor={colors.black}>
        この人の曲の特徴として、ヨレっぷり<br />
        (正確なタイミングで音をならさず<br />
        わざと早め/遅めに鳴らす 決まるとかっこいい)が<br />
        半端ない
      </Heading>
      <Image src={images.imageFlBeat} width="100%" />
      <Appear>
        <Text margin="20px auto" fit>
          RxJSで再現してみましょう
        </Text>
      </Appear>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor={colors.yellow}>
      <Heading fit size={2} textColor={colors.black}>
        こんな感じになります
      </Heading>
      <Appear>
        <CodePane lang="js" source={sampleFlyingLotus} margin="20px auto" />
      </Appear>
      <Appear>
        <Text bold margin="20px auto">
          デモです
        </Text>
      </Appear>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor={colors.blue}>
      <Heading fit size={2} textColor={colors.black}>
        Observable.sequencerのソースはこんな感じ
      </Heading>
      <Appear>
        <CodePane lang="js" source={sourceSequencer} margin="20px auto" />
      </Appear>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor={colors.black}>
      <Heading size={1} fit textColor={colors.white}>
        こっちももうちょっと洗練させたら配布します
      </Heading>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor={colors.white}>
      <Heading size={1} fit textColor={colors.black}>
        というわけで、まとめます
      </Heading>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor={colors.yellow}>
      <Heading fit size={2} textColor={colors.black}>
        今日の話はこういうことでした
      </Heading>
      <Appear>
        <List textColor={colors.black}>
          <ListItem>RxJSの知識は他の言語にも活かせる</ListItem>
          <ListItem>
            RxJSは表現力が凄い<br />
            ・Easingできた<br />
            ・ボールはねる動きできた<br />
            ・シーケンサーできた
          </ListItem>
          <ListItem>カットアップ的にばしばし要素を切り替えるのはWebでもやっぱりかっこいい</ListItem>
          <ListItem>
            正確なタイミングからちょっとズラしたカッコよさはWebでも有効
            <Appear>
              <Text>
                …かな？
              </Text>
            </Appear>
          </ListItem>
        </List>
      </Appear>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor={colors.blue}>
      <Heading fit size={2} textColor={colors.black}>
        ちなみに、RxJSをふつうに学ぶなら<br />
        以下の資料がおすすめです
      </Heading>
      <List>
        {[
          { title: 'それRxJSでできるよ(どんなもんか感じをつかむ)', href: 'https://www.slideshare.net/tikibou1/rxjs-67070374' },
          { title: 'RxJS入門(日本語マニュアル)', href: 'https://booth.pm/ja/items/659290' },
          { title: 'Learn RxJS(英語の学習サイト)', href: 'https://www.learnrxjs.io/' },
          { title: 'RxJS Marbles(グラフィカルに表現)', href: 'http://rxmarbles.com' },
        ].map(({ title, href }, i) => (
          <ListItem>
            <Link key={i.toString()} href={href} target="_blank" textColor={colors.black}>{title}</Link>
          </ListItem>
        ))}
      </List>
    </Slide>
    <Slide transition={['zoom', 'slide']} bgImage={images.bgSunset} bgDarken={0.3}>
      <Heading size={2} textColor={colors.white}>
        おしまい
      </Heading>
    </Slide>
  </Deck>);
}

window.addEventListener('DOMContentLoaded', () => render(
  <Presentation />,
  document.getElementById('mount-point')
));
