

// step-1: Create on load handler

window.onload = () => {
    main();
}

function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn')

    btn.addEventListener('click', function(){
        const bgColor = genarateRGBcolor();
        root.style.backgroundColor = bgColor;
    })
}

// step-2: random color genarate function
function genarateRGBcolor() {
    // low rgb(0,0,0) up rgb(255,255,255)
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

      return `rgb(${red}, ${green}, ${blue})`
}


// step-3: collect all necessary referances

// step-4: handle click event