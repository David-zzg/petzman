var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
 
gulp.task('default', function () {
    var spriteData = gulp.src('public/sprite/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css',
        padding:2,
        retinaSrcFilter:'public/sprite/*@2x.png',
        retinaImgName:"sprite@2x.png"
    }));
    return spriteData.pipe(gulp.dest('public/'));
});