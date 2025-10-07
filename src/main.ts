import './assets/normalize.css'
import './assets/style.less'
import Handlebars from 'handlebars';
//import * as modules from './modules'
import * as Pages  from './pages'
import * as Components from './components'



import avatar from './assets/avatar.jpg'
import profIcon from './assets/profIcon.jpg'
import backIcon from './assets/back.png'



const pages = {
  'login': [ Pages.Login ],
  'registration' : [Pages.Registration],


  'chat-list'    : [Pages.ChatList, {
    chats:[
      {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aperiam magnam ', mess_time:'10:49',mess_count:'2' },
      {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aperiam magnam ', mess_time:'10:49',mess_count:'3' }, 
      {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet  Aut aperiam magnam ', mess_time:'10:49',mess_count:'' },
     
    ] ,
    profIcon: profIcon,
    showDialogAddUser:false,
    showDialogRemoveUser:false,
  
  }],
  'chat-list_add_dialog'    : [Pages.ChatList, {
    chats:[
      {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aperiam magnam ', mess_time:'10:49',mess_count:'2' },
      {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aperiam magnam ', mess_time:'10:49',mess_count:'3' }, 
      {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet  Aut aperiam magnam ', mess_time:'10:49',mess_count:'' },
     
    ] ,
    profIcon: profIcon,
    showDialogAddUser:true,
  }],
  'chat-list_remove_dialog'    : [Pages.ChatList, {
    chats:[
      {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aperiam magnam ', mess_time:'10:49',mess_count:'2' },
      {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aperiam magnam ', mess_time:'10:49',mess_count:'3' }, 
      {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet  Aut aperiam magnam ', mess_time:'10:49',mess_count:'' },
     
    ] ,
    profIcon: profIcon,
    showDialogRemoveUser:true,
  }],

  'profile': [Pages.ProfilePage,{
    profileInfo:{
      avatar:avatar,
      visibleParams:{
        name:{
          label:'Имя',
          value:'Ivan'
        },
        lastName:{
          label:'Фамилия',
          value:'LastNameVal'
        },
        login:{
          label:'Логин',
          value:'LoginValue'
        },
        email:{
          label:'Почта',
          value:'emailVal'
        },
        pseudoName:{
          label:'Имя в чате',
          value:'pseudiname'
        },
        phoneNum:{
          label:'Телефон',
          value:'+7 (922) 243 23 23'
        }
      }
     }
     ,
     backIcon: backIcon
    }
  ],


  'profile_showDialogLoadFile': [Pages.ProfilePage,{
     backIcon: backIcon,
     showDialogLoadFile:true,
    }
  ],
  
  'profile_loadFileError': [Pages.ProfilePage,{
     backIcon: backIcon,
     showDialogLoadFile:true,
     loadFileError:true
    }
  ],
  
  'profile_loadFileName': [Pages.ProfilePage,{
      backIcon: backIcon,
      showDialogLoadFile:true,
      loadFileName:'pic.jpg'
    }
  ],

  'profile_loadFileEmpty': [Pages.ProfilePage,{
    backIcon: backIcon,
    showDialogLoadFile:true,
    loadFileEmpty:true
  }
  ],

  'nav': [ Pages.Navigate ],
  '404': [ Pages.Page404 ],
  '500': [ Pages.Page500 ]
};





Object.entries(Components).forEach(([ name, template ]) => {
  Handlebars.registerPartial(name, template);
});

function navigate(page: string) {
  //@ts-ignore
  const [ source, context ] = pages[page];
  const container = document.getElementById('app')!;

  const temlpatingFunction = Handlebars.compile(source);
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
