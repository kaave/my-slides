import React from 'react';
import { render } from 'react-dom';
import { format } from 'date-fns';
import { Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill, Heading, Image, Layout, Link, List, ListItem, Markdown, MarkdownSlides, Quote, Slide, SlideSet, Table, TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Text } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import createTheme from 'spectacle/lib/themes/default';
//import preloader from 'spectacle/lib/utils/preloader';
import GoogleFonts from 'google-fonts';

import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

import sampleSW from './assets/sample-sw.js.code';
import sampleAlert from './assets/sample-alert.js.code';
import samplePush from './assets/sample-push.js.code';
import sampleEntry from './assets/sample-entry.js.code';
import sampleChecker from './assets/sample-checker.js.code';

import imageDebuggerApplication from './assets/debugger-application.png';
import imageDebuggerSources from './assets/debugger-sources.png';

// 資料 https://developers.google.com/web/fundamentals/getting-started/codelabs/push-notifications/?hl=ja

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

//const images = { city, kat, logo, markdown };
//preloader(images);

const birthDay = new Date(Date.now() - new Date(1982, 9 - 1, 24, 6, 0, 0).getTime());

function Presentation () {
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide transition={['zoom']} bgColor="primary">
        <Heading size={1} fit lineHeight={1} textColor={colors.black}>
          Push notificationで
        </Heading>
        <Heading size={1} fit lineHeight={1} textColor={colors.black}>
          ServiceWorker入門
        </Heading>
        <Text textSize="1.5em" margin="20px 0px 0px" textColor={colors.black} bold>
          2017/06/03 (土) Nagoya.js #3
        </Text>
      </Slide>
      <Slide transition={['spin']} bgColor={colors.red}>
        <Heading size={1} fit caps lineHeight={1} textColor={colors.black}>
          注意!こんな話はしません(今日は入門です)
        </Heading>
        <List>
          <Appear><ListItem>ServiceWorkerテスト駆動開発</ListItem></Appear>
          <Appear><ListItem>5分でPWAを構築</ListItem></Appear>
          <Appear><ListItem>AMPとPWAの連携でハッピー</ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={['slide']} bgColor={colors.white}>
        <Heading size={3} caps>
          Agenda
        </Heading>
        <List>
          <ListItem>自己紹介</ListItem>
          <ListItem>ServiceWorker概要</ListItem>
          <ListItem>Push notification概要とサンプル披露</ListItem>
          <ListItem>コード解説(ServiceWorker本体)</ListItem>
          <ListItem>コード解説(Push実行)</ListItem>
          <ListItem>コード解説(ServiceWorker登録)</ListItem>
          <ListItem>おまけ</ListItem>
        </List>
      </Slide>
      <Slide transition={['slide', 'fade']} bgColor={colors.blue}>
        <Heading margin="0 0 50px" size={2}>
          わたし 😎
        </Heading>
        <Heading size={4} textColor={colors.black}>
          安部 亨佑 {birthDay.getYear() - 70}{format(birthDay, '歳Mヶ月D日')}
        </Heading>
        <Text margin="30px 0px 0px" textColor={colors.black}>
          🏢 株式会社FRAME LUNCH / WEB ENGINEER<br />
        </Text>
        <Text margin="20px 0px 0px" textColor={colors.black}>
          🖌 IntelliJ IDEA : Vim(iTerm) : VSCode = 7 : 2 : 1くらい
        </Text>
        <Text margin="50px 0px 0px" textColor={colors.black}>
          💕 音楽鑑賞 サッカー観戦 テレビゲームetc
        </Text>
      </Slide>
      <Slide transition={['slide', 'fade']} bgColor={colors.fl}>
        <Heading margin="0 0 50px" size={1} caps>
          宣伝
        </Heading>
      </Slide>
      <Slide transition={['slide', 'fade']} bgColor={colors.white}>
        <Heading size={1} fit textColor={colors.black}>
          ServiceWorker概要
        </Heading>
      </Slide>
      <Slide transition={['slide']} bgColor={colors.black}>
        <BlockQuote>
          <Quote style={{ fontSize: '40px', lineHeight: '50px' }}>
            Service workerは基本的にWebアプリケーションやブラウザとネットワークの間のプロキシサーバーとして機能します。
            それらは、ネットワークリクエストを受信し、ネットワークの使用可否やサーバー上にあるassetの更新有無に基づく
            適切なアクションを取得する効果的なオフライン体験を作成可能にすることができます。
            それらは、通知をプッシュしたり、バックグラウンドの同期API群にアクセスすることを許可します。
          </Quote>
          <Cite>
            ServiceWorker API(MDN) - https://developer.mozilla.org/ja/docs/Web/API/ServiceWorker_API
          </Cite>
        </BlockQuote>
      </Slide>
      <Slide transition={['fade']} bgColor={colors.white}>
        <Heading size={1} fit textColor={colors.black}>
          適当に噛み砕くと
        </Heading>
        <List>
          <Appear><ListItem>フロントエンドとバックエンドの中間に位置するプロキシ</ListItem></Appear>
          <Appear><ListItem>オフライン状態用のネタを仕込める</ListItem></Appear>
          <Appear><ListItem>プッシュとかできる</ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={['slide', 'fade']} bgColor={colors.white}>
        <Heading size={1} fit textColor={colors.black}>
          図
        </Heading>
      </Slide>
      <Slide transition={['slide', 'fade']} bgColor={colors.white}>
        <Heading size={1} fit textColor={colors.black}>
          Push notification概要
        </Heading>
      </Slide>
      <Slide transition={['slide']} bgColor={colors.black}>
        <BlockQuote>
          <Quote style={{ fontSize: '40px', lineHeight: '50px' }}>
            Push APIは、ウェブアプリケーションがサーバーからメッセージ (プッシュ通知) を受信できるようにします。
            ウェブアプリケーションがフォアグランド状態かどうか、読み込まれているかどうかに関わらず利用できます。
            開発者は、オプトインしたユーザへ非同期の通知と更新を届けることができ、
            タイムリーな新着コンテンツによってユーザの関心を得られるでしょう。
          </Quote>
          <Cite>
            Push API(MDN) - https://developer.mozilla.org/ja/docs/Web/API/Push_API
          </Cite>
        </BlockQuote>
      </Slide>
      <Slide transition={['fade']} bgColor={colors.white}>
        <Heading size={1} fit textColor={colors.black}>
          適当に噛み砕くと
        </Heading>
        <List>
          <Appear><ListItem>サーバから任意のタイミングでプッシュできる</ListItem></Appear>
          <Appear><ListItem>宛先がそのサイト開いてなくてもおかまいなし</ListItem></Appear>
          <Appear><ListItem>みんなハッピー?</ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={['slide']} bgColor={colors.white}>
        <Heading size={1} fit textColor={colors.black}>
          サンプル
        </Heading>
        <Heading size={2} fit>
          <Link href="https://github.com/kaave/webpush-sample" target="_blank" textColor={colors.green}>
            kaave/webpush-sample
          </Link>
        </Heading>
      </Slide>
      <Slide transition={['slide']} bgColor={colors.white}>
        <Heading size={1} fit textColor={colors.black}>
          コード解説<br />(ServiceWorker本体)
        </Heading>
        <Appear><Text fit margin="20px 0px 0px">先に言っておきますがメチャ簡単です</Text></Appear>
      </Slide>
      <Slide transition={['zoom', 'fade']} bgColor="#666">
        <Heading size={2} fit textColor={colors.white}>
          こんな感じ
        </Heading>
        <Appear><CodePane lang="js" source={sampleSW} margin="20px auto" /></Appear>
      </Slide>
      <Slide transition={['fade']} bgColor="#666">
        <Heading size={2} fit textColor={colors.white}>
          あんまり変わらない・・・気がする
        </Heading>
        <Appear><CodePane lang="js" source={sampleAlert} margin="20px auto" /></Appear>
      </Slide>
      <CodeSlide
        transition={['fade']}
        lang="js"
        code={sampleSW}
        ranges={[
          { title: 'ざっと解説' },
          { loc: [0, 1], note: 'JSONのバリデーション用。本筋とはあんま関係ないです' },
          { loc: [2, 10], title: 'pushイベント登録とその内容' },
          { loc: [2, 3], note: '見たまんまでしょうもはや' },
          { loc: [3, 4], note: '受け取ったネタを取り出しております' },
          { loc: [5, 6], note: 'push通知のタイトル。' },
          { loc: [6, 7], note: 'アイコン使う場合はセット。ないと空白になってしまいしまらない。' },
          { loc: [7, 8], note: '受け取ったネタがJSONだったらパースしてほしい値をとる' },
          { loc: [8, 9], title: '❗❗Push通知表示❗❗' },
          { loc: [8, 9], title: '❗❗Push通知表示❗❗', note: 'この1行は覚えておいてね' },
          { title: '以上。' },
          { title: '以上。', note: '簡単でしょ？' }
        ]}
      />
      <Slide transition={['slide']} bgColor={colors.white}>
        <Heading size={1} fit textColor={colors.black}>
          コード解説<br />(Push実行)
        </Heading>
        <Appear><Text fit margin="20px 0px 0px">こっちも簡単です</Text></Appear>
      </Slide>
      <Slide transition={['zoom', 'fade']} bgColor="#666">
        <Heading size={2} fit textColor={colors.white}>
          こんな感じ
        </Heading>
        <Appear><CodePane lang="js" source={samplePush} margin="20px auto" /></Appear>
      </Slide>
      <CodeSlide
        transition={['fade']}
        lang="js"
        code={samplePush}
        ranges={[
          { title: 'ざっと解説' },
          { loc: [0, 1], note: 'push用モジュールの読み込み。' },
          { loc: [1, 5], note: 'ユーティリティ系読み込み。本筋とはそこまで関係ないかな' },
          { loc: [6, 16], title: '送信内容とか鍵とかの仕込み' },
          { loc: [6, 13], note: '送信対象指定。サンプルで取得したアレ' },
          { loc: [13, 15], note: '鍵指定。公開鍵はSWと一致させないとダメです' },
          { loc: [15, 16], note: 'SWに送るデータ。文字列です。' },
          { loc: [17, 23], title: '実際の送信箇所。' },
          { title: '以上。' },
          { title: '以上。', note: 'そんなに難しくないでしょ？' }
        ]}
      />
      <Slide transition={['slide']} bgColor={colors.white}>
        <Heading size={1} fit textColor={colors.black}>
          コード解説<br />(ServiceWorker登録 & Push購読)
        </Heading>
        <Appear><Text fit margin="20px 0px 0px">ここが面倒くさいんですよね・・・</Text></Appear>
      </Slide>
      <Slide transition={['zoom', 'fade']} bgColor="#666">
        <Heading size={2} fit textColor={colors.white}>
          こんな感じ(はみ出してますが45行)
        </Heading>
        <Appear><CodePane lang="js" source={sampleEntry} margin="20px auto" /></Appear>
      </Slide>
      <CodeSlide
        transition={['fade']}
        lang="js"
        code={sampleEntry}
        ranges={[
          { title: 'ざっと解説' },
          { loc: [0, 1], note: '公開鍵。push実行時のものとペア' },
          { loc: [2, 5], note: '読み込み仕込み。本筋とはあんま関係ないです' },
          { loc: [6, 11], title: 'SW登録してPush仕込む関数' },
          { loc: [7, 8], note: 'SW登録と同時にhandlerを取得' },
          { loc: [8, 9], note: 'Push購読されてたらhandlerを、そうでなければnull取得' },
          { loc: [9, 10], note: '購読されてなければ購読開始' },
          { loc: [12, 16], title: 'SW登録はこんな感じ。' },
          { loc: [17, 22], title: 'Push購読チェックはこんな感じ。' },
          { loc: [23, 31], title: 'Push購読登録はこんな感じ。' },
          { loc: [32, 44], title: 'Base64形式のURLをUint8の配列に変換' },
          { loc: [32, 44], note: 'コピペです', title: 'Base64形式のURLをUint8の配列に変換' },
          { title: '以上。' },
          { title: '以上。', note: '読み返してみてもイミフ' },
          { title: '❗例外処理を超端折ってます❗', note: '読み返してみてもイミフ' }
        ]}
      />
      <Slide transition={['spin']} bgColor={colors.white}>
        <Heading size={2} fit>
          おおまかには以上ですが<br />
          もうちょっと補足
        </Heading>
      </Slide>
      <Slide transition={['zoom']} bgColor="#666">
        <Heading size={2} fit textColor={colors.white}>
          SWの使用やPush通知できるかチェック
        </Heading>
        <Appear><CodePane lang="js" source={sampleChecker} margin="20px auto" /></Appear>
      </Slide>
      <Slide transition={['fade']} bgColor="#d32f2f">
        <Heading size={2} fit textColor={colors.white}>
          ServiceWorkerでは
        </Heading>
        <Heading size={2} margin="10px 0px 0px" fit textColor={colors.white}>
          LocalStorageやCookieは
        </Heading>
        <Heading size={2} margin="20px 0px 0px" fit textColor={colors.white}>
          使えません
        </Heading>
        <Appear>
          <Heading size={4} margin="40px 0px 0px" fit textColor={colors.white}>
            …IndexedDBなら使えるっぽいです
          </Heading>
        </Appear>
        <Appear>
          <Heading size={4} fit textColor={colors.white}>
            (だれかLTやってくんないかなぁ)
          </Heading>
        </Appear>
      </Slide>
      <Slide transition={['fade']} bgColor="#666">
        <Heading size={2} fit textColor={colors.white}>
          デバッグはいつも通りChrome開発者ツール
        </Heading>
        <Image src={imageDebuggerApplication} margin="40px 0 0" />
      </Slide>
      <Slide transition={'slide'} bgColor="#666">
        <Heading size={2} fit textColor={colors.white}>
          デバッグはいつも通りChrome開発者ツール
        </Heading>
        <Image src={imageDebuggerSources} margin="40px 0 0" />
      </Slide>
      <Slide transition={['spin']} bgColor={colors.white}>
        <Heading size={1} fit textColor={colors.black}>
          おまけ
        </Heading>
        <Heading size={2} fit textColor={colors.black}>
          しょっぱい知見やぐぐって発見したものを適当に羅列します
        </Heading>
      </Slide>
      <Slide transition={'slide'} bgColor="#666">
        <Heading size={2} fit textColor={colors.white}>
          macOSのChromeでデバッグする場合<br />
          Chromeをフルスクリーンにしない
        </Heading>
        <Appear><Text margin="50px 0 0" textColor={colors.white}>
          なぜかPush通知が表示されない。<br />
          そしてあとでまとめて表示されて地獄
        </Text></Appear>
      </Slide>
      <Slide transition={'slide'} bgColor="#666">
        <Heading size={2} textColor={colors.white}>
          ESLint
        </Heading>
        <Appear><CodePane lang="js" source="/* eslint-env serviceworker */" margin="20px auto" /></Appear>
        <Appear><Text margin="50px 0 0" textColor={colors.white}>
          Pushくらいならいいけど、<br />もうちょっと凝ったことしたくなったら有効化
        </Text></Appear>
      </Slide>
      <Slide transition={'slide'} bgColor="#666">
        <Heading size={2} fit textColor={colors.white}>
          serviceworker-webpack-plugin
        </Heading>
        <Link
          fit
          margin="20px 0 0"
          href="https://github.com/oliviertassinari/serviceworker-webpack-plugin"
          target="_blank"
        >
          https://github.com/oliviertassinari/serviceworker-webpack-plugin
        </Link>
        <Appear><Text margin="50px 0 0" textColor={colors.white}>SW登録周りを楽にしてくれるのかなー</Text></Appear>
      </Slide>
      <Slide transition={'slide'} bgColor="#666">
        <Heading size={2} fit textColor={colors.white}>
          offline-plugin
        </Heading>
        <Link fit margin="20px 0 0" href="https://github.com/NekR/offline-plugin" target="_blank">
          https://github.com/NekR/offline-plugin
        </Link>
        <Appear><Text margin="50px 0 0" textColor={colors.white}>
          ServiceWorkerとCacheAPI使って<br />オフラインで諸々できちゃう
        </Text></Appear>
      </Slide>
      <Slide transition={'slide'} bgColor="#666">
        <Heading size={2} textColor={colors.white}>
          Thank you !! 🎉
        </Heading>
        <Heading margin="20px 0 0" size={4} textColor={colors.white}>
          参考資料
        </Heading>
        <List>
          <ListItem>
            <Link
              href="https://developers.google.com/web/fundamentals/getting-started/codelabs/push-notifications/?hl=ja"
              target="_blank"
            >
              ウェブアプリへのプッシュ通知の追加
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://developer.mozilla.org/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers"
              target="_blank"
            >
              Service Workerの利用について - Web API インターフェイス | MDN
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://caniuse.com/"
              target="_blank"
            >
              Can I use... Support tables for HTML5, CSS3, etc
            </Link>
          </ListItem>
        </List>
      </Slide>
    </Deck>
  );
}

window.addEventListener('DOMContentLoaded', () => render(
  <Presentation />,
  document.getElementById('mount-point')
));
