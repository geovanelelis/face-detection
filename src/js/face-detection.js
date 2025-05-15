import * as faceapi from 'face-api.js'

export default async function faceDetection() {
  const image = document.querySelector('#img-result')

  await faceapi.nets.ssdMobilenetv1.loadFromUri('/models')

  const detections = await faceapi.detectAllFaces(image)

  const detectionForSize = faceapi.resizeResults(detections, {
    width: image.width,
    height: image.height,
  })

  image.remove()
  const oldCanvas = document.querySelector('#canvas')
  if (oldCanvas) oldCanvas.remove()

  const canvas = faceapi.createCanvasFromMedia(image)
  canvas.id = 'canvas'
  canvas.width = image.width
  canvas.height = image.height

  const context = canvas.getContext('2d')
  context.drawImage(image, 0, 0)

  const result = document.querySelector('#result')
  result.appendChild(canvas)

  result.style.display = 'flex'

  faceapi.draw.drawDetections(canvas, detectionForSize)

  const faceDetectionQuantity = document.createElement('h2')
  faceDetectionQuantity.id = 'face-detection-quantity'
  faceDetectionQuantity.innerText = `Rostos detectados: ${detectionForSize.length}`

  const existingQuantity = document.querySelector('#face-detection-quantity')
  if (existingQuantity) existingQuantity.remove()

  document.body.appendChild(faceDetectionQuantity)
  console.log(`Quantidade de rostos detectados: ${detectionForSize.length}`)
}
