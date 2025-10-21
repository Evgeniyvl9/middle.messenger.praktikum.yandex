import Dialog from '../dialog'

export default class DialogUserActions extends Dialog {
    constructor(props:object){
        super({
            ...props,
            
        })
    }
    render(){
        return `
       
         <div class="drop-menu chat-list__action_drop-menu">
            {{position}}
            {{{AddUserDialogRun}}}
            {{{RemoveUserDialogRun}}}
        </div>
        `

    }
}