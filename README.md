# Face Detection App (com face-api.js)

Este é um projeto de detecção de rostos no navegador usando a biblioteca [face-api.js](https://github.com/justadudewhohacks/face-api.js). A aplicação permite ao usuário fazer upload de uma imagem e detectar rostos, além de estimar a distância relativa entre a câmera e cada rosto com base na área detectada.

## 🖼️ Funcionalidades

- Upload de imagem via input ou drag & drop
- Detecção de rostos com face-api.js
- Exibição da quantidade de rostos detectados
- Estimativa de distância relativa à câmera (mais próximo → mais distante)
- Interface com `canvas` desenhando as caixas de detecção
- Build otimizado com `esbuild` para navegadores com hardware mais fraco

---

## 📦 Instalação

1. Clone o repositório:

   ```bash

   git clone https://github.com/geovanelelis/face-detection.git
   cd face-detection
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

---

## 🚀 Execução (modo desenvolvimento)

1. Inicie um servidor local (recomendo `vite`, `live-server` ou similar):

   Usando o `vite` (recomendado):

   ```bash
   npm run dev
   ```

   Ou com o `live-server` (global):

   ```bash
   live-server
   ```

2. Acesse `http://localhost:3000` (ou porta indicada).

---

## 🧠 Modelos do face-api.js

Antes de rodar a aplicação, baixe os modelos de detecção e coloque-os na pasta `public/models/`:

Modelos necessários:

- `ssd_mobilenetv1_model-weights_manifest.json`
- `ssd_mobilenetv1_model-shard1`
- (ou o `tiny_face_detector` se quiser usar esse)

Baixe os modelos em: https://github.com/justadudewhohacks/face-api.js-models

---

## 🧪 Tecnologias utilizadas

- [face-api.js](https://github.com/justadudewhohacks/face-api.js)
- JavaScript (ESModules)
- HTML/CSS puro

---

## 📁 Estrutura do projeto

```
.
├── public/
│   └── models/
├── src/
│   ├── js/
│   |    ├── main.js
│   |    ├── faceDetection.js
│   |    └── uploadImage.js
│   ├── style.css
├── index.html
├── package.json
└── README.md
```

---

## 👨‍💻 Autor

**Geovane Lelis**  
[LinkedIn](https://www.linkedin.com/in/geovanelelis/)

---

## 📄 Licença

Este projeto está sob a licença MIT.
