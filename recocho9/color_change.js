const audioElement = document.getElementById('myAudio')

let currentIndex = 0
audioElement.addEventListener('play', function () {
  console.log('再生が開始されました！')
  /*
  一文字ずつ変化させる実装
  clearInterval(intervalId
  intervalId = setInterval(function () {
    if (currentIndex < textContent.length) {
      // Get the current character
      const currentChar = textContent[currentIndex]

      // Change the background color of the current character
      el.innerHTML =
        textContent.substring(0, currentIndex) +
        `<span style="background-color: red;">${currentChar}</span>` +
        textContent.substring(currentIndex + 1)

      currentIndex++
    } else {
      // Clear the interl when all characters have been processed
      clearInterval(intervalId)
    }
  }, 1000) // 1000 milliseconds = 1 second*/
})
