const fs = require('fs');
const path = require('path');

const publicAssetsDir = path.join(__dirname, 'public', 'assets');
const dataFile = path.join(__dirname, 'src', 'data.js');

const categories = [
  { id: 'ai-videos', name: 'AI Videos', thumbDir: 'thumbnails/ai-videos', videoDir: 'AI VIDEOS' },
  { id: 'motion-graphics', name: 'Motion Graphics', thumbDir: 'thumbnails/motion-graphics', videoDir: 'MOTION GRAPHICS' },
  { id: 'video-edits', name: 'Video Edits', thumbDir: 'thumbnails/video-edits', videoDir: 'VIDEO EDITS' }
];

let works = [];
let idCounter = 1;

categories.forEach(cat => {
  const thumbPath = path.join(publicAssetsDir, cat.thumbDir);
  const videoPath = path.join(publicAssetsDir, cat.videoDir);
  
  if (fs.existsSync(thumbPath)) {
    const files = fs.readdirSync(thumbPath).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
    
    files.forEach(file => {
      const baseName = path.parse(file).name;
      // Find matching video (either .mp4 or .mov etc)
      let matchedVideo = null;
      if (fs.existsSync(videoPath)) {
        const vids = fs.readdirSync(videoPath);
        matchedVideo = vids.find(v => v.startsWith(baseName) || baseName.startsWith(path.parse(v).name));
      }
      
      let title = baseName.replace(/_/g, ' ').replace(/-[0-9]+$/, '').replace(/[0-9]+$/, '').trim();
      
      works.push({
        id: idCounter++,
        title: title || 'Untitled Project',
        category: cat.id,
        categoryName: cat.name,
        thumbnail: `/assets/${cat.thumbDir}/${file}`,
        video: matchedVideo ? `/assets/${cat.videoDir}/${matchedVideo}` : null
      });
    });
  }
});

const content = `export const worksData = ${JSON.stringify(works, null, 2)};\n`;
fs.writeFileSync(dataFile, content);
console.log('Data generated successfully at ' + dataFile);
