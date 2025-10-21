import Block from '/src/core/block.ts'
import Handlebars from 'handlebars';
//import Dialog from  '/src/components/dialog/dialog'
import Dialog from  '/src/components/dialog/dialog'
import Button from  '/src/components/button/button'
import Input from  '/src/components/input/input'

import DialogMessageFiles from  '/src/components/dialog/dialogMessageFiles/dialogMessageFiles'
import DialogUserActions from  '/src/components/dialog/dialogUserActions/dialogUserActions'

import avatar   from '/src/assets/avatar.jpg'
import profIcon from '/src/assets/profIcon.jpg'

function inputMod(props){
  return  Handlebars.compile(
      new Input(props).render()
    )(
      props
    )
} 



export default class ChatListPage extends Block{
    constructor(props:any){
        super('div',{
            ...props,
            userActionsShow:false,
            showFileAddDialog:false,
            chatSelect:{
                selectedStatus:false,
                chatUser:'Andrey',
                avatar,
                messageList:[
                    {
                        userIsSender:false,
                        mess:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut aperiam magnam',
                        mess_time:'10:49'
                    },
                    {
                        userIsSender:false,
                        mess:'Lorem ipsum, dolor ?  ',
                        mess_time:'10:49'
                    },
                    {
                        userIsSender:true,
                        mess:'Lorem ipsum, dolor sit amet consectetur adipisicing  ',
                        mess_time:'10:49'
                    }
                ]

            },
            attrs:{
            },
            events:{
                click:(e) => {
                    //console.log(e)
                    if (e.target.closest('.chat-list__element')) {
                        let k =  this.props.chatSelect 
                        k.selectedStatus = true
                        this.setProps({
                            chatSelect: k
                        })
                    } 
                    else if (e.target.closest('.drop_menu_show-button')) {
                        //let k =  !this.props.showDialogAddUser 
                        //this.setProps({
                        //    showDialogAddUser: k
                        //})
                    }
                }
            },
            UserActionsShowBut:  new Button({
                className: 'drop_menu_show-button',
                type:'button',
                onClick:(e)=>{
                    let nV = !this.props.userActionsShow
                    this.setProps({
                        userActionsShow:nV,
                    })
                },
            }),
            DialogUserActions:new DialogUserActions({
                AddUserDialogRun:    new Button({
                    className: 'drop_menu__element',
                    type:'button',
                    text:'Добавить пользователя',
                    onClick:()=>{
                        this.setProps({
                            userActionsShow:false,
                            showDialogAddUser:true,
                            showDialogRemoveUser:false,
                        })
                    },
                }),
                RemoveUserDialogRun: new Button({
                    className: 'drop_menu__element',
                    type:'button',
                    text:'Удалить пользователя',
                    onClick:()=>{
                        this.setProps({
                            userActionsShow:false,
                            showDialogAddUser:false,
                            showDialogRemoveUser:true,
                        })
                    },
                }), 
            }) ,
            DialogAddUser: new Dialog({
                title:'Добавить пользователя',
                partialBlock:'<div>'+ inputMod(      
                    {
                        type : "text" ,
                        label: "Логин",
                        name : "login"
                    }
                )+'</div>',
                onClose:()=>{
                    this.setProps({
                        showDialogAddUser:false,
                        showDialogRemoveUser:false,
                    })
                },
                button: new Button({
                    className: 'blue',
                    type:'submit',
                    text:'Добавить',
                    onClick:()=>{
                        this.setProps({
                            showDialogAddUser:false,
                            showDialogRemoveUser:false,
                        })
                    },
                }),

            }),
            NewMessage: new Input({
                type : "text" ,
                label: "",
                name : "message"
            }),
            NewMessageSubmitBut: new Button({
                className: 'send_message_button',
                type:'submit',
                onClick:()=>{
                    this.setProps({
                        showDialogAddUser:false,
                        showDialogRemoveUser:false,
                    })
                },
            }),
            FilesAdd: new Button({
                className:'file_add_button',
                type:'button',
                
                onClick:()=>{
                    let nV = !this.props.showFileAddDialog
                    this.setProps({
                        showFileAddDialog:nV
                    })
                }
            }),
            FileAddDialog:new DialogMessageFiles({
                addImg:new Input({
                    type:'file',
                    label:'Фото или Видео',
                    name:'newMessFileImg',
                    className:'newMessFileImg',
                    access:'image/png, image/jpeg'
                }),
                addDoc:new Input({
                    type:'file',
                    label:'Файл',
                    name:'newMessFileDoc',
                    className:'newMessFileDoc',
                    access:' .doc,.pdf'
                })
            })
        })
    }
    render(){
        return `
            <div class="chat-list__container">
                <div class="chat-list">
                    <div class="chat-list__top">
                        <div class="prof-link"> <a href="">Профиль <img src='{{profIcon}}' alt=""></a>   </div>
                        <form action="" class="chat-list__search">
                            <input type="text" placeholder="Поиск">
                        </form>
                    </div>
                    <div class="chat-list__middle">
                    {{#each chats}}
                        <div class="chat-list__element">
                            <img src="{{avatar}}" alt="" class="element__avatar">
                            <div class="element__content">
                                <div class="element-content__user_name">
                                    {{name}}
                                </div>
                                <div class="element_content__last_mess">
                                {{last_mess}}
                                </div>
                            </div>
                            <div class="element__info">
                                <div class="element-info__time">{{mess_time}}</div>
                                <div class="element-info__no-read-count">{{mess_count}}</div>
                            </div>
                        </div>
                    {{/each}}
                                
                    </div>
                </div>
                <div class="chat-detail">
                    {{#if chatSelect.selectedStatus}}
                        <div class="chat-detail__info">
                            <div class="user_info">
                                <div class="avatar">
                                    <img src="{{chatSelect.avatar}}" alt="" class="element__avatar">
                                </div>
                                <div class="user_name">
                                   {{chatSelect.chatUser}}
                                </div>                                
                            </div>
                            <div class="drop_menu_wrap">
                                {{{UserActionsShowBut}}}
                                {{#if userActionsShow}}
                                    {{{DialogUserActions}}}
                                {{/if}}
                             </div>   
                        </div>
                        <div class="chat-detail__list">
                            {{#each chatSelect.messageList}}
                                {{#if userIsSender}}
                                    <div class="chat_mess second_chat_mess">
                                       {{mess}}
                                       <time>{{mess_time}}</time>
                                    </div>
                                {{else}}
                                    <div class="chat_mess primory_chat_mess"> 
                                        {{mess}}
                                        <time>{{mess_time}}</time>
                                    </div>
                                {{/if}}
                            {{/each}}
                        </div>
                        <div class="chat-detail__mess">
                            {{{FilesAdd}}}
                            <form class="new_message_form">
                                {{{NewMessage}}}
                                {{{NewMessageSubmitBut}}}
                            </form>
                        </div>
                    {{else}}
                         Выберите чат чтобы отправить сообщение
                    {{/if}}
                </div>
            </div>
            {{#if showDialogAddUser}}
                {{{ DialogAddUser }}}
            {{/if}}

            {{#if showDialogRemoveUser}}
                {{{DialogRemoveUser}}}
            {{/if}}
            
            {{#if showFileAddDialog}}
                {{{FileAddDialog}}}
            {{/if}}
        `
    }
}
