fis.match('js/lib/**.js',{
  optimizer:'uglify-js'
})
fis.match('*.{js,css}', {
	useHash: true
})