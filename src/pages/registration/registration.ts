import Block    from  '../../core/block'
import Button   from  '../../components/button/button'
import Input    from  '../../components/input/input'

export default class Registration extends Block {
    constructor(){
        super('div',{
            InputEmail:new Input({
                type :"text" ,
                label:"Почта" ,
                name :"email",
            }),
            InputLogin:new Input({
                type :"text" ,
                label:"Логин" ,
                name :"login",
            }),
            InputFirstName:new Input({
                type :"text" ,
                label:"Имя" ,
                name :"first_name",
            }),
            InputSecondName:new Input({
                type :"text" ,
                label:"Фамилия" ,
                name :"second_name",
            }),
            InputPhone:new Input({
                type :"text" ,
                label:"Телефон" ,
                name :"phone",
            }),
            InputPassword:new Input({
                type :"password" ,
                label:"Пароль" ,
                name :"password",
            }),
            InputPasswordConfirm:new Input({
                type :"password" ,
                label:"Пароль (еще раз)" ,
                name :"password_confirm",
            }),
            SendButton: new Button({
                className: 'blue',
                type:'submit',
                text:'Регистрация',
                //event:props.onClick

            }) ,

        })
    }
    render(){
        return `<div class="registration-form-container">
    <div class="registration-form">

        <form action="" >
            <h1>Регистрация</h1>
            <div class="inputs">
                {{{InputEmail}}}
                {{{InputLogin}}}
                {{{InputFirstName}}}
                {{{InputSecondName}}}
                {{{InputPhone}}}
                {{{InputPassword}}}
                {{{InputPasswordConfirm}}}
            </div>
            <div class="actions">
                {{{SendButton}}}
                <a href="/login" class="_link">Войти</a>
            </div>
        </form>
    </div>
</div>
`
    }
}

