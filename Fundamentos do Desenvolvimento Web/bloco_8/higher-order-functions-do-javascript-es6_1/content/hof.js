const wakeUp = () => 'Acordando!!';

const coffeeTime = () => 'Bora tomar café!!';

const sleepTime = () => 'Partiu dormir!!';

const doingThis = (func, action) => action(func());

doingThis(wakeUp, console.log);
doingThis(coffeeTime, console.log);
doingThis(sleepTime, console.log);
