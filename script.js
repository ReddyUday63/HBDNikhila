
let cur=1;
function show(n){
document.getElementById('p'+cur).classList.remove('active');
document.getElementById('p'+n).classList.add('active');
cur=n;
if(n===6) typeLetter();
}

const texts=['Nice Try 😂','Still No? 🤣','Click YES 😭','No Escape 😜'];
let i=0;
const no=document.getElementById('noBtn');
if(no){
no.onmouseover=()=>{
no.style.position='absolute';
no.style.left=Math.random()*80+'%';
no.style.top=Math.random()*80+'%';
no.innerText=texts[i++%texts.length];
}
}

const gifts = [
  { name: 'Raghavi', choc: 'Ferrero Rocher' }, // 1st balloon
  { name: 'Lakshmi', choc: 'Dairy Milk Silk' }, // 2nd balloon
  { name: 'Siri', choc: 'Snickers' }, // 3rd balloon
  { name: 'Nethra', choc: 'KitKat' } // 4th balloon
];

let found = 0;
for (let x = 0; x < gifts.length; x++) {
  let b = document.createElement('div');
  b.className = 'balloon';
  b.innerHTML = '🎈';

  b.onclick = () => {
    const gift = gifts[x];
    alert(`${gift.name} ${gift.choc} istadii.. tinu sami 🍫`);
    b.innerHTML = '💥';
    b.onclick = null;
    found++;
    counter.innerText = `${found}/4 Chocolates Found 🍫`;
  };

  balloons.appendChild(b);
}

const msgs=['Loading 23 years of awesomeness...','Collecting memories...','Birthday magic loading...','Almost there...'];
setInterval(()=>{
let e=document.getElementById('loading');
if(e)e.innerText=msgs[Math.floor(Math.random()*msgs.length)];
},1800);

function typeLetter() {
    let txt = `Another year older, another year wiser, and somehow still surviving all the chaos😂

May your year be filled with happiness, success, adventures, peace, good health and unlimited chocolates 🍫

Keep smiling. Keep shining.

23 looks absolutely beautiful on you ✨`;

    let j = 0;
    letter.innerText = '';

    let t = setInterval(() => {
        letter.innerText += txt[j];
        j++;

        if (j >= txt.length) {
            clearInterval(t);
        }
    }, 25);
}
