// note: this file is poorly named - it can generally be ignored.

// helper functions below for supporting blocks/purview

function saveBlocksImages() {
  // generate 960x500 preview.jpg of entire canvas
  // TODO: should this be recycled?
  var offscreenCanvas = document.createElement('canvas');
  offscreenCanvas.width = 960;
  offscreenCanvas.height = 500;
  var context = offscreenCanvas.getContext('2d');
  // background is flat white
  context.fillStyle="#FFFFFF";
  context.fillRect(0, 0, 960, 500);
  context.drawImage(this.canvas, 0, 0, 960, 500);
  // save to browser
  var downloadMime = 'image/octet-stream';
  var imageData = offscreenCanvas.toDataURL('image/jpeg');
  imageData = imageData.replace('image/jpeg', downloadMime);
  p5.prototype.downloadFile(imageData, 'preview.jpg', 'jpg');

  // generate 230x120 thumbnail.png centered on mouse
  offscreenCanvas.width = 230;
  offscreenCanvas.height = 120;
  // background is flat white  
  context = offscreenCanvas.getContext('2d');
  context.fillStyle="#FFFFFF";
  context.fillRect(0, 0, 230, 120);
  // pixelDensity does the right thing on retina displays
  var pd = this._pixelDensity;
  var sx = pd * mouseX - pd * 230/2;
  var sy = pd * mouseY - pd * 120/2;
  var sw = pd * 230;
  var sh = pd * 120;
  // bounds checking - just displace if necessary
  if (sx < 0) {
    sx = 0;
  }
  if (sx > this.canvas.width - sw) {
    sx = this.canvas.width - sw;
  }
  if (sy < 0) {
    sy = 0;
  }
  if (sy > this.canvas.height - sh) {
    sy = this.canvas.height - sh;
  }
  // save to browser
  context.drawImage(this.canvas, sx, sy, sw, sh, 0, 0, 230, 120);
  imageData = offscreenCanvas.toDataURL('image/png');
  imageData = imageData.replace('image/png', downloadMime);
  p5.prototype.downloadFile(imageData, 'thumbnail.png', 'png');
}