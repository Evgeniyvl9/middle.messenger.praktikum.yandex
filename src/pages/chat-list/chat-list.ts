import Block from '/src/core/block.ts'
//import Dialog from  '/src/components/dialog/dialog'
import avatar   from '/src/assets/avatar.jpg'
import profIcon from '/src/assets/profIcon.jpg'

export default class ChatListPage extends Block{
    constructor(props:any){
        super('div',{
            ...props,
            chatSelect:false,
            attrs:{
                
            },
            events:{
                click:(e) => {
                    console.log(e)
                    if (e.target.classList.contains('chat-list__element') || 
                        e.target.parentElement.classList.contains('chat-list__element')) {
                        console.log('Клик на элементе чата');
                    } else {
                        console.log('Клик в пустое место');
                    }
                }
            },
            onClick: (e) => {
                console.log('test')
            }
            //onClick="this.setProps({chatSelect:true})

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
                    {{#if chatSelect}}
                        <div class="chat-detail__info"></div>
                        <div class="chat-detail__list">
                            {{#each chatDetail.messages}}
                                <div>{{text}}</div>
                            {{/each}}
                        </div>
                        <div class="chat-detail__mess">chat-detail__mess</div>
                    {{else}}
                         Выберите чат чтобы отправить сообщение
                    {{/if}}

                </div>
            </div>
            {{showDialogAddUser}}
            {{#if showDialogAddUser}}
                    123
                {{{ DialogAddUser }}}
            {{/if}}

            {{#if showDialogRemoveUser}}
                {{{DialogRemoveUser}}}
            {{/if}}


        `
    }
}