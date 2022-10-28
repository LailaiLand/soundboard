let lyd1 = document.getElementById('lydfil1')
let lyd2 = document.getElementById('lydfil2')
let lyd3 = document.getElementById('lydfil3')
let lyd4 = document.getElementById('lydfil4')

function lydfilnavn(select){
    if(select == 'loop1'){
        lyd1.innerHTML = /*HTML*/ `
        <audio src="sounds/mario-boing.WAV" loop autoplay></audio>
        Boing
        `;
    }
    if(select== 'muted1'){
        lyd1.innerHTML = 'Boing'
    }
    
    if(select == 'loop2'){
        lyd2.innerHTML = /*HTML*/ `
        <audio src="sounds/mario-buhbye.WAV" loop autoplay></audio>
        Buhbye
        `;
    }
    if(select== 'muted2'){
        lyd2.innerHTML = 'Buhbye'
    }
    
    if(select == 'loop3'){
        lyd3.innerHTML = /*HTML*/ `
        <audio src="sounds/mario-dream.WAV" loop autoplay></audio>
        Dream
        `;
    }
    if(select== 'muted3'){
        lyd3.innerHTML = 'Dream'
    }
    
    if(select == 'loop4'){
        lyd4.innerHTML = /*HTML*/ `
        <audio src="sounds/mario-fire.WAV" loop autoplay></audio>
        Fire
        `;
    }
    if(select== 'muted4'){
        lyd4.innerHTML = 'Fire'
    }
}