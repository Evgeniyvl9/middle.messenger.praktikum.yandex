import './assets/normalize.css'
import './assets/style.less'
import Handlebars from 'handlebars';
//import * as modules from './modules'
import * as Pages  from './pages'
import * as Components from './components'



import avatar from './assets/avatar.jpg'
import profIcon from './assets/profIcon.jpg'




const pages = {
  'login': [ Pages.Login ],
  'registration' : [Pages.Registration],
  'chat-list'    : [Pages.ChatList, {
    chats:[
      {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aperiam magnam ', mess_time:'10:49',mess_count:'2' },
      {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aperiam magnam ', mess_time:'10:49',mess_count:'3' }, 
      {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet  Aut aperiam magnam ', mess_time:'10:49',mess_count:'' },
     
    ] ,
    profIcon: profIcon
  
  }],
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