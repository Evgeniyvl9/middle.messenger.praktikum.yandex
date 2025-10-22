import Block  from '/src/core/block'

export default class DialogRemoveUser extends Block{
    constructor(props:object){
        super('div',{
            ...props,


        })
    }
    render(){
        return `            
            <div class="dialog-container">
                <div class="dialog_shirma" onclose="">
                </div>
                <form class="dialog ">
                    <h3 class="dialog__title">
                       Удалить пользователя
                    </h3>
                    <div class="dialog__content">
                        {{{LoginInput}}}
                    </div>
                    {{ errorText }}
                    <div class="dialog__actions">
                        {{{RemoveUserButton}}}
                    </div>    
                </form>
            </div>
            `
    }
}