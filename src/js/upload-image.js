export default function uploadImage() {
  const label = document.querySelector('label')

  function onEnter() {
    label.classList.add('active')
  }

  function onLeave() {
    label.classList.remove('active')
  }

  label.addEventListener('dragenter', onEnter)
  label.addEventListener('drop', onLeave)
  label.addEventListener('dragend', onLeave)
  label.addEventListener('dragleave', onLeave)

  const input = document.querySelector('input')
  const dropzone = document.querySelector('#drop-zone')

  const result = document.querySelector('#result')
  result.style.display = 'none'

  const imgResult = document.createElement('img')
  imgResult.id = 'img-result'

  result.append(imgResult)

  input.addEventListener('change', (e) => {
    if (input.files.length > 0) {
      if (document.querySelector('#img-preview')) {
        dropzone.removeChild(document.querySelector('#img-preview'))
      }

      const img = document.createElement('img')
      img.id = 'img-preview'
      img.src = URL.createObjectURL(input.files[0])

      dropzone.appendChild(img)
      result.style.display = 'flex'

      imgResult.src = img.src
    }
  })
}
