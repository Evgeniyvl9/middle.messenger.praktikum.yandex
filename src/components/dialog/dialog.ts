import Block from '../../core/block.ts'
import template from './dialog.hbs?raw'
interface DialogProps {
     [key: string]: unknown;
    onClose?:Function;
    onBlur?:Function;
    onChange?:Function;
    events?:{

    }
}
export default class Dialog extends Block {
    constructor(props:DialogProps){
        super('div',{
            ...props,            
            events: {
                close: props.onClose,
                blur:props.onBlur,
                change: props.onChange,

            },
        })
    }
    render(){
        return template
    }
}
