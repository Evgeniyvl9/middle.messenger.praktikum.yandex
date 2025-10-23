import Block from '../../core/block.ts'
import Button from  '../../components/button/button'
import Input from  '../../components/input/input'
import InputWithoutLabel from '../../components/input/inputWithoutLabel/inputWithoutLabel';
import DialogMessageFiles from  '../../components/dialog/dialogMessageFiles/dialogMessageFiles'
import DialogUserActions from  '../../components/dialog/dialogUserActions/dialogUserActions'
import DialogRemoveUser from '../../components/dialogRemoveUser/dialogRemoveUser'
import DialogAddUser from '../../components/dialogAddUser/dialogAddUser';
import isEmpty from '../../core/functions.ts'
import avatar   from '../../assets/avatar.jpg'

// function inputMod(props){
//   return  Handlebars.compile(
//       new Input(props).render()
//     )(
//       props
//     )
// } 
interface ChatListPageProps {
    [key: string]: unknown;
    chatSelect: {
        selectedStatus:boolean
    };
    dialogAddUserParams: {
        addUserLogin: string;
    };
    newMessageContent:{
        text:string
    },
    children:Record<string, unknown>;
    userActionsShow:boolean;
    showFileAddDialog:boolean;
}
type Children = Record<string, { children: Record<string, { setProps: (props: any) => void }> }>;

export default class ChatListPage extends Block{
    public props: ChatListPageProps;
    public children: Children = {} as Children; // или конкретный тип

    //public setProps: (nextProps:unknown)=>void;

