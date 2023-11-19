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
  }, 1) // 3000 milliseconds = 3 seconds
  line1Element.innerHTML = ''
  line1Element.appendChild(spanElement)
})

audioElement.addEventListener('play', function () {
  //line1=22s
  const line2Element = document.getElementById('line2')
  const textContent2 = line2Element.textContent
  const spanElement2 = document.createElement('span')
  spanElement2.textContent = textContent2
  setTimeout(function () {
    //spanElement2.style.color = 'red'
    spanElement2.style.backgroundColor = 'red'
    line2Element.innerHTML = ''
    line2Element.appendChild(spanElement2)
  }, 20000) // 3000 milliseconds = 3 seconds
})

audioElement.addEventListener('play', function () {
  //line1=22s
  const wowElement1 = document.getElementById('line3')
  const wowContent1 = wowElement1.textContent
  const spanwow1 = document.createElement('span')
  spanwow1.textContent = wowContent1
  setTimeout(function () {
    spanwow1.style.backgroundColor = 'red'
    wowElement1.innerHTML = ''
    wowElement1.appendChild(spanwow1)
  }, 25000) // 3000 milliseconds = 3 seconds
})

audioElement.addEventListener('play', function () {
  //line1=22s
  const wowElement2 = document.getElementById('line4')
  const wowContent2 = wowElement2.textContent
  console.log(wowContent2)
  const spanwow2 = document.createElement('span')
  spanwow2.textContent = wowContent2
  setTimeout(function () {
    spanwow2.style.backgroundColor = 'red'
    wowElement2.innerHTML = ''
    wowElement2.appendChild(spanwow2)
  }, 28000) // 3000 milliseconds = 3 seconds
})

audioElement.addEventListener('play', function () {
  //line1=22s
  const wowElement2 = document.getElementById('line5')
  const wowContent2 = wowElement2.textContent
  console.log(wowContent2)
  const spanwow2 = document.createElement('span')
  spanwow2.textContent = wowContent2
  setTimeout(function () {
    spanwow2.style.backgroundColor = 'red'
    wowElement2.innerHTML = ''
    wowElement2.appendChild(spanwow2)
  }, 33000) // 3000 milliseconds = 3 seconds
})

audioElement.addEventListener('play', function () {
  //line1=22s
  const wowElement2 = document.getElementById('line6')
  const wowContent2 = wowElement2.textContent
  console.log(wowContent2)
  const spanwow2 = document.createElement('span')
  spanwow2.textContent = wowContent2
  setTimeout(function () {
    spanwow2.style.backgroundColor = 'red'
    wowElement2.innerHTML = ''
    wowElement2.appendChild(spanwow2)
  }, 39000) // 3000 milliseconds = 3 seconds
})

audioElement.addEventListener('play', function () {
  //line1=22s
  const wowElement2 = document.getElementById('line5')
  const wowContent2 = wowElement2.textContent
  console.log(wowContent2)
  const spanwow2 = document.createElement('span')
  spanwow2.textContent = wowContent2
  setTimeout(function () {
    spanwow2.style.backgroundColor = 'red'
    wowElement2.innerHTML = ''
    wowElement2.appendChild(spanwow2)
  }, 200) // 3000 milliseconds = 3 seconds
})

audioElement.addEventListener('play', function () {
  //line1=22s
  const wowElement2 = document.getElementById('line6')
  const wowContent2 = wowElement2.textContent
  console.log(wowContent2)
  const spanwow2 = document.createElement('span')
  spanwow2.textContent = wowContent2
  setTimeout(function () {
    spanwow2.style.backgroundColor = 'red'
    wowElement2.innerHTML = ''
    wowElement2.appendChild(spanwow2)
  }, 200) // 3000 milliseconds = 3 seconds
})

audioElement.addEventListener('play', function () {
  //line1=22s
  const wowElement2 = document.getElementById('line7')
  const wowContent2 = wowElement2.textContent
  console.log(wowContent2)
  const spanwow2 = document.createElement('span')
  spanwow2.textContent = wowContent2
  setTimeout(function () {
    spanwow2.style.backgroundColor = 'red'
    wowElement2.innerHTML = ''
    wowElement2.appendChild(spanwow2)
  }, 200) // 3000 milliseconds = 3 seconds
})

audioElement.addEventListener('play', function () {
  //line1=22s
  const wowElement2 = document.getElementById('line8')
  const wowContent2 = wowElement2.textContent
  console.log(wowContent2)
  const spanwow2 = document.createElement('span')
  spanwow2.textContent = wowContent2
  setTimeout(function () {
    spanwow2.style.backgroundColor = 'red'
    wowElement2.innerHTML = ''
    wowElement2.appendChild(spanwow2)
  }, 200) // 3000 milliseconds = 3 seconds
})

