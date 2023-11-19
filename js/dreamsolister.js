class Lyric {
  constructor(content, time) {
    this.time = time
    this.content = content
  }
}

class NaviElement {
  constructor(html) {
    this.content = html
  }
}

const LyricData = [
  new Lyric('', 0),
  new NaviElement(
    `<p class="song_intro">##################前奏##################</p>`
  ),
  new NaviElement(
    '<p class="intro_ges">縦振り<img src="/figure/pen_light.png" alt="ペンライトの画像">＆掛け声<img src="/figure/call.png" alt="掛け声の画像"></p>'
  ),

  new Lyric('叶えたいことが溢れてるから　　　', 16000),
  new Lyric('立ち止まってる暇なんてないよね', 6000),
  new NaviElement(
    `<p class="first_gesture">
    縦振り<img src="/figure/pen_light.png" alt="ペンライトの画像" />
  </p>`
  ),
  new Lyric('胸に秘めたあこがれを　', 5000),
  new Lyric('フルボリュームで届けよう', 3000),
  new NaviElement(`      <p class="second_gesture">
  縦振り<img src="/figure/pen_light.png" alt="ペンライトの画像" />
</p>`),
  new Lyric('行こう．．．クレッシェンドの向こうへ', 3500),
  new NaviElement(`<p class="third_gesture">
  伸ばし<img src="/figure/pen_light.png" alt="ペンライトの画像" />
</p>`),
  new Lyric('つまづいてもいい　', 5000),
  new Lyric('はみだしてもいい', 3500),
  new NaviElement(`<p class="fourth_gesture">
  縦振り<img src="/figure/pen_light.png" alt="ペンライトの画像" />
</p>`),
  new Lyric('君の音色を　', 3000),
  new Lyric('僕たちは待っている', 2000),
  new NaviElement(`<p class="fifth_gesture">
盛り上がれ！！<img
  src="/figure/moriagare.png"
  alt="盛り上がれ"
  class="moriagare"
/>
</p>`),
  new NaviElement(
    `<p style="color: rgb(255, 140, 0)" class="chorus">****サビ****</p>`
  ),
  new Lyric('響け！　　　　　　', 9000),
  new Lyric('生まれたての夢詰め込んで', 2000),
  new NaviElement(`<p class="sixth_ges">
ジャンプ！<img src="/figure/call.png" alt="掛け声の画像" />
</p>`),
  new Lyric('大きな空へ　　　', 4000),
  new Lyric('今旅立とう', 3000),
  new NaviElement(`<p class="left_image">
<span class="seventh_ges"
  >縦振り<img src="/figure/pen_light.png" alt="ペンライトの画像"
/></span>
<span class="eighth_ges"
  >伸ばし<img src="/figure/pen_light.png" alt="ペンライトの画像" />
  伸ばし<img src="/figure/pen_light.png" alt="ペンライトの画像"
/></span>
</p>`),
  new Lyric('拓け！　　　　　　', 3000),
  new Lyric('笑顔を味方につけて', 1700),
  new NaviElement(`<p>
<span class="ninth_ges"
  >ジャンプ！<img src="/figure/call.png" alt="掛け声の画像"
/></span>
</p>`),
  new Lyric('離さない　　　', 5000),
  new Lyric('あきらめたくない', 3000),
  new NaviElement(`<p class="tenth_ges">
思うがままに縦振り<img
  src="/figure/pen_light.png"
  alt="ペンライトの画像"
/>
</p>`),
  new Lyric('限界さえも　　　', 5000),
  new Lyric('跳ね返す勇気で', 2000),
  new NaviElement(`<p class="elev_ges">
    伸ばす<img src="/figure/pen_light.png" alt="ペンライトの画像" />
  </p>`),
  new Lyric('DREAM SOLISTER', 5000),
  new NaviElement(`<p class="twel_ges">
  伸ばす<img src="/figure/pen_light.png" alt="ペンライトの画像" />
</p>`),
]

//   <p class="lyric_sentence">限界さえも　　　跳ね返す勇気で</p>
//   <p class="elev_ges">
//     伸ばす<img src="/figure/pen_light.png" alt="ペンライトの画像" />
//   </p>

//   <p class="lyric_sentence">DREAM SOLISTER</p>
//   <p class="twel_ges">
//     伸ばす<img src="/figure/pen_light.png" alt="ペンライトの画像" />
//   </p>
// </div>

async function start() {
  let played = []
  let playing = LyricData.map((x) => x)

  updateLyric(played, playing)

  while (playing.length > 0) {
    const lyric = playing.shift()
    played.push(lyric)

    // NaviElement をいれるだけ入れる
    while (playing.length > 0) {
      if (playing[0] instanceof Lyric) break

      const first = playing.shift()
      played.push(first)
    }

    // lyric.time 分 sleep
    await new Promise((x) => setTimeout(x, lyric.time))

    updateLyric(played, playing)
  }
}

function updateLyric(played, playing) {
  const element = document.getElementById('testtest')
  element.innerHTML = makeHtml(played, playing)
}

function makeHtml(played, playing) {
  const elems = []

  for (const e of played) {
    elems.push([e, true])
  }

  for (const e of playing) {
    elems.push([e, false])
  }

  const groups = createGroup(elems)
  let innerHtml = ''

  for (const group of groups) {
    const isLyric = group[0][0] instanceof Lyric

    if (isLyric) {
      innerHtml += `<p class="lyric_sentence">`
    }

    for (const [e, played] of group) {
      if (isLyric) {
        if (played) {
          innerHtml += `<span style="color: blue;">${e.content}</span>`
        } else {
          innerHtml += `<span>${e.content}</span>`
        }
      } else {
        innerHtml += e.content
      }
    }

    if (isLyric) {
      innerHtml += `</p>`
    }
  }

  return innerHtml
}

function createGroup(elems) {
  const res = [[elems[0]]]
  let i = 1

  while (i < elems.length) {
    const lastGroup = res[res.length - 1]

    // 同じグループ
    if (
      (lastGroup[0][0] instanceof Lyric && elems[i][0] instanceof Lyric) ||
      (lastGroup[0][0] instanceof NaviElement &&
        elems[i][0] instanceof NaviElement)
    ) {
      lastGroup.push(elems[i])
    } else {
      res.push([elems[i]])
    }

    ++i
  }

  return res
}

const audioElement = document.getElementById('audio-elem')
audioElement.addEventListener('play', () => {
  start()
})
// let played = []
// let playing = LyricData.map((x) => x)

// played.push(playing.shift())

// console.log(updateLyric(played, playing))

// console.log(
//   createGroup([
//     [new Lyric('a', 0), false],
//     [new Lyric('b', 1), false],
//     [new NaviElement('c'), false],
//   ])
// )
// console.log(
//   createGroup([
//     [new Lyric('a', 0), false],
//     [new Lyric('b', 1), false],
//   ])
// )
// console.log(
//   createGroup([
//     [new NaviElement('a'), false],
//     [new NaviElement('b'), false],
//   ])
// )
// console.log(
//   createGroup([
//     [new NaviElement('a'), false],
//     [new NaviElement('b'), false],
//     [new Lyric('c', 1), false],
//   ])
// )
