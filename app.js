const hero = document.querySelector('.hero')
const slider = document.querySelector('.slider')
const profile_img = document.querySelector('.profile_img')

const tl = new TimelineMax()

tl.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(hero, 1.2, {width: "95%"}, {width: "80%", ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "=-1.2")
.fromTo(profile_img, 0.5, {x: -20}, {x: 0, ease: Power2.easeInOut}, "=-0.5")