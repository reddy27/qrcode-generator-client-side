const QRCode = require('qrcode')
const canvas = document.getElementById('canvas')
const options = {
	width: 300
}
 
QRCode.toCanvas(canvas, 'you rock', options,  function (error) {
  if (error) {
   	console.error(error)
  	}
  	console.log('successfully created QRCode!');
})