import './assets/normalize.css'
import './assets/style.less'
import Handlebars from 'handlebars';
//import * as modules from './modules'
import Dialog from  '/src/components/dialog/dialog'
import Button from  '/src/components/button/button'
import Input from  '/src/components/input/input'
import * as Pages  from './pages'
import * as Components from './components'
import renderDOM from "./core/renderDom";
import avatar from './assets/avatar.jpg'
import profIcon from './assets/profIcon.jpg'
import backIcon from './assets/back.png'


function inputMod(props){
  //return  new Input(props).render()

  return  Handlebars.compile(
      new Input(props).render()
    )(
      props
    )
} 

/*
  Handlebars.compile(
      inputMod({
        type : "text" ,
        label: "Логин",
        name : "login"
      })
    )(
        {
        type : "text" ,
        label: "Логин",
        name : "login"
      }
    )
*/

// function inputMod(props){
//   // function inputMod2(props){
//   //   return  new Input(props).render()
//   // } 
//   let r = (props)=>{ new Input(props).render()}

//   console.log(r)
//   return Handlebars.compile(r)(props)
// }






const pages = {
  //list: [Pages.ListPage],
  //nav: [Pages.NavigatePage],

  
  'login': [ Pages.Login ],
  'registration' : [Pages.Registration],
  'chat-list'    : [Pages.ChatListPage,{
        chats:[
          {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aperiam magnam ', mess_time:'10:49',mess_count:'2' },
          {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aperiam magnam ', mess_time:'10:49',mess_count:'3' }, 
          {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet  Aut aperiam magnam ', mess_time:'10:49',mess_count:'' },
        
        ] ,
        showDialogAddUser:false,
        showDialogRemoveUser:false,
  }],

  // 'chat-list'    : [Pages.ChatList, {
  //   chats:[
  //     {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aperiam magnam ', mess_time:'10:49',mess_count:'2' },
  //     {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aperiam magnam ', mess_time:'10:49',mess_count:'3' }, 
  //     {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet  Aut aperiam magnam ', mess_time:'10:49',mess_count:'' },
     
  //   ] ,
  //   profIcon: profIcon,
  //   showDialogAddUser:false,
  //   showDialogRemoveUser:false,
  
  // }],
  'chat-list_add_dialog': [Pages.ChatListPage,
    {
      chats:[
        {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aperiam magnam ', mess_time:'10:49',mess_count:'2' },
        {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aperiam magnam ', mess_time:'10:49',mess_count:'3' }, 
        {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet  Aut aperiam magnam ', mess_time:'10:49',mess_count:'' },
      ] ,
      DialogAddUser: new Dialog({
        title:'Добавить пользователя',
        partialBlock:'<div>'+ inputMod(      
          {
            type : "text" ,
            label: "Логин",
            name : "login"
          }
        )+'</div>',
        button: new Button({
            className: 'blue',
            type:'submit',
            text:'Добавить',
        })
      }),
      showDialogAddUser:true,
      showDialogRemoveUser:false,
    }
  ],
  'chat-list_remove_dialog'    : [Pages.ChatListPage,     
    {
      chats:[
        {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aperiam magnam ', mess_time:'10:49',mess_count:'2' },
        {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aperiam magnam ', mess_time:'10:49',mess_count:'3' }, 
        {name:'Андрей', avatar:avatar,last_mess:'Lorem ipsum, dolor sit amet  Aut aperiam magnam ', mess_time:'10:49',mess_count:'' },
      ] ,
      DialogRemoveUser: new Dialog({
        title:'Удалить пользователя',
        actionText:"Удалить",
        partialBlock:'<div>'+ inputMod(      
          {
            type : "text" ,
            label: "Логин",
            name : "login"
          }
        )+'</div>',
        button: new Button({
            className: 'blue',
            type:'submit',
            text:'Добавить',
        })
      }),
      showDialogAddUser:false,
      showDialogRemoveUser:true,
    }
  ],
  'profile': [Pages.ProfilePage],
  // 'profile': [Pages.ProfilePage,{
  //   profileInfo:{
  //     avatar:avatar,
  //     visibleParams:{
  //       name:{
  //         label:'Имя',
  //         value:'Ivan'
  //       },
  //       lastName:{
  //         label:'Фамилия',
  //         value:'LastNameVal'
  //       },
  //       login:{
  //         label:'Логин',
  //         value:'LoginValue'
  //       },
  //       email:{
  //         label:'Почта',
  //         value:'emailVal'
  //       },
  //       pseudoName:{
  //         label:'Имя в чате',
  //         value:'pseudiname'
  //       },
  //       phoneNum:{
  //         label:'Телефон',
  //         value:'+7 (922) 243 23 23'
  //       }
  //     }
  //    }
  //    ,
  //    backIcon: backIcon
  //   }
  // ],


  // 'profile_showDialogLoadFile': [Pages.ProfilePage,{
  //    backIcon: backIcon,
  //    showDialogLoadFile:true,
  //   }
  // ],
  
  // 'profile_loadFileError': [Pages.ProfilePage,{
  //    backIcon: backIcon,
  //    showDialogLoadFile:true,
  //    loadFileError:true
  //   }
  // ],
  
  // 'profile_loadFileName': [Pages.ProfilePage,{
  //     backIcon: backIcon,
  //     showDialogLoadFile:true,
  //     loadFileName:'pic.jpg'
  //   }
  // ],

  // 'profile_loadFileEmpty': [Pages.ProfilePage,{
  //   backIcon: backIcon,
  //   showDialogLoadFile:true,
  //   loadFileEmpty:true
  // }
  // ],

   'nav': [ Pages.Navigate ],
  // '404': [ Pages.Page404 ],
  // '500': [ Pages.Page500 ]
};


Object.entries(Components).forEach(([name, template]) => {
  if (typeof template === "function") {
    return;
  }
  Handlebars.registerPartial(name, template);
});


function navigate(page: string) {
  //@ts-ignore
  const [source, context] = pages[page];
  if (typeof source === "function") {
    renderDOM(new source(context));
    return;
  }

  const container = document.getElementById("app")!;

  const temlpatingFunction = Handlebars.compile(source);
  container.innerHTML = temlpatingFunction(context);
}

document.addEventListener("DOMContentLoaded", () => navigate("nav"));

document.addEventListener("click", (e) => {
  //@ts-ignore
  const page = e.target.getAttribute("page");
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
