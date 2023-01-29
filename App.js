const good = document.getElementById('good');
const big = document.getElementById('big');
const small = document.getElementById('small');
const tired = document.getElementById('tired');
const hungry = document.getElementById('hungry');
const dirty = document.getElementById('dirty');
const filthy = document.getElementById('filthy');
const terrific = document.getElementById('terrific');
const starving = document.getElementById('starving');
const exhausted = document.getElementById('exhausted');
const tiny = document.getElementById('tiny');
const huge = document.getElementById('huge');

// GOOD-TERRIFIC

good.addEventListener('dragstart', start);
function start(){
    good.classList.add('start');

    good.addEventListener('dragend', end);
function end(){
    good.classList.add('end');
}

terrific.addEventListener('dragover', over);
function over(arr){
    console.log('dragover');
    arr.preventDefault();
}

good.addEventListener('dragenter', enter);
function enter(arr){
    console.log('dragenteer');
    arr.preventDefault();

}
good.addEventListener('dragleave', leave);
function leave(){
    console.log('dragleave');
}

    terrific.addEventListener('drop', drop);
    function drop(e){
        e.preventDefault();
        console.log('drop');
        good.classList.add('passive');
        document.getElementById('terrific').innerHTML="Terrific/Good";
        terrific.classList.add('drop');
    }

}

// BIG-HUGE

big.addEventListener('dragstart', start1);
function start1(){
    big.classList.add('start');

    big.addEventListener('dragend', end1);
function end1(){
    big.classList.add('end');
}

huge.addEventListener('dragover', over1);
function over1(arr){
    console.log('dragover');
    arr.preventDefault();
}

big.addEventListener('dragenter', enter1);
function enter1(arr){
    console.log('dragenteer');
    arr.preventDefault();

}
big.addEventListener('dragleave', leave1);
function leave1(){
    console.log('dragleave');
}

    huge.addEventListener('drop', drop1);
    function drop1(e){
        e.preventDefault();
        console.log('drop');
        big.classList.add('passive');
        document.getElementById('huge').innerHTML="Huge/Big";
        huge.classList.add('drop');
    }
}

// SMALL-TINY

small.addEventListener('dragstart', start2);
function start2(){
    small.classList.add('start');

    small.addEventListener('dragend', end2);
function end2(){
    small.classList.add('end');
}

tiny.addEventListener('dragover', over2);
function over2(arr){
    console.log('dragover');
    arr.preventDefault();
}

small.addEventListener('dragenter', enter2);
function enter2(arr){
    console.log('dragenteer');
    arr.preventDefault();

}
small.addEventListener('dragleave', leave2);
function leave2(){
    console.log('dragleave');
}

    tiny.addEventListener('drop', drop2);
    function drop2(e){
        e.preventDefault();
        console.log('drop');
        small.classList.add('passive');
        document.getElementById('tiny').innerHTML="Tiny/Small";
        tiny.classList.add('drop');
    }
}

// TIRED-EXHAUSTED

tired.addEventListener('dragstart', start3);
function start3(){
    tired.classList.add('start');

    tired.addEventListener('dragend', end3);
function end3(){
    tired.classList.add('end');
}

exhausted.addEventListener('dragover', over3);
function over3(arr){
    console.log('dragover');
    arr.preventDefault();
}

tired.addEventListener('dragenter', enter3);
function enter3(arr){
    console.log('dragenteer');
    arr.preventDefault();

}
tired.addEventListener('dragleave', leave3);
function leave3(){
    console.log('dragleave');
}

    exhausted.addEventListener('drop', drop3);
    function drop3(e){
        e.preventDefault();
        console.log('drop');
        tired.classList.add('passive');
        document.getElementById('exhausted').innerHTML="Exhausted/Tired";
        exhausted.classList.add('drop');
    }
}

// HUNGRY-STARVING

hungry.addEventListener('dragstart', start4);
function start4(){
    hungry.classList.add('start');

    hungry.addEventListener('dragend', end4);
function end4(){
    hungry.classList.add('end');
}

starving.addEventListener('dragover', over4);
function over4(arr){
    console.log('dragover');
    arr.preventDefault();
}

hungry.addEventListener('dragenter', enter4);
function enter4(arr){
    console.log('dragenteer');
    arr.preventDefault();

}
hungry.addEventListener('dragleave', leave4);
function leave4(){
    console.log('dragleave');
}

    starving.addEventListener('drop', drop4);
    function drop4(e){
        e.preventDefault();
        console.log('drop');
        hungry.classList.add('passive');
        document.getElementById('starving').innerHTML="Starving/Hungry";
        starving.classList.add('drop');
    }
}

// DIRTY-FILTHY

dirty.addEventListener('dragstart', start5);
function start5(){
    dirty.classList.add('start');

    dirty.addEventListener('dragend', end5);
function end5(){
    dirty.classList.add('end');
}

filthy.addEventListener('dragover', over5);
function over5(arr){
    console.log('dragover');
    arr.preventDefault();
}

dirty.addEventListener('dragenter', enter5);
function enter5(arr){
    console.log('dragenteer');
    arr.preventDefault();

}
dirty.addEventListener('dragleave', leave5);
function leave5(){
    console.log('dragleave');
}

    filthy.addEventListener('drop', drop5);
    function drop5(e){
        e.preventDefault();
        console.log('drop');
        dirty.classList.add('passive');
        document.getElementById('filthy').innerHTML="Filthy/Dirty";
        filthy.classList.add('drop');
    }
}