audioElement.addEventListener('play', function () {
  //line1=22s
  const wowElement2 = document.getElementById('line9')
  const wowContent2 = wowElement2.textContent
  console.log(wowContent2)
  const spanwow2 = document.createElement('span')
  spanwow2.textContent = wowContent2
  setTimeout(function () {
    spanwow2.style.backgroundColor = 'red'
    wowElement2.innerHTML = ''
    wowElement2.appendChild(spanwow2)
  }, 200) // 3000 milliseconds = 3 seconds
})

audioElement.addEventListener('play', function () {
  //line1=22s
  const wowElement2 = document.getElementById('line10')
  const wowContent2 = wowElement2.textContent
  console.log(wowContent2)
  const spanwow2 = document.createElement('span')
  spanwow2.textContent = wowContent2
  setTimeout(function () {
    spanwow2.style.backgroundColor = 'red'
    wowElement2.innerHTML = ''
    wowElement2.appendChild(spanwow2)
  }, 200) // 3000 milliseconds = 3 seconds
})

audioElement.addEventListener('play', function () {
  //line1=22s
  const wowElement2 = document.getElementById('line11')
  const wowContent2 = wowElement2.textContent
  console.log(wowContent2)
  const spanwow2 = document.createElement('span')
  spanwow2.textContent = wowContent2
  setTimeout(function () {
    spanwow2.style.backgroundColor = 'red'
    wowElement2.innerHTML = ''
    wowElement2.appendChild(spanwow2)
  }, 200) // 3000 milliseconds = 3 seconds
})

audioElement.addEventListener('play', function () {
  //line1=22s
  const wowElement2 = document.getElementById('line12')
  const wowContent2 = wowElement2.textContent
  console.log(wowContent2)
  const spanwow2 = document.createElement('span')
  spanwow2.textContent = wowContent2
  setTimeout(function () {
    spanwow2.style.backgroundColor = 'red'
    wowElement2.innerHTML = ''
    wowElement2.appendChild(spanwow2)
  }, 200) // 3000 milliseconds = 3 seconds
})

audioElement.addEventListener('play', function () {
  //line1=22s
  const wowElement2 = document.getElementById('line13')
  const wowContent2 = wowElement2.textContent
  console.log(wowContent2)
  const spanwow2 = document.createElement('span')
  spanwow2.textContent = wowContent2
  setTimeout(function () {
    spanwow2.style.backgroundColor = 'red'
    wowElement2.innerHTML = ''
    wowElement2.appendChild(spanwow2)
  }, 200) // 3000 milliseconds = 3 seconds
})

audioElement.addEventListener('play', function () {
  //line1=22s
  const wowElement2 = document.getElementById('line14')
  const wowContent2 = wowElement2.textContent
  console.log(wowContent2)
  const spanwow2 = document.createElement('span')
  spanwow2.textContent = wowContent2
  setTimeout(function () {
    spanwow2.style.backgroundColor = 'red'
    wowElement2.innerHTML = ''
    wowElement2.appendChild(spanwow2)
  }, 200) // 3000 milliseconds = 3 seconds
})

audioElement.addEventListener('play', function () {
  //line1=22s
  const wowElement2 = document.getElementById('line15')
  const wowContent2 = wowElement2.textContent
  console.log(wowContent2)
  const spanwow2 = document.createElement('span')
  spanwow2.textContent = wowContent2
  setTimeout(function () {
    spanwow2.style.backgroundColor = 'red'
    wowElement2.innerHTML = ''
    wowElement2.appendChild(spanwow2)
  }, 200) // 3000 milliseconds = 3 seconds
})

audioElement.addEventListener('play', function () {
  //line1=22s
  const wowElement2 = document.getElementById('line01')
  const wowContent2 = wowElement2.textContent
  console.log(wowContent2)
  const spanwow2 = document.createElement('span')
  spanwow2.textContent = wowContent2
  setTimeout(function () {
    spanwow2.style.backgroundColor = 'red'
    wowElement2.innerHTML = ''
    wowElement2.appendChild(spanwow2)
  }, 200) // 3000 milliseconds = 3 seconds
})

audioElement.addEventListener('play', function () {
  //line1=22s
  const wowElement2 = document.getElementById('nokori')
  const wowContent2 = wowElement2.textContent
  console.log(wowContent2)
  const spanwow2 = document.createElement('span')
  spanwow2.textContent = wowContent2
  setTimeout(function () {
    spanwow2.style.backgroundColor = 'red'
    wowElement2.innerHTML = ''
    wowElement2.appendChild(spanwow2)
  }, 200) // 3000 milliseconds = 3 seconds
})
