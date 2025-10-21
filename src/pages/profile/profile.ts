import Block    from '/src/core/block.ts'
import Handlebars from 'handlebars';
import Dialog from  '/src/components/dialog/dialog'
import Button   from '/src/components/button/button'
import Input, { inputValidator }    from '/src/components/input/input'
import InputWithoutLabel    from '/src/components/input/InputWithoutLabel/inputWithoutLabel'
import avatar   from '/src/assets/avatar.jpg'
import profIcon from '/src/assets/profIcon.jpg'
import backIcon from '/src/assets/back.png'


export default class ProfilePage extends Block {
    constructor(props){
        super('div',{
             ...props,
            errors:{

            },
            showErrorMes: false,
            ChangeValue__first_name: new InputWithoutLabel({
                attrs:{
                    type: 'text',
                    name: 'first_name',
                    //value:'Ivan',
                    tabindex:1
                } ,
                onChange:(e) => {
                    console.log(inputValidator(e,/^[A-ZА-ЯЁ][a-zA-Zа-яёA-ZА-ЯЁ-]*$/))
                    let nValue = e.target.value
                    this.children.ChangeValue__first_name.setProps({
                        //error:inputValidator(e,/^[A-ZА-ЯЁ][a-zA-Zа-яёA-ZА-ЯЁ-]*$/),
                        className:'qwe',
                        attrs:{
                            ...this.props.attrs,
                            value:nValue,
                            'data-error':inputValidator(e,/^[A-ZА-ЯЁ][a-zA-Zа-яёA-ZА-ЯЁ-]*$/)
                        }
                    });

                    this.setProps({
                        errors: {
                            ...this.props.errors,
                            first_name: inputValidator(e,/^[A-ZА-ЯЁ][a-zA-Zа-яёA-ZА-ЯЁ-]*$/)
                        }
                    })
                    console.log(this.props.errors)
                    // if(!inputValidator(e,/^[A-ZА-ЯЁ][a-zA-Zа-яёA-ZА-ЯЁ-]*$/)){
                    //     this.children.ChangeValue__first_name.setProps({
                    //         value:nValue,
                    //         error:true
                    //     });
                        
                    // }
                    // else{
                    //     console.log('Ура')
                    //     this.children.ChangeValue__first_name.setProps({
                    //         value:nValue,
                    //         error:false
                    //     });

                    //     this.setProps({
                    //         errors: {
                    //             ...this.props.errors,
                    //             first_name: nValue
                    //         }
                    //     })
                    // }
                },
                 onBlur: (e) => {// не работает
                    console.log(e)
                    //const value = e.target.value;
                    //let error = '';
                    //if(value === "error") {
                    //    error = "Some error is happened."
                    //}
                    //if(value.length < 3) {
                    //    error = "More 3 characters."
                    //}
                    //this.children.InputLogin.setProps({
                    //    error,
                    //});
                },               
            }),
            ChangeValue__second_name: new InputWithoutLabel({
                 attrs:{
                    type: 'text',
                    name: 'second_name',
                    //value:'LastNameVal',
                },
                onChange:(e) => {
                    let nValue = e.target.value
                    this.children.ChangeValue__second_name.setProps({
                        value:nValue,
                        error:inputValidator(e,/^[A-ZА-ЯЁ][a-zA-Zа-яёA-ZА-ЯЁ-]*$/)
                    });

                    this.setProps({
                        errors: {
                            ...this.props.errors,
                            second_name: inputValidator(e,/^[A-ZА-ЯЁ][a-zA-Zа-яёA-ZА-ЯЁ-]*$/)
                        }
                    })
                    // if(!inputValidator(e,/^[A-ZА-ЯЁ][a-zA-Zа-яёA-ZА-ЯЁ-]*$/)){
                    //     this.children.ChangeValue__second_name.setProps({
                    //         value:e.target.value,
                    //         error:true
                    //     });

                    // }
                    // else{
                    //     this.children.ChangeValue__second_name.setProps({
                    //         error:false
                    //     });
                    // }
                },
            }),
            
            ChangeValue__email: new InputWithoutLabel({
                attrs:{
                    type: 'text',
                    name: 'email',
                    //value:'emailVal',
                },
                onChange:(e) => {
                    let nValue = e.target.value
                    this.children.ChangeValue__email.setProps({
                        value:nValue,
                        error:inputValidator(e,/^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]+$/)
                    });

                    this.setProps({
                        errors: {
                            ...this.props.errors,
                            email: inputValidator(e,/^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]+$/)
                        }
                    })
                    // if(!inputValidator(e,/^[A-ZА-ЯЁ][a-zA-Zа-яёA-ZА-ЯЁ-]*$/)){
                    //     this.children.ChangeValue__email.setProps({
                    //         value:e.target.value,
                    //         error:true
                    //     });

                    // }
                    // else{
                    //     this.children.ChangeValue__email.setProps({
                    //         error:false
                    //     });
                    // }
                },

            }),
            ChangeValue__login: new InputWithoutLabel({
                attrs:{
                    type: 'text',
                    name: 'login',
                    //value:'LoginValue',
                },
                onChange:(e) => {
                    let nValue = e.target.value
                    this.children.ChangeValue__login.setProps({
                        value:nValue,
                        error:inputValidator(e,/^(?=.*[a-zA-Z])[a-zA-Z0-9_-]{3,20}$/)
                    });

                    this.setProps({
                        errors: {
                            ...this.props.errors,
                            login: inputValidator(e,/^(?=.*[a-zA-Z])[a-zA-Z0-9_-]{3,20}$/)
                        }
                    })
                    // if(!inputValidator(e,/^[A-ZА-ЯЁ][a-zA-Zа-яёA-ZА-ЯЁ-]*$/)){
                    //     this.children.ChangeValue__login.setProps({
                    //         value:e.target.value,
                    //         error:true
                    //     });

                    // }
                    // else{
                    //     this.children.ChangeValue__login.setProps({
                    //         error:false
                    //     });
                    // }
                },


            }),
            ChangeValue__phone: new InputWithoutLabel({
                attrs:{
                    type: 'text',
                    name: 'phone',
                    //value:'+7 (922) 243 23 23',
                    },
                onChange:(e) => {
                    let nValue = e.target.value
                    this.children.ChangeValue__phone.setProps({
                        value:nValue,
                        error:inputValidator(e,/^\+?\d{10,15}$/)
                    });

                    this.setProps({
                        errors: {
                            ...this.props.errors,
                            phone: inputValidator(e,/^\+?\d{10,15}$/)
                        }
                    })
                    // if(!inputValidator(e,/^[A-ZА-ЯЁ][a-zA-Zа-яёA-ZА-ЯЁ-]*$/)){
                    //     this.children.ChangeValue__phone.setProps({
                    //         value:e.target.value,
                    //         error:true
                    //     });

                    // }
                    // else{
                    //     this.children.ChangeValue__phone.setProps({
                    //         error:false
                    //     });

                    // }
                },

            }),
            ChangeValue__display_name: new InputWithoutLabel({
                attrs:{
                    type: 'text',
                    name: 'display_name',
                    //value:'pseudiname',
                },
                onChange:(e) => {
                    let nValue = e.target.value
                    this.children.ChangeValue__display_name.setProps({
                        value:nValue,
                        error:inputValidator(e,/^[A-ZА-ЯЁ][a-zA-Zа-яёA-ZА-ЯЁ-]*$/)
                    });

                    this.setProps({
                        errors: {
                            ...this.props.errors,
                            display_name: inputValidator(e,/^[A-ZА-ЯЁ][a-zA-Zа-яёA-ZА-ЯЁ-]*$/)
                        }
                    })
                    // if(!inputValidator(e,/^[A-ZА-ЯЁ][a-zA-Zа-яёA-ZА-ЯЁ-]*$/)){
                    //     this.children.ChangeValue__display_name.setProps({
                    //         value:e.target.value,
                    //         error:true
                    //     });

                    // }
                    // else{
                    //     this.children.ChangeValue__display_name.setProps({
                    //         error:false
                    //     });

                    // }
                },
            }),
            profileInfo:{
                avatar:avatar,
                visibleParams:{
                    name:{
                        label:'Имя',
                        value:'Ivan',

                    },
                    lastName:{
                        label:'Фамилия',
                        value:'LastNameVal',

                    },
                    login:{
                        label:'Логин',
                        value:'LoginValue',
                    },
                    email:{
                        label:'Почта',
                        value:'emailVal',
                    },
                    pseudoName:{
                        label:'Имя в чате',
                        value:'pseudiname',
                    },
                    phoneNum:{
                        label:'Телефон',
                        value:'+7 (922) 243 23 23',
                    }
                }
            },

            
            editModeDisable:true,
            editSwichBut:new Button({
                className: 'editSwichBut',
                type:'button',
                text:'Изменить данные',
                onClick:()=>{
                    let nV = !this.props.editModeDisable
                    this.setProps({
                        editModeDisable:nV,
                    })
                },

            }),
            saveBut:new Button({
                className: 'saveBut blue',
                type:'button',
                text:'Сохранить',
                onClick:()=>{
                    console.log(this.props.errors)
                    let hasErrors = false
                    Object.entries(this.props.errors).forEach((el)=>{
                            //console.log(el)
                            if(!el[1]){
                                hasErrors = true
                                return
                                // this.setProps({
                                //     showErrorMes:true

                                // })
                            }
                        })
                    console.log(hasErrors)
                    if(!hasErrors){
                        this.setProps({
                            showErrorMes:false,
                            editModeDisable:true,
                        })
                    }
                    else{
                         this.setProps({
                            showErrorMes:true,
                        })                       
                    }
                },
            }),
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
            <form class="profile-page__info__block">
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
                        <div class="r">
                            <div class="lable">{{profileInfo.visibleParams.name.label}}</div>
                            
                            <div class="value">
                            {{#if editModeDisable}}
                                {{profileInfo.visibleParams.name.value}}
                            {{else}}
                                {{{ChangeValue__first_name}}}
                            {{/if}}
                            </div>
                        </div>
                        <div class="r">
                            <div class="lable">{{profileInfo.visibleParams.lastName.label}}</div>
                            <div class="value">
                             {{#if editModeDisable}}
                                {{profileInfo.visibleParams.lastName.value}}
                             {{else}}
                                {{{ChangeValue__second_name}}}
                            {{/if}}                               
                            </div>
                        </div>
                        <div class="r">
                            <div class="lable">{{profileInfo.visibleParams.login.label}}</div>
                            <div class="value">
                             {{#if editModeDisable}}
                                {{profileInfo.visibleParams.login.value}}
                            {{else}}
                                {{{ChangeValue__login}}}
                            {{/if}}
                            </div>
                        </div>
                        <div class="r">
                            <div class="lable">{{profileInfo.visibleParams.email.label}}</div>
                            <div class="value">
                             {{#if editModeDisable}}
                                {{profileInfo.visibleParams.email.value}}
                            {{else}}
                                {{{ChangeValue__email}}}
                            {{/if}}
                            </div>
                        </div>
                        <div class="r">
                            <div class="lable">{{profileInfo.visibleParams.pseudoName.label}}</div>
                            <div class="value">
                             {{#if editModeDisable}}
                                {{profileInfo.visibleParams.pseudoName.value}}
                            {{else}}
                                {{{ChangeValue__display_name}}}
                            {{/if}}
                            </div>
                        </div>
                        <div class="r">
                            <div class="lable">{{profileInfo.visibleParams.phoneNum.label}}</div>
                            <div class="value">
                         {{#if editModeDisable}}
                               {{profileInfo.visibleParams.phoneNum.value}}
                            {{else}}
                                {{{ChangeValue__phone}}}
                            {{/if}}                           
                            </div>
                        </div>
                    </div>
                </div>
                {{#if editModeDisable}}
                    <div class="info-block__bottom__edit-mod">
                        <div class="info-block__bottom">
                            <div class="info_table">
                                <div class="r">
                                    <div class="lable">
                                    {{{editSwichBut}}}
                                </div>
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
                {{else}}
                    {{#if ${ Object.values(this.props.errors)?true:false}}}
                        Ошибка в данных
                    {{/if}}
                    {{{saveBut}}}
                {{/if}}
            </form>
        </div>
        {{#if showDialogLoadFile}}
        {{>DialogLoadFile}}
        {{/if}}
        
        
        `
    }

}

