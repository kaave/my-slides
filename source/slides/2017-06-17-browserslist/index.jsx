import React from 'react';
import { render } from 'react-dom';
import { format } from 'date-fns';
import { Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill, Heading, Image, Layout, Link, List, ListItem, Markdown, MarkdownSlides, Quote, Slide, SlideSet, Table, TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Text } from 'spectacle';
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
  red: '#e7a7d8',
  blue: '#a7d8e7',
  yellow: '#ffeb3b',
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

const images = { bgMyDesk, bgCurry, bgSea, bgSunset, imageGithubPR };
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
      <Slide transition={['slide', 'fade']} bgImage={images.bgMyDesk} bgDarken={0.5}>
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
      <Slide transition={['fade']} bgImage={images.bgCurry} bgDarken={0.5}>
        スタジオまじよろしく。
      </Slide>
      <Slide transition={['fade']} bgImage={images.bgCurry} bgDarken={0.5}>
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
      <Slide transition={['fade']} bgColor={colors.black}>
        <Heading size={1} fit textColor={colors.red}>
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
          <Heading size={2} fit margin="20px auto" textColor={colors.white}>
            (異なるフロントツール間で、サポートするブラウザのリストを共有するライブラリ)
          </Heading>
        </Appear>
      </Slide>
      <Slide transition={['fade']} bgColor={colors.white}>
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
        <Appear>
          <Text bold fit margin="10px 0 0">(html/ejs/pugあたりのツールがないッッッ)</Text>
        </Appear>
      </Slide>
      <Slide transition={['fade']} bgColor={colors.black}>
        <Heading size={1} fit textColor={colors.red}>
          browserslistの書き方と注意点
        </Heading>
      </Slide>
      <Slide transition={['slide']} bgColor={colors.yellow} textColor={colors.black}>
        <Heading fit size={2} margin="0 0 50px">
          こんな感じのクエリを<br />組み合わせて指定します
        </Heading>
        <Layout>
          <Fill>
            <Text bold textAlign="left" margin="10px 0 0">&gt; 5%</Text>
            <Text textAlign="left" textSize="0.8em">(利用者率5%超)</Text>
            <Text bold textAlign="left" margin="10px 0 0">&gt;= 5% in JP</Text>
            <Text textAlign="left" textSize="0.8em">(利用者率5%以上[in 日本])</Text>
            <Text bold textAlign="left" margin="10px 0 0">last 2 versions</Text>
            <Text textAlign="left" textSize="0.8em">(各ブラウザ直近2バージョン)</Text>
            <Text bold textAlign="left" margin="10px 0 0">last 2 chrome versions</Text>
            <Text textAlign="left" textSize="0.8em">(Chrome直近2バージョン)</Text>
            <Text bold textAlign="left" margin="10px 0 0">ie 6-8</Text>
            <Text textAlign="left" textSize="0.8em">(IE 6~8)</Text>
          </Fill>
          <Fill>
            <Text bold textAlign="left" margin="10px 0 0">firefox &gt;= 20</Text>
            <Text textAlign="left" textSize="0.8em">(FireFox v20以上)</Text>
            <Text bold textAlign="left" margin="10px 0 0">firefox &lt; 20</Text>
            <Text textAlign="left" textSize="0.8em">(FireFox v20未満)</Text>
            <Text bold textAlign="left" margin="10px 0 0">firefox ESR</Text>
            <Text textAlign="left" textSize="0.8em">(FireFox延長サポート版)</Text>
            <Text bold textAlign="left" margin="10px 0 0">ios 7</Text>
            <Text textAlign="left" textSize="0.8em">(iOS7ピンポイント)</Text>
            <Text bold textAlign="left" margin="10px 0 0">not ie &lt;= 8</Text>
            <Text textAlign="left" textSize="0.8em">(IE8以下を除外する)</Text>
          </Fill>
        </Layout>
      </Slide>
      <Slide transition={['slide']} bgColor={colors.yellow} textColor={colors.black}>
        <Heading fit size={2} margin="0 0 10px">
          利用できるブラウザ一覧はこちらです<br />
          (nodeがないね たしかにブラウザじゃないしね)
        </Heading>
        <Link
          href="https://github.com/ai/browserslist#browsers"
          target="_blank"
          textColor={colors.black}
          margin="0 0 15px"
        >
          https://github.com/ai/browserslist#browsers
        </Link>
        <Layout>
          <Fill>
            <Text bold textAlign="left" margin="10px 0 0">Chrome</Text>
            <Text bold textAlign="left" margin="10px 0 0">Edge</Text>
            <Text bold textAlign="left" margin="10px 0 0">Explorer</Text>
            <Text bold textAlign="left" margin="10px 0 0">Firefox</Text>
            <Text bold textAlign="left" margin="10px 0 0">Opera</Text>
            <Text bold textAlign="left" margin="10px 0 0">Safari</Text>
          </Fill>
          <Fill>
            <Text bold textAlign="left" margin="10px 0 0">Android</Text>
            <Text bold textAlign="left" margin="10px 0 0">ChromeAndroid</Text>
            <Text bold textAlign="left" margin="10px 0 0">FirefoxAndroid</Text>
            <Text bold textAlign="left" margin="10px 0 0">QQAndroid</Text>
            <Text bold textAlign="left" margin="10px 0 0">UCAndroid</Text>
            <Text bold textAlign="left" margin="10px 0 0">iOS</Text>
          </Fill>
          <Fill>
            <Text bold textAlign="left" margin="10px 0 0">BlackBerry</Text>
            <Text bold textAlign="left" margin="10px 0 0">ExplorerMobile</Text>
            <Text bold textAlign="left" margin="10px 0 0">OperaMini</Text>
            <Text bold textAlign="left" margin="10px 0 0">OperaMobile</Text>
            <Text bold textAlign="left" margin="10px 0 0">Samsung</Text>
            <Text bold textAlign="left" margin="10px 0 0">Electron</Text>
          </Fill>
        </Layout>
      </Slide>
      <Slide transition={['fade']} bgcolor={colors.black}>
        <Heading size={1} textcolor={colors.red}>
          おやくそく
        </Heading>
        <List>
          <Appear><ListItem>データはおなじみCan I Use?から取得</ListItem></Appear>
          <Appear><ListItem>複数書くと[OR]検索</ListItem></Appear>
          <Appear><ListItem>ただしnotだけは例外で[NOT]検索</ListItem></Appear>
          <Appear><ListItem>デフォルトは&gt; 1%, last 2 versions, firefox ESR</ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={['fade']} bgcolor={colors.black}>
        <Heading size={1} fit textcolor={colors.red}>
          ところでなんですが
        </Heading>
        <Heading size={1} fit textcolor={colors.red}>
          last 2 versions の
        </Heading>
        <Heading size={1} fit textcolor={colors.red}>
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
          <Heading size={2}>全部違いまーす</Heading>
        </Appear>
      </Slide>
      <Slide transition={['fade']} bgcolor={colors.black}>
        <Heading size={1} fit textcolor={colors.red}>
          Can I Use?のこれです。
        </Heading>
        <Link
          href="https://caniuse.com/#comparison"
          target="_blank"
          textColor={colors.white}
        >
          https://caniuse.com/#comparison
        </Link>
        <Heading size={2} margin="80px 0 0" textcolor={colors.red}>
          Safari 👀
        </Heading>
      </Slide>
      <Slide transition={['fade']} bgcolor={colors.black}>
        <Heading size={1} fit textcolor={colors.red}>
          割合指定とかlast x versionsで設定書くと
        </Heading>
        <Heading size={1} fit textcolor={colors.red}>
          ビルドしたタイミング次第で出力結果が変わる可能性があるので
        </Heading>
        <Heading size={1} fit textcolor={colors.red}>
          基本中の基本ですが要求定義をきちっとやって
        </Heading>
        <Heading size={1} fit textcolor={colors.red}>
          具体的に書いたほうがいいんじゃないかな・・・
        </Heading>
        <Heading size={1} fit margin="20px 0" textcolor={colors.red}>
          参考:
          <Link
            href="https://github.com/google/web-starter-kit"
            target="_blank"
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
      <Slide transition={['fade']} bgColor={colors.black}>
        <Heading size={1} fit textColor={colors.red}>
          browserslistをどこで設定すべきか
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
      <Slide transition={['fade']} bgcolor={colors.black}>
        <Heading size={1} fit textcolor={colors.red}>
          package.json
        </Heading>
        <Appear>
          <CodePane lang="js" source={samplePackageJson} margin="20px auto" />
        </Appear>
        <Appear>
          <Heading fit size={2} margin="0 0 50px">
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
      <Slide transition={['slide']} bgColor={colors.yellow} textColor={colors.black}>
        <Heading fit size={2} margin="0 0 50px">
          babel-preset-envにやさしいって何
        </Heading>
        <Appear>
          <Text fit margin="30px 0px" textColor={colors.black} bold>
            babel-preset-envは現バージョン(v1.x)では<br />
            package.jsonや.browserslistrcや引数に設定書いても<br />
            効かない・・・・・・・・・・・・・・・・ 😰
          </Text>
        </Appear>
        <Appear>
          <Image src={images.imageGithubPR} />
        </Appear>
      </Slide>
      <Slide transition={['slide']} bgColor={colors.yellow} textColor={colors.black}>
        <Heading fit size={2} margin="0 0 50px">
          そこでpackage.json
        </Heading>
        <Appear>
          <Heading fit size={2} margin="0 0 50px">
            package.jsonはよく考えたらjsonなので
          </Heading>
        </Appear>
        <Appear>
          <Heading fit size={1} margin="0 0 50px">
            各Configファイルから簡単にrequireできる
          </Heading>
        </Appear>
      </Slide>
      <Slide transition={['slide']} bgColor={colors.yellow} textColor={colors.black}>
        <Heading fit size={1} margin="0 0 50px">
          とあるwebpack.config.js(抜粋)
        </Heading>
        <Appear>
          <CodePane lang="js" source={sampleWebpackConfig} margin="20px auto" />
        </Appear>
      </Slide>
      <Slide transition={['slide']} bgColor={colors.yellow} textColor={colors.black}>
        <Text textAlign="left">.babelrcが使えなくなっちゃうとか</Text>
        <Text textAlign="left">他にもいろいろ問題あるんだろうけど・・・</Text>
        <Appear>
          <Text bold fit margin="10px auto">今はそれでもこのやりかたがいいんじゃないかな。</Text>
        </Appear>
        <Appear>
          <Text bold fit margin="10px auto 0">babel-preset-env v2が出るまでの辛抱。のはず</Text>
        </Appear>
        <Appear>
          <Text bold fit margin="10px auto 0">(babel-preset-env諦めりゃいいんだけどね)</Text>
        </Appear>
      </Slide>
      <Slide transition={['fade']} bgColor={colors.black}>
        <Heading size={1} fit textColor={colors.red}>
          設定サンプル&ちょっとしたUtil
        </Heading>
      </Slide>
      <Slide transition={['fade']} bgColor={colors.black}>
        <Heading size={1} fit textColor={colors.red}>
          こちらに用意しました<br />
          <Link
            href="http://browserl.ist/"
            target="_blank"
            textColor={colors.red}
          >
            Linkまだ！
          </Link>
        </Heading>
        <Appear>
          <List type="none" textColor="#fff">
            <ListItem>package.jsonにbrowserslistを設定</ListItem>
            <ListItem>npm startで設定にマッチするブラウザの一覧や利用者の割合を取得</ListItem>
            <ListItem>素babel, browserify, webpack, gulp-autoprefixer, PostCSSでのautoprefixerなどのサンプルを作っておきました</ListItem>
            <ListItem>npm run buildで実際にJS/CSSをビルド</ListItem>
          </List>
        </Appear>
      </Slide>
      <Slide transition={['fade']} bgColor={colors.black}>
        <Heading size={1} textColor={colors.red}>
          まとめ
        </Heading>
        <Appear>
          <List textColor="#fff">
            <ListItem>browserslistはブラウザ指定ライブラリ</ListItem>
            <ListItem>普段使ってるいろんなツールが頼ってる</ListItem>
            <ListItem>Can I Use?と密接な関係にあるので注意</ListItem>
            <ListItem>現状package.jsonに設定するのが良さげ</ListItem>
            <ListItem>きっちり設定して、対応端末を明確に</ListItem>
            <ListItem>僕のサンプルも見といてね</ListItem>
          </List>
        </Appear>
      </Slide>
      <Slide transition={'fade'} bgImage={images.bgSunset} bgDarken={0.1}>
        <Heading size={2} textColor={colors.white}>
          Thank you !! 🎉
        </Heading>
        <Heading margin="20px 0 0" size={4} textColor={colors.white}>
          参考資料・利用素材
        </Heading>
        <List>
          {[
            { title: 'ai/browserslist', href: 'https://github.com/ai/browserslist' },
            { title: 'Promote shareable browserslist config', href: 'https://github.com/babel/babel-preset-env/issues/108' },
            { title: 'browserl.ist', href: 'http://browserl.ist/' },
            { title: 'google/web-starter-kit', href: 'https://github.com/google/web-starter-kit' },
            { title: 'SPECTACLE', href: 'http://stack.formidable.com/spectacle/#/?_k=zd4n33' }
          ].map(({ title, href }) => (
            <ListItem>
              <Link href={href} target="_blank" textColor={colors.white}>{title}</Link>
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

