export default function uploadImage(onImageReady) {
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
  result.style.width = 'auto'
  result.style.height = '100%'

  input.addEventListener('change', () => {
    if (input.files.length > 0) {
      result.style.display = 'none'

      const existingPreview = document.querySelector('#img-preview')
      if (existingPreview) dropzone.removeChild(existingPreview)

      const img = document.createElement('img')
      img.id = 'img-preview'
      img.src = URL.createObjectURL(input.files[0])
      dropzone.appendChild(img)

      const existingResultImg = document.querySelector('#img-result')
      if (existingResultImg) existingResultImg.remove()

      const imgResult = document.createElement('img')
      imgResult.id = 'img-result'
      imgResult.src = img.src
      result.appendChild(imgResult)

      imgResult.onload = () => {
        onImageReady()
      }
    }
  })
}
