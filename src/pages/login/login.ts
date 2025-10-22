import Block    from '/src/core/block'
import Button   from  '/src/components/button/button'
import Input    from  '/src/components/input/input'
export default class Login extends Block{
    constructor(props:unknown){
        super('div',{
            ...props,
            InputLogin:new Input({
                label:   'Логин' ,
                type:    'text',
                name:    'login',
                id:      'login'
            }),
            InputPassword:new Input({
                label:   'Пароль' ,
                type:    'password',
                name:    'password',
                id:      'password'
            }),
            SendButton: new Button({
                className: 'blue',
                type:'submit',
                text:'Авторизация',
                //event:props.onClick

            }) ,
            //InputPassword:

        })

        
    }
    render(){
        return `
            <div class="login-form-container">
                <div class="login-form">
                    <form action="" >
                        <h1>Вход</h1>
                        <div class="inputs">
                            {{{InputLogin}}}
                            {{{InputPassword}}}
                        </div>
                        <div class="actions">
                            {{{SendButton}}}
                            <a href="/registration" class="_link">Нет аккаунта?</a>
                        </div>
                    </form>
                </div>
            </div>
            `
        ;
    }

}

