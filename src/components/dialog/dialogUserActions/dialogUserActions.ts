import Dialog from '../dialog'

export default class DialogUserActions extends Dialog {
    constructor(props:unknown){
        super({
            ...props,
            events:{
                blur:props.onChange,
                change:props.onChange
            }
            
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

