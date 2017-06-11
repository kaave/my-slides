import React from 'react';
import { render } from 'react-dom';
import { format } from 'date-fns';
import { Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill, Heading, Image, Layout, Link, List, ListItem, Markdown, MarkdownSlides, Quote, Slide, SlideSet, Table, TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Text } from 'spectacle';
import { Tweet } from 'react-twitter-widgets';
import InstagramEmbed from 'react-instagram-embed';
import createTheme from 'spectacle/lib/themes/default';
import preloader from 'spectacle/lib/utils/preloader';
import GoogleFonts from 'google-fonts';

import 'spectacle/lib/themes/default/index.css';

import sampleAutoprefixer from './assets/sample-autoprefixer.js.code';
import samplePackageJson from './assets/sample-package.json.code';
import sampleWebpackConfig from './assets/sample-webpack.config.js.code';
import sampleGoogle from './assets/sample-google.js.code';

import bgMyDesk from './assets/bg/my-desk.jpg';
import bgCurry from './assets/bg/curry.jpg';
import bgSea from './assets/bg/sea.jpg';
import bgSunset from './assets/bg/sunset.jpg';
import bgEtc from './assets/bg/etc.jpg';
import bgUyghur from './assets/bg/uyghur.jpg';
import imageGithubPR from './assets/github-pr.png';

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

const images = { bgMyDesk, bgCurry, bgSea, bgSunset, bgEtc, bgUyghur, imageGithubPR };
preloader(images);
const birthDay = new Date(Date.now() - new Date(1982, 9 - 1, 24, 6, 0, 0).getTime());

