import Block from '/src/core/block.ts'
export default class DialogAddUser extends Block{
    constructor(props:object){
        super('div',{
            ...props,
            classsName:'dialog-container',
        })
    }

    render(){
        return `
            <div class="dialog-container">
                <div class="dialog_shirma" onclose="">
                </div>
                <form class="dialog ">
                    <h3 class="dialog__title">
                        Добавить пользователя
                    </h3>
                    <div class="dialog__content">
                        {{{LoginInput}}}
                    </div>
                    {{ errorText }}
                    <div class="dialog__actions">
                        {{{AddUserButton}}}
                    </div>    
                </form>
            </div>
            `
    }

}