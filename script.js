'use strict';

const aside = document.querySelectorAll('.books');
const number = document.querySelectorAll('.book');
aside[0].prepend(number[1]);
aside[0].append(number[2]);
number[3].before(number[4]);//task 1

document.body.style.backgroundImage = 'url("./image/you-dont-know-js.jpg")';//task2

const rem = document.querySelector('.adv');
rem.remove();//task 4

const repl = document.querySelectorAll('a');
repl[2].textContent = 'Книга 3. this и Прототипы Объектов';//task 3

const list = number[0].querySelectorAll('ul');
const li2 = number[0].querySelectorAll('li');
list[0].append(li2[3]);
list[0].append(li2[6]);
list[0].append(li2[8]);
list[0].append(li2[4]);
list[0].append(li2[5]);
list[0].append(li2[7]);
list[0].append(li2[9]);
list[0].append(li2[2]);
list[0].append(li2[10]);

const lis = number[5].querySelectorAll('ul');
const li5 = number[5].querySelectorAll('li');
lis[0].append(li5[9]);
lis[0].append(li5[3]);
lis[0].append(li5[4]);
lis[0].append(li5[2]);
lis[0].append(li5[6]);
lis[0].append(li5[7]);
lis[0].append(li5[5]);
lis[0].append(li5[8]);
lis[0].append(li5[10]);//task 5

const l = number[2].querySelectorAll('ul');
const li6 = number[2].querySelectorAll('li');

const clone = li6[2].cloneNode(true);
clone.innerHTML = '<li>Глава 8: За пределами ES6</li>';
l[0].append(clone);
li6[9].before(clone);//task6
