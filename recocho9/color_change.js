const audioElement = document.getElementById('myAudio')
audioElement.addEventListener('play', function () {
  console.log('再生が開始されました！')
  //line1=22s
  const line1Element = document.getElementById('line1')
  const textContent1 = line1Element.textContent
  const spanElement = document.createElement('span')
  spanElement.textContent = textContent1

  setTimeout(function () {
    spanElement.style.backgroundColor = 'red'
  }, 3000) // 3000 milliseconds = 3 seconds
  line1Element.innerHTML = ''
  line1Element.appendChild(spanElement)
})
