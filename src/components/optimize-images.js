const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'public/images';
const outputDir = 'public/images/optimized';

if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(file) {
    const inputPath = path.join(inputDir, file);
    const filename = path.parse(file).name;

    // Create WebP version
    await sharp(inputPath)
        .resize(1920, null, { withoutEnlargement: true }) // max width 1920px for hero images
        .webp({ quality: 80 })
        .toFile(path.join(outputDir, `${filename}.webp`));

    // Create optimized JPG version
    await sharp(inputPath)
        .resize(1920, null, { withoutEnlargement: true })
        .jpeg({ quality: 80, progressive: true })
        .toFile(path.join(outputDir, `${filename}.jpg`));
}

fs.readdir(inputDir, (err, files) => {
    if (err) throw err;
    
    files.forEach(file => {
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
            optimizeImage(file).catch(console.error);
        }
    });
});