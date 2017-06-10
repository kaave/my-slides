import React from 'react';
import { format } from 'date-fns';
import { Heading, Slide, Text } from 'spectacle';

const birthDay = new Date(Date.now() - new Date(1982, 9 - 1, 24, 6, 0, 0).getTime());

export default class extends React.Component {
  render () {
    const { bgImage, bgDarken, textColor } = this.props;
    return (
      <Slide transition={['slide', 'fade']} bgImage={bgImage} bgDarken={bgDarken}>
        <Heading margin="0 0 50px" size={2} textColor={textColor}>
          わたし 😎
        </Heading>
        <Heading size={4} textColor={textColor}>
          安部 亨佑 {birthDay.getYear() - 70}{format(birthDay, '歳Mヶ月D日')}
        </Heading>
        <Text margin="30px 0px 0px" textColor={textColor}>
          🏢 株式会社FRAME LUNCH / WEB ENGINEER<br />
        </Text>
        <Text margin="40px 0px 0px" textColor={textColor}>
          🖌 IntelliJ IDEA : Vim : VSCode = 7 : 2 : 1くらい
        </Text>
        <Text margin="40px 0px 0px" textColor={textColor}>
          ⌨ Dell → Epson → HHKB Pro JP → ErgoDox
        </Text>
        <Text margin="40px 0px 0px" textColor={textColor}>
          💕 音楽鑑賞 (電子音楽中心に雑食) 自炊
        </Text>
      </Slide>
    );
  }
}
// export default function({ bgImage, bgDarken, textColor }) {
//   return (
//     <Slide transition={['slide', 'fade']} bgImage={bgImage} bgDarken={bgDarken}>
//       <Heading margin="0 0 50px" size={2} textColor={textColor}>
//         わたし 😎
//       </Heading>
//       <Heading size={4} textColor={textColor}>
//         安部 亨佑 {birthDay.getYear() - 70}{format(birthDay, '歳Mヶ月D日')}
//       </Heading>
//       <Text margin="30px 0px 0px" textColor={textColor}>
//         🏢 株式会社FRAME LUNCH / WEB ENGINEER<br />
//       </Text>
//       <Text margin="40px 0px 0px" textColor={textColor}>
//         🖌 IntelliJ IDEA : Vim : VSCode = 7 : 2 : 1くらい
//       </Text>
//       <Text margin="40px 0px 0px" textColor={textColor}>
//         ⌨ Dell → Epson → HHKB Pro JP → ErgoDox
//       </Text>
//       <Text margin="40px 0px 0px" textColor={textColor}>
//         💕 音楽鑑賞 (電子音楽中心に雑食) 自炊
//       </Text>
//     </Slide>
//   );
// }

