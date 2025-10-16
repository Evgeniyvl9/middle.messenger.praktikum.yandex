import Block    from '/src/core/block.ts'
import avatar   from '/src/assets/avatar.jpg'
import profIcon from '/src/assets/profIcon.jpg'
import backIcon from '/src/assets/back.png'
export default class ProfilePage extends Block {
    constructor(){
        super('div',{
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
            },
            profIcon,
            backIcon
        })
    }
    render(){
        return `
        <div class="profile-page__container">
            <div class="profile-page__back">
                <a href="" class="back__link">
                    <img src="{{ backIcon }}" alt="">
                </a>
            </div>
            <div class="profile-page__info__block">
                <div class="info-block__top">
                    <div class="info-block__avatar">
                        <img src="{{ profileInfo.avatar }}" alt="">
                    
                    </div>
                    <div class="info-block__name">
                        {{ profileInfo.visibleParams.name.value }}
                    </div>
                </div>
                <div class="info-block__middle">
                    <div class="info_table">
                        {{#each profileInfo.visibleParams }}
                        <div class="r">
                            <div class="lable">{{label}}</div>
                            <div class="value">{{value}}</div>
                        </div>
                        {{/each}}
                    </div>
                </div>
                <div class="info-block__bottom">
                    <div class="info_table">
                        <div class="r">
                            <div class="lable"><a href="">Изменить данные</a></div>
                            <div class="value"></div>
                        </div>
                        <div class="r">
                            <div class="lable"><a href="">Изменить пароль</a></div>
                            <div class="value"></div>
                        </div>
                        <div class="r">
                            <div class="lable"><a href="" class="exit">Выйти</a></div>
                            <div class="value"></div>
                        </div>
                    </div>
                </div>
            </div>







        </div>
        {{#if showDialogLoadFile}}
        {{>DialogLoadFile}}
        {{/if}}
        
        
        `
    }

}

