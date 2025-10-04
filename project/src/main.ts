import './assets/normalize.css'
import './assets/style.less'
import Handlebars from 'handlebars';
//import * as modules from './modules'
import * as Pages  from './pages'
import * as Components from './components'




/* Навигация для спирта_1  */
// import cat1 from './assets/01.jpg'
// import cat2 from './assets/02.jpg'
// import cat3 from './assets/03.jpg'

const pages = {
  'login': [ Pages.Login ],
  'registration' : [Pages.Registration],
  //'list' : [ Pages.List, 
    //{
    //  cats: [
    //    {name: 'cat-1', avatar: cat1},
    //    {name: 'cat-2', avatar: cat2, active: true},
    //    {name: 'cat-3', avatar: cat3},
    //  ],
    //  showDialog: true
    //}
  //],
  'nav': [ Pages.Navigate ]
};





Object.entries(Components).forEach(([ name, template ]) => {
  console.log(name, template)
  Handlebars.registerPartial(name, template);
});

console.log(Components)
function navigate(page: string) {
  //@ts-ignore
  const [ source, context ] = pages[page];
  const container = document.getElementById('app')!;

  const temlpatingFunction = Handlebars.compile(source);
  console.log('html', temlpatingFunction(context))
  container.innerHTML = temlpatingFunction(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('nav'));

document.addEventListener('click', e => {
  //@ts-ignore
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});