function Presentation () {
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide transition={['zoom', 'slide']} bgImage={images.bgSea} bgDarken={0.3}>
        <Heading size={1} fit lineHeight={1} textColor={colors.white}>
          browserslistの
        </Heading>
        <Heading size={1} fit lineHeight={1} textColor={colors.white}>
          ベストプラクティスっぽい話
        </Heading>
        <Text textSize="1.5em" margin="20px 0px 0px" textColor={colors.white} bold>
          2017/06/17 (土) Frontend Nagoya #1
        </Text>
      </Slide>
      <Slide transition={['slide']} bgImage={images.bgMyDesk} bgDarken={0.5}>
        <Heading margin="0 0 50px" size={2} textColor={colors.white}>
          わたし 😎
        </Heading>
        <Heading size={4} textColor={colors.white}>
          安部 亨佑 {birthDay.getYear() - 70}{format(birthDay, '歳Mヶ月D日')}
        </Heading>
        <Text margin="5px 0 0" textColor={colors.white} textSize="1em">
          GitHub: kaave / Twitter: @junkjunctions
        </Text>
        <Text margin="30px 0px 0px" textColor={colors.white}>
          🏢 株式会社FRAME LUNCH / WEB ENGINEER
        </Text>
        <Text fit textColor={colors.white}>
          (大須で写真撮影とか動画配信できるスタジオもやってます PHPer募集中)
        </Text>
        <Text margin="40px 0px 0px" textColor={colors.white}>
          🖌 IntelliJ IDEA : Vim : VSCode = 7 : 2 : 1くらい
        </Text>
        <Text margin="40px 0px 0px" textColor={colors.white}>
          ⌨ Dell → Epson → HHKB Pro JP → ErgoDox
        </Text>
        <Text margin="40px 0px 0px" textColor={colors.white}>
          💕 音楽鑑賞 (電子音楽中心に雑食) / 自炊
        </Text>
      </Slide>
      <Slide transition={['slide']} bgImage={images.bgEtc} bgDarken={0.5}>
        <Text fit textColor={colors.white}>
          (宣伝)スタジオはこんな感じです。よかったら。
        </Text>
        <Layout>
          <Fill>
            <InstagramEmbed url="https://www.instagram.com/p/BTbR7QCFwxk/" maxWidth={160} hideCaption />
            <InstagramEmbed url="https://www.instagram.com/p/BR-bs3hFuiF/" maxWidth={160} hideCaption />
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
      <Slide transition={['slide']} bgImage={images.bgCurry} bgDarken={0.5}>
        <Heading size={3} textColor={colors.white}>
          AGENDA
        </Heading>
        <List textColor={colors.white}>
          <ListItem>browserslistって何</ListItem>
          <ListItem>browserslistの書き方と注意点</ListItem>
          <ListItem>browserslistをどこで設定すべきか</ListItem>
          <ListItem>設定サンプル&ちょっとしたUtil</ListItem>
        </List>
      </Slide>
      <Slide transition={['slide', 'fade']} bgColor={colors.white}>
        <Heading size={1} fit textColor={colors.black}>
          browserslistって何
        </Heading>
      </Slide>
      <Slide transition={['fade']} bgColor={colors.black}>
        <BlockQuote>
          <Quote style={{ fontSize: '40px', lineHeight: '50px' }}>
            Library to share supported browsers list between different front-end tools.
          </Quote>
          <Cite>
            ai/browserslist - https://github.com/ai/browserslist
          </Cite>
        </BlockQuote>
        <Appear>
          <Text margin="20px auto" textColor={colors.white}>
            (異なるフロントツール間で<br />サポートするブラウザのリストを<br />共有するライブラリ)
          </Text>
        </Appear>
      </Slide>
      <Slide transition={['slide', 'fade']} bgColor={colors.pink}>
        <Heading fit size={2} textColor={colors.black}>
          具体的にどういうやつ？
        </Heading>
        <Appear>
          <CodePane lang="js" source={sampleAutoprefixer} margin="20px auto" />
        </Appear>
      </Slide>
      <Slide transition={['fade']} bgColor={colors.blue}>
        <Heading fit size={2} textColor={colors.black}>
          対応ツールs(2017年6月時点)
        </Heading>
        <Heading size={6}>
          <Link
            href="https://github.com/ai/browserslist"
            target="_blank"
            textColor={colors.black}
          >
            https://github.com/ai/browserslist
          </Link>
        </Heading>
        <Text bold textAlign="left" margin="30px 0 0">Autoprefixer</Text>
        <Text textAlign="left" textSize="0.8em">(CSSにVendor prefixつけて/外してくれる)</Text>
        <Text bold textAlign="left" margin="10px 0 0">babel-preset-env</Text>
        <Text textAlign="left" textSize="0.8em">(攻めてるJavaScriptを指定ブラウザで動く形に整形)</Text>
        <Text bold textAlign="left" margin="10px 0 0">eslint-plugin-compat</Text>
        <Text textAlign="left" textSize="0.8em">(対応していないJSを警告するESLint Plugin)</Text>
        <Text bold textAlign="left" margin="10px 0 0">stylelint-no-unsupported-browser-features</Text>
        <Text textAlign="left" textSize="0.8em">(対応していないCSSを警告するstylelint Plugin)</Text>
        <Text bold textAlign="left" margin="10px 0 0">postcss-normalize</Text>
        <Text textAlign="left" textSize="0.8em">(指定ブラウザに応じてnormalize.cssをカスタムしてくれるPostCSS plugin)</Text>
      </Slide>
      <Slide transition={['slide', 'fade']} bgColor={colors.white}>
        <Heading size={1} fit textColor={colors.black}>
          browserslistの書き方と注意点
        </Heading>
      </Slide>
      <Slide transition={['slide']} bgColor={colors.green} textColor={colors.white}>
        <Heading fit size={2} margin="0 0 10px" textColor={colors.white}>
          こんな感じのクエリを<br />組み合わせて指定します
        </Heading>
        <Link
          href="https://github.com/ai/browserslist#queries"
          target="_blank"
          textColor={colors.white}
          margin="0 0 15px"
        >
          https://github.com/ai/browserslist#queries
        </Link>
        <Layout>
          {[
            [
              { query: '> 5%', desc: '(利用者率5%超)' },
              { query: '>= 5% in JP', desc: '(利用者率5%以上[in 日本])' },
              { query: 'last 2 versions', desc: '(各ブラウザ直近2バージョン)' },
              { query: 'last 2 chrome versions', desc: '(Chrome直近2バージョン)' },
              { query: 'ie 6-8', desc: '(IE 6~8)' }
            ],
            [
              { query: 'firefox >= 20', desc: '(FireFox v20以上)' },
              { query: 'firefox < 20', desc: '(FireFox v20未満)' },
              { query: 'firefox ESR', desc: '(FireFox延長サポート版)' },
              { query: 'ios 7', desc: '(iOS7ピンポイント)' },
              { query: 'not ie >= 8', desc: '(IE8以下を除外する)' }
            ]
          ].map(querys => (
            <Fill>
              {querys.map(({ query, desc }) => [
                <Text bold textAlign="left" margin="10px 0 0" textColor={colors.white}>{query}</Text>,
                <Text textAlign="left" textSize="0.8em" textColor={colors.white}>{desc}</Text>
              ])}
            </Fill>
          ))}
        </Layout>
      </Slide>
      <Slide transition={['fade']} bgColor={colors.orange} textColor={colors.white}>
        <Heading fit size={2} margin="0 0 10px" textColor={colors.white}>
          指定できるブラウザ一覧はこちらになります<br />
          クエリで使える短縮形などもあるので↓参照
        </Heading>
        <Link
          href="https://github.com/ai/browserslist#browsers"
          target="_blank"
          textColor={colors.white}
          margin="0 0 15px"
        >
          https://github.com/ai/browserslist#browsers
        </Link>
        <Layout>
          {[
            ['Chrome', 'Edge', 'Explorer', 'Firefox', 'Opera', 'Safari'],
            ['Android', 'ChromeAndroid', 'FirefoxAndroid', 'QQAndroid', 'UCAndroid', 'iOS'],
            ['BlackBerry', 'ExplorerMobile', 'OperaMini', 'OperaMobile', 'Samsung', 'Electron']
          ].map(browsers => (
            <Fill>
              {browsers.map((query, i) => (
                <Text key={i.toString()} bold textAlign="left" margin="10px 0 0" textColor={colors.white}>{query}</Text>
              ))}
            </Fill>
          ))}
        </Layout>
        <Text textColor={colors.white} fontSize="0.8em" margin="20px 0 0">(nodeがない たしかにブラウザじゃないしなー)</Text>
      </Slide>
      <Slide transition={['fade']}>
        <Heading size={1} textColor={colors.black}>
          キモはこのへん
        </Heading>
        <Appear>
          <List>
            <ListItem>データはおなじみCan I Use?から取得</ListItem>
            <ListItem>複数書くと[OR]検索</ListItem>
            <ListItem>ただしnotだけは例外で[NOT]検索</ListItem>
            <ListItem>デフォルトは&gt; 1%, last 2 versions, firefox ESR</ListItem>
          </List>
        </Appear>
      </Slide>
      <Slide transition={['fade']} bgColor={colors.black} textColor={colors.red}>
        <Heading size={1} fit textColor={colors.red}>
          ところでなんですが
        </Heading>
        <Heading size={1} fit textColor={colors.red}>
          last 2 versions の
        </Heading>
        <Heading size={1} fit textColor={colors.red}>
          versionsって何のバージョン？
        </Heading>
        <Appear>
          <List>
            <ListItem>メジャー？(○.y.x)</ListItem>
            <ListItem>マイナー？(x.△.x)</ListItem>
            <ListItem>パッチ？(x.y.□)</ListItem>
            <ListItem>なんか気分？</ListItem>
          </List>
        </Appear>
        <Appear>
          <Heading size={2} textColor={colors.white}>全部違いまーす</Heading>
        </Appear>
      </Slide>
      <Slide transition={['fade', 'slide']} bgColor={colors.black}>
        <Heading size={1} fit textColor={colors.white}>
          Can I Use?のバージョン分けです。
        </Heading>
        <Link
          href="https://caniuse.com/#comparison"
          target="_blank"
          textColor={colors.white}
          textSize="1.8em"
        >
          https://caniuse.com/#comparison
        </Link>
        <Heading size={2} margin="80px 0 0" textColor={colors.blue}>
          Safari 👀
        </Heading>
      </Slide>
      <Slide transition={['slide']} bgColor={colors.black}>
        <Heading size={1} fit textColor={colors.white}>
          割合指定とかlast x versionsで設定書くと
        </Heading>
        <Heading size={1} fit textColor={colors.white}>
          ビルドしたタイミング次第で出力結果が変わる可能性があるので
        </Heading>
        <Heading size={1} fit textColor={colors.white}>
          基本中の基本ですが要求定義をきちっとやって
        </Heading>
        <Heading size={1} fit textColor={colors.white}>
          具体的に書いたほうがいいんじゃないかな・・・
        </Heading>
        <Heading size={1} fit margin="20px 0" textColor={colors.white}>
          参考:
          <Link
            href="https://github.com/google/web-starter-kit"
            target="_blank"
            textColor={colors.white}
          >
            google/web-starter-kit
          </Link>
        </Heading>
        <Link
          href="http://browserl.ist/?q=ie+%3E%3D+10%2C+ie_mob+%3E%3D+10%2C+ff+%3E%3D+30%2C+chrome+%3E%3D+34%2C+safari+%3E%3D+7%2C+opera+%3E%3D+23%2C+ios+%3E%3D+7%2C+android+%3E%3D+4.4%2C+bb+%3E%3D+10"
          target="_blank"
        >
          <CodePane lang="js" source={sampleGoogle} margin="20px auto" />
        </Link>
      </Slide>
      <Slide transition={['fade']} bgColor={colors.white}>
        <Heading size={1} fit textColor={colors.black}>
          browserslistを<br />どこで設定すべきか
        </Heading>
      </Slide>
      <Slide transition={['slide']} bgColor={colors.yellow} textColor={colors.black}>
        <Heading fit size={2} margin="0 0 50px">
          いろんなやり方で設定できますが...
        </Heading>
        <List>
          <ListItem>各アプリに設定を渡す</ListItem>
          <ListItem>環境変数(BROWSERSLIST)で指定する</ListItem>
          <ListItem>.browserslistrcに書きまくる</ListItem>
          <ListItem>逆に設定しないでデフォルトに任せる</ListItem>
        </List>
      </Slide>
      <Slide transition={['fade']} bgColor={colors.green}>
        <Heading size={1} fit textColor={colors.white}>
          package.json
        </Heading>
        <Appear>
          <CodePane lang="js" source={samplePackageJson} margin="20px auto" />
        </Appear>
        <Appear>
          <Heading fit size={2} margin="0 0 50px" textColor={colors.white}>
            これがおすすめ
          </Heading>
        </Appear>
      </Slide>
      <Slide transition={['slide']} bgColor={colors.yellow} textColor={colors.black}>
        <Heading fit size={2} margin="0 0 50px">
          なぜpackage.json
        </Heading>
        <Appear>
          <List>
            <ListItem>設定がばらけない</ListItem>
            <ListItem>設定が目につきやすい</ListItem>
            <ListItem>プロジェクトの意図した対応環境が<br />コードレベルで明確になる</ListItem>
            <ListItem>babel-preset-envに(ちょっとだけ)やさしい</ListItem>
          </List>
        </Appear>
      </Slide>
      <Slide transition={['fade']} bgColor={colors.black} textColor={colors.white}>
        <Heading fit size={2} margin="0 0 50px" textColor={colors.white}>
          babel-preset-envにやさしいって何
        </Heading>
        <Appear>
          <Text fit margin="30px 0px" textColor={colors.red} bold>
            babel-preset-envは現バージョン(v1.x)では<br />
            package.jsonや.browserslistrcや引数に設定書いても<br />
            効かない・・・・・・・・・・・・・・・・ 😰
          </Text>
        </Appear>
        <Appear>
          <Image src={images.imageGithubPR} />
        </Appear>
      </Slide>
      <Slide transition={['fade']} bgColor={colors.white}>
        <Heading fit size={2} margin="0 0 50px">
          Q.それでもpackage.json押すのはなぜ？
        </Heading>
        <Appear>
          <Heading fit size={2} margin="0 0 50px" textColor={colors.green}>
            A.package.jsonはよく考えたら<br />
            単なるjsonなので<br />
            たいていのConfigファイルから<br />
            簡単にrequireできるから。
          </Heading>
        </Appear>
      </Slide>
      <Slide transition={['fade']} bgColor={colors.orange}>
        <Heading fit size={1} margin="0 0 50px" textColor={colors.white}>
          とあるwebpack.config.js(抜粋)
        </Heading>
        <Appear>
          <CodePane lang="js" source={sampleWebpackConfig} margin="20px auto" />
        </Appear>
      </Slide>
      <Slide transition={['fade', 'slide']} bgColor={colors.yellow} textColor={colors.black}>
        <Text textAlign="left">.babelrcが使えなくなっちゃうとか</Text>
        <Text textAlign="left">他にもいろいろ問題あるんだろうけど・・・</Text>
        <Text bold fit margin="10px auto">今はそれでもこのやりかたがいいんじゃないかな。</Text>
        <Text bold fit margin="10px auto 0">babel-preset-env v2が出るまでの辛抱。のはず</Text>
        <Text bold fit margin="10px auto 0">(babel-preset-env諦めりゃいいんだけどね)</Text>
      </Slide>
      <Slide transition={['slide']} bgColor={colors.white}>
        <Heading size={1} fit textColor={colors.black}>
          設定サンプル&ちょっとしたUtil
        </Heading>
      </Slide>
      <Slide transition={['fade']} bgColor={colors.green}>
        <Heading size={1} fit textColor={colors.white}>
          こちらに用意しました<br />
          <Link
            href="https://github.com/kaave/browserslist-sample"
            target="_blank"
            textColor={colors.white}
          >
            https://github.com/kaave/browserslist-sample
          </Link>
        </Heading>
        <Appear>
          <List type="none" textColor={colors.white}>
            <ListItem>package.jsonにbrowserslistを設定</ListItem>
            <ListItem>npm startで設定にマッチするブラウザの一覧や利用者の割合を取得</ListItem>
            <ListItem>素babel, browserify, webpack, gulp-autoprefixer, PostCSSでのautoprefixerなどの設定サンプル</ListItem>
            <ListItem>npm run buildで実際にJS/CSSをビルド</ListItem>
          </List>
        </Appear>
      </Slide>
      <Slide transition={['slide']} bgImage={images.bgUyghur} bgDarken={0.3}>
        <Heading size={1} textColor={colors.white}>
          まとめ
        </Heading>
        <Appear>
          <List textColor={colors.white}>
            <ListItem>browserslistはブラウザ指定ライブラリ</ListItem>
            <ListItem>Can I Use?と密接な関係にあるので注意</ListItem>
            <ListItem>現状package.jsonに設定するのが良さげ</ListItem>
            <ListItem>きっちり設定して、対応端末を明確に</ListItem>
            <ListItem>babel-preset-envはv2が出るまでめんどい</ListItem>
            <ListItem>僕のサンプルも良かったら見といてね</ListItem>
          </List>
        </Appear>
      </Slide>
      <Slide transition={['zoom', 'slide']} bgImage={images.bgSunset} bgDarken={0.3}>
        <Heading size={2} textColor={colors.white}>
          Thank you !! 🎉
        </Heading>
        <Heading margin="20px 0 0" size={4} textColor={colors.white}>
          参考資料・利用素材
        </Heading>
        <List textColor={colors.white}>
          {[
            { title: 'ai/browserslist', href: 'https://github.com/ai/browserslist' },
            { title: 'Promote shareable browserslist config', href: 'https://github.com/babel/babel-preset-env/issues/108' },
            { title: 'browserl.ist', href: 'http://browserl.ist/' },
            { title: 'google/web-starter-kit', href: 'https://github.com/google/web-starter-kit' },
            { title: 'SPECTACLE', href: 'http://stack.formidable.com/spectacle/#/?_k=zd4n33' }
          ].map(({ title, href }, i) => (
            <ListItem>
              <Link key={i.toString()} href={href} target="_blank" textColor={colors.white}>{title}</Link>
            </ListItem>
          ))}
        </List>
      </Slide>
    </Deck>
  );
}

window.addEventListener('DOMContentLoaded', () => render(
  <Presentation />,
  document.getElementById('mount-point')
));

