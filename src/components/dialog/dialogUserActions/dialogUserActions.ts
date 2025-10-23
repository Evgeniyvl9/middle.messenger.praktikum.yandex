import Dialog from '../dialog'
interface DialogUserActionsProps {
    [key: string]: unknown;
    className?: string;
    onClose?:Function;
    onBlur?:Function;
    onChange?:Function;
    events?:{
        blur?:  Event,
        change?:Event
    }
}
export default class DialogUserActions extends Dialog {
    constructor(props:DialogUserActionsProps){
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

