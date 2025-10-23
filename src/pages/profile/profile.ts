import Block    from '../../core/block.ts'
import Button   from '../../components/button/button'
import { inputValidator }    from '../../components/input/input'
import InputWithoutLabel    from  '../../components/input/inputWithoutLabel/inputWithoutLabel'
import avatar   from '../../assets/avatar.jpg'
import profIcon from '../../assets/profIcon.jpg'
import backIcon from '../../assets/back.png'

interface ProfilePageProps {
    tabindex:number;
    events: {
    //click: props.onClick,
        blur:    () => void;
        change:  () => void;

    };
    label:string;
    type: string;
    name: string;
    id:   string;
    props:object;
    onChange:  () => void;
}
export default class ProfilePage extends Block {
    // @ts-ignore
    public props:any; // или конкретный тип
    // @ts-ignore
    public children:any; // или конкретный тип
    constructor(props:ProfilePageProps){
        //props = this.props
        super('div',{
             ...props,
            errors:{

            },
            showErrorMes: false,
            newPassError:false,
            ChangeValue__first_name: new InputWithoutLabel({
                attrs:{
                    type: 'text',
                    name: 'first_name',
                    //value:'Ivan',
                    tabindex:1
                } ,
                onChange:(e:MouseEvent) => {
                    console.log(inputValidator(e,/^[A-ZА-ЯЁ][a-zA-Zа-яёA-ZА-ЯЁ-]*$/))
                    const nValue = (e.target as HTMLInputElement).value
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
                 onBlur: (e:MouseEvent) => {// не работает
                    console.log(e)
                    //const value =  (e.target as HTMLInputElement).value;
                    //const error = '';
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
                onChange:(e:MouseEvent) => {
                    const nValue =  (e.target as HTMLInputElement).value
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
                    //         value: (e.target as HTMLInputElement).value,
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
                onChange:(e:MouseEvent) => {
                    const nValue =  (e.target as HTMLInputElement).value
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
                    //         value: (e.target as HTMLInputElement).value,
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
                onChange:(e:MouseEvent) => {
                    const nValue =  (e.target as HTMLInputElement).value
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
                    //         value: (e.target as HTMLInputElement).value,
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
                onChange:(e:MouseEvent) => {
                    const nValue =  (e.target as HTMLInputElement).value
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
                    //         value: (e.target as HTMLInputElement).value,
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
                onChange:(e:MouseEvent) => {
                    const nValue =  (e.target as HTMLInputElement).value
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
                    //         value: (e.target as HTMLInputElement).value,
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
                    const nV = !this.props.editModeDisable
                    this.setProps({
                        editModeDisable:nV,
                    })
                },

            }),
            passChangePage:false,
            passChangeSwichBut:new Button({
                className: 'editSwichBut',
                type:'button',
                text:'Изменить пароль',
                onClick:()=>{

                   
                    
                    this.setProps({
                        passChangePage:true,
                    })
                },

            }),
            saveBut:new Button({
                className: 'saveBut blue',
                type:'button',
                text:'Сохранить',
                onClick:()=>{
                    if(this.props.passChangePage){
                        if(this.props.newPass != this.props.newPassRepeat ){
                            this.setProps({
                                newPassError:true,
                            })
                        }
                        else{
                            this.setProps({
                                newPassError:false,
                                passChangePage:false
                            })    
                        }
                    }
                    else{
                        let hasErrors = false
                        Object.entries(this.props.errors).forEach((el)=>{
                                if(!el[1]){
                                    hasErrors = true
                                    return
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
                    }
                    
                },
            }),


            OldPassInput:new InputWithoutLabel({
                attrs:{
                    type: 'password',
                    name: 'oldpass',
                    //value:'pseudiname',
                },
                onChange:(e:MouseEvent) => {
                    const nValue =  (e.target as HTMLInputElement).value
                    this.children.OldPassInput.setProps({
                        value:nValue,
                        error:inputValidator(e,/^[A-ZА-ЯЁ][a-zA-Zа-яёA-ZА-ЯЁ-]*$/)
                    });

                    this.setProps({
                        errors: {
                            ...this.props.errors,
                            display_name: inputValidator(e,/^[A-ZА-ЯЁ][a-zA-Zа-яёA-ZА-ЯЁ-]*$/)
                        }
                    })
                },
            }),
            NewPassInput:new InputWithoutLabel({
                attrs:{
                    type: 'password',
                    name: 'password',
                },
                onChange:(e:MouseEvent) => {
                    const nValue =  (e.target as HTMLInputElement).value
                    // this.children.NewPassInput.setProps({
                    //     value:nValue,
                    //     error:inputValidator(e,/^(?=.*[A-Z])(?=.*\d).{8,40}$/)
                    // });

                    this.setProps({
                        newPass: nValue
                    })

                },
            }),
            NewPassInputRepeat:new InputWithoutLabel({
                attrs:{
                    type: 'password',
                    name: 'password_repeat',
                },
                onChange:(e:MouseEvent) => {
                     const nValue =  (e.target as HTMLInputElement).value
                    // this.children.NewPassInputRepeat.setProps({
                    //     value:nValue,
                    //     error:inputValidator(e,/^(?=.*[A-Z])(?=.*\d).{8,40}$/)
                    // });

                    this.setProps({
                        newPassRepeat: nValue
                    })
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
            {{#if passChangePage}}
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
                            <div class="lable">Старый пароль</div>
                            <div class="value">
                                {{{OldPassInput}}}
                            </div>
                        </div>
                        <div class="r">
                            <div class="lable">Новый пароль</div>
                            <div class="value">
                                 {{{NewPassInput}}}
                            </div>
                        </div>
                        <div class="r">
                            <div class="lable">Повторите новый пароль</div>
                            <div class="value">
                                 {{{NewPassInputRepeat}}}
                            </div>
                        </div>                        
                    </div>
                </div>

                    {{#if newPassError}}
                        Ошибка в данных
                    {{/if}}
                    {{{saveBut}}}

            </form>
                            
            {{else}}    
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
                                    <div class="lable"> {{{passChangeSwichBut}}}</div>
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
            {{/if}}  
        </div>


        {{#if showDialogLoadFile}}
        {{>DialogLoadFile}}
        {{/if}}
        
     
        `
    }

}

