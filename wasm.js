export const instantiate = async (url, imports) => {
  const response = await fetch(url)
  const buffer = await response.arrayBuffer()
  const obj = await WebAssembly.instantiate(buffer, imports)
  return obj
}

export const renderCanvas = async (canvasSelector, wasmPath, width, height) => {
  const memory = new WebAssembly.Memory({initial: 1, maximum: 1})

  const importObject = {
    'env': {
      'memory': memory,
      'traceUTF8': (str_ptr, str_len) => {
        const bytes = new Uint8Array(memory.buffer, str_ptr, str_len);
        const s = new TextDecoder('utf8').decode(bytes);
        console.log('trace:', s);
      },
    },
  };
  const { instance, module } = await instantiate(wasmPath, importObject);
  const exports = instance.exports;
  const buffer = memory.buffer;
  const canvasData = new Uint8Array(buffer, 0x0, width * height * 4);

  const canvas = document.querySelector(canvasSelector);
  const context = canvas.getContext('2d');
  const imageData = context.createImageData(width, height);

  exports.start();

  const update = () => {
    exports.renderCanvas();
    imageData.data.set(canvasData);
    context.putImageData(imageData, 0, 0);
    // requestAnimationFrame(update);
  }
  setInterval(update, 100);
};
