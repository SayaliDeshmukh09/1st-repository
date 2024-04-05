let menu = document.querySelector('#menu-bars');
let header= document.querySelector("header");

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}


let cursor1 = document.querySelector('.cursor1');
let cursor2 = document.querySelector('.cursor2');

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a, button, input').forEach((element) => {
    element.addEventListener('mouseover', () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    });

    element.addEventListener('mouseleave', () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    });
});

document.querySelectorAll('img').forEach((element) => {
    element.addEventListener('mouseover', () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
        cursor2.style.transform = 'scale(2)';
    });

    element.addEventListener('mouseleave', () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
        cursor2.style.transform = 'scale(1)';
    });
});

document.addEventListener('mousemove', (e) => {
    if (!cursor1.classList.contains('active')) {
        cursor1.classList.add('outline');
        cursor2.classList.add('outline');
    } else {
        cursor1.classList.remove('outline');
        cursor2.classList.remove('outline');
    }
});
