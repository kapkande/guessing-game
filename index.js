const GuessingGame = require('./src/guessing-game.js');

function onEnterLabel(even) {
    const input = enterLabel.value
    if (input) {

        enterLabel.style.display = 'none';
        invisible.style.display = 'inline-block';
        invisible.textContent = input
        todoBlock.style.display = 'flex';
        text.style.display = 'none';

        textt.style.display = 'block';
    }
}
const onClickLabel = (even) => {
    textt.style.display = 'none';
    const target = even.target;
    enterLabel.style.display = 'block';
    text.style.display = 'block';
    todoBlock.style.display = 'none';
    invisible.style.display = 'none';
    enterLabel.value = ''

}
window.game = new GuessingGame();