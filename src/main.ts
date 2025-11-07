import Block    from  './core/block.ts'
import './assets/normalize.css'
import './assets/style.css'
import Handlebars from 'handlebars';
import * as Pages  from './pages'
import * as Components from './components'
import renderDOM from "./core/renderDom";
import avatar from './assets/avatar.jpg'


// function inputMod(props){
//   //return  new Input(props).render()

//   return  Handlebars.compile(
//       new Input(props).render()
//     )(
//       props
//     )
// } 





const pages = {
  'login': [ Pages.Login,{} ],
  'registration' : [Pages.Registration,{}],
  'chat-list'    : [Pages.ChatListPage,{
        chats:[
          {name:'Андрей', 
            avatar:avatar,last_mess:'Lelit. Aut aperiam magnam ', 
            mess_time:'10:49',
            mess_count:'2' },
          {name:'Андрей', 
            avatar:avatar,
            last_mess:'Lorem ipsum, . Aut aperiam magnam ',
             mess_time:'10:49',mess_count:'3' }, 
          {name:'Андрей', 

            avatar:avatar,
            last_mess:'Lorem ipsum, dolor magnam ', 
            mess_time:'10:49',mess_count:'' },
        
        ] ,
        showDialogAddUser:false,
        showDialogRemoveUser:false,
  }],

  'profile': [Pages.ProfilePage,{}],
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

   'nav': [ Pages.Navigate ,{}],
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
   if (page in pages) {
    const [source, context] = pages[page as keyof typeof pages];
   
    if (typeof source === "function") {
      renderDOM(new (source as new (props: unknown) => Block)(context));
      return;
    }

    const container = document.getElementById("app")!;

    const temlpatingFunction = Handlebars.compile(source);
    container.innerHTML = temlpatingFunction(context);
  }
}

document.addEventListener("DOMContentLoaded", () => navigate("nav"));

document.addEventListener("click", (e) => {
  const target = e.target;
  if (!target) return;
  
  const page = (target as HTMLElement).getAttribute("page");  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
