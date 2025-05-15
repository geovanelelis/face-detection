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

  const faceDetectionWithArea = detectionForSize.map((detection, index) => {
    const area = detection.box.width * detection.box.height
    return { index: index + 1, area }
  })

  faceDetectionWithArea.sort((a, b) => b.area - a.area)

  const maxArea = faceDetectionWithArea[0]?.area || 1

  const faceDetectionWithDistance = faceDetectionWithArea.map((face, i) => {
    const scale = face.area / maxArea
    const distance = (1 / scale).toFixed(2)
    return {
      index: `Rosto #${face.index}`,
      area: face.area,
      scale: scale,
      distanciaAproximada: distance
    }
  })

  console.log('Rostos ordenados por distância (mais próximo -> mais distante):')
  faceDetectionWithDistance.forEach((f) => console.log(f))
}