    constructor(props: ChatListPageProps){

        super('div',{
            ...props,
            userActionsShow:false,
            showFileAddDialog:false,
            //this.children = {}; 
            chatSelect:{
                selectedStatus:false,
                chatUser:'Andrey',
                avatar,
                messageList:[
                    {
                        userIsSender:false,
                        mess:'Lorem ipsum, dolor s elit. ',
                        mess_time:'10:49'
                    },
                    {
                        userIsSender:false,
                        mess:'Lorem ipsum, dolor ?  ',
                        mess_time:'10:49'
                    },
                    {
                        userIsSender:true,
                        mess:'Lorem ipsum, dolor sit   adipisicing  ',
                        mess_time:'10:49'
                    }
                ]

            },
            attrs:{
            },
            events:{
                click:(e:Event) => {
                    if ((e.target as HTMLElement).closest('.chat-list__element')) {
                        const k =  this.props.chatSelect 
                        k.selectedStatus = true
                        this.setProps({
                            chatSelect: k
                        })
                    } 
                    else if ((e.target as HTMLElement).closest('.drop_menu_show-button')) {
                        //const k =  !this.props.showDialogAddUser 
                        //this.setProps({
                        //    showDialogAddUser: k
                        //})
                    }
                }
            },
            UserActionsShowBut:  new Button({
                className: 'drop_menu_show-button',
                type:'button',
                onClick:()=>{
                    const nV = !this.props.userActionsShow
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

            dialogAddUserParams:{
                addUserLogin:'',
                addUserLoginError:''
            },

            DialogAddUser: new DialogAddUser({
                events:{
                    click:(e:Event)=>{
                        if((e.target as HTMLElement).classList.contains('dialog_shirma')){
                            this.setProps({
                                showDialogAddUser:false,
                                showDialogRemoveUser:false,
                            })
                        }
                    }
                },
                LoginInput:new Input({
                    label:'Логин',
                    name:'login',
                    type:'text',
                   
                    onChange:(e:Event)=>{
                        const value = (e.target as HTMLInputElement).value
                        this.setProps({
                            ...props,
                            dialogAddUserParams:{
                                addUserLogin:value,
                                addUserLoginError:''
                            },
                        })
                        console.log(e.target)
                    }

                }),
                errorText:'',
                AddUserButton:new Button({
                    className: 'blue',
                    type:'submit',
                    text:'Добавить',
                    onClick:(e:Event)=>{
                        e.preventDefault()
                        if(!isEmpty(this.props.dialogAddUserParams.addUserLogin)){
                            console.log(this.props.dialogAddUserParams.addUserLogin)
                            this.setProps({
                                showDialogAddUser:false,
                                showDialogRemoveUser:false,
                            })
                        }
                        else{
                            console.log(this.children)
                            this.children.DialogAddUser.children.LoginInput.setProps({
                                errorText:'Логин пустой'
                            })
                            this.setProps({
                                dialogAddUserParams:{
                                    addUserLogin:'',
                                    addUserLoginError:''
                                },
                            })
                            console.log('Login is empty ')
                        }

                    },
                }),
            }),

            DialogRemoveUser: new DialogRemoveUser({
                events:{
                    click:(e:Event)=>{
                        if((e.target as HTMLElement).classList.contains('dialog_shirma')){
                            this.setProps({
                                showDialogAddUser:false,
                                showDialogRemoveUser:false,
                            })
                        }
                    }
                },
                LoginInput:new Input({
                    label:'Логин',
                    name:'login',
                    type:'text',
                   
                    onChange:(e:Event)=>{
                        const value = (e.target as HTMLInputElement).value
                        this.setProps({
                            ...props,
                            dialogAddUserParams:{
                                addUserLogin:value,
                                addUserLoginError:''
                            },
                        })
                    }

                }),
                errorText:'',
                RemoveUserButton:new Button({
                    className: 'blue',
                    type:'submit',
                    text:'Удалить',
                    onClick:(e:Event)=>{
                        e.preventDefault()
                        if(!isEmpty(this.props.dialogAddUserParams.addUserLogin)){
                            this.setProps({
                                showDialogAddUser:false,
                                showDialogRemoveUser:false,
                            })
                        }
                        else{
                            console.log(this.children)
                            this.children.DialogRemoveUser.children
                                .LoginInput.setProps({
                                    errorText:'Логин пустой'
                                })
                            this.setProps({
                                dialogAddUserParams:{
                                    addUserLogin:'',
                                    addUserLoginError:''
                                },
                            })
                            console.log('Login is empty ')
                        }

                    },
                }),
            }),
            // DialogAddUser: new Dialog({
            //     title:'Добавить пользователя',
            //     partialBlock:'<div>'+ inputMod(      
            //         {
                        
            //             type : "text" ,
            //             label: "Логин",
            //             name : "login",
            //             events:{
            //                 onChange:(e)=>{
            //                     console.log(e.target)
            //                 }
            //             }
            //         }
            //     )+'</div>',
            //     onClose:()=>{
            //         this.setProps({
            //             showDialogAddUser:false,
            //             showDialogRemoveUser:false,
            //         })
            //     },
            //     button: new Button({
            //         className: 'blue',
            //         type:'submit',
            //         text:'Добавить',
            //         onClick:()=>{
            //             this.setProps({
            //                 showDialogAddUser:false,
            //                 showDialogRemoveUser:false,
            //             })
            //         },
            //     }),

            // }),

            
            newMessageContent:{
                text:''
            },
            NewMessage: new InputWithoutLabel({
                attrs:{
                    type : "text" ,
                    label: "",
                    name : "message",
                },
                onChange:(e:Event)=>{
                    const value =  (e.target as HTMLInputElement).value;
                    if(!isEmpty(value)){
                        this.setProps({
                            ...props,
                            newMessageContent:{
                                text:value
                            }
                        })
                    }
                   
                },
            }),
            NewMessageSubmitBut: new Button({
                className: 'send_message_button',
                type:'submit',
                onClick:()=>{
                    if(!isEmpty(this.props.newMessageContent.text)){
                        console.log(this.props.newMessageContent.text)

                    }
                    else{
                        alert('Message is empty')
                    }
                    // this.setProps({
                    //     showDialogAddUser:false,
                    //     showDialogRemoveUser:false,
                    // })
                },
            }),
            FilesAdd: new Button({
                className:'file_add_button',
                type:'button',
                
                onClick:()=>{
                    const nV = !this.props.showFileAddDialog
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
        this.props = props
        //this.children = children
    }
    render(){
        return `
            <div class="chat-list__container">
                <div class="chat-list">
                    <div class="chat-list__top">
                        <div class="prof-link"> 
                            <a href="">Профиль <img src='{{profIcon}}' alt=""></a>   
                        </div>
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
