const BORDER_PROPERTIES = ['left', 'right', 'top', 'bottom'];
const REFLECTION_DIRECTION = ['above', 'left', 'below', 'right'];

//selecting dom elements
const elements = document.querySelectorAll('.circle')



const getRandomValue = (max, min = 0) => Math.floor(Math.random() * (max - min) + min)
const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16)
const getRandom = (list) => list[getRandomValue(list.length)]


const generator = () => {
    const borderDirection = getRandom(BORDER_PROPERTIES);
    const borderDirectionTransparent = getRandom(BORDER_PROPERTIES);
    const br = `${getRandomValue(100)}% ${getRandomValue(100)}% ${getRandomValue(100)}% ${getRandomValue(100)}%`
    document.documentElement.style.setProperty('--reflect-dir', getRandom(REFLECTION_DIRECTION))
    document.documentElement.style.setProperty('--size', `${getRandomValue(36, 20)}vmin`);
    const borderColor = getRandomColor();


    elements.forEach(element => {
        element.style.setProperty('--border-rd', br);
        element.style.setProperty(`--border-cl-${borderDirection}`, 'transparent');
        element.style.setProperty(`--border-cl-${borderDirectionTransparent}`, borderColor);
    })


}

setInterval(() => {
    generator();
}, 2000)