export default function addTtiFavicon() {
  
    const link = document.createElement('link');
    const canvas = document.createElement("canvas");
    canvas.height = 64;
    canvas.width = 64;

    const ctx = canvas.getContext("2d");
    ctx.font = "64px serif";
    ctx.fillText("⏳", 0, 64);

    link.setAttribute("href", canvas.toDataURL());
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    document.head.appendChild(link);
    
  import("tti-polyfill").then(ttiPolyfill => {
    ttiPolyfill.getFirstConsistentlyInteractive().then(tti => {
        ctx.clearRect(0,0,64,64);
        ctx.fillStyle = tti < 1000 ? 'green' : 'red';
        
        ctx.beginPath();
        ctx.moveTo(64,64);
        ctx.arcTo(0,64,0,0,30);
        ctx.arcTo(0,0,64,0,30);
        ctx.arcTo(64,0,64,64,30);
        ctx.arcTo(64,64,0,64,30);
        ctx.fill();

        ctx.font = "32px serif";
        ctx.fillStyle = '#FFFFFF'
        ctx.fillText(`${(tti/1000).toFixed(1)}s`, 6, 44); 
        link.setAttribute("href", canvas.toDataURL());

        document.head.removeChild(link);
        document.head.appendChild(link);
        
    })
  })
}
