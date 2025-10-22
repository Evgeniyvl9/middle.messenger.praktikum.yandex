import Block from '../../core/block';
import template from './button.hbs?raw'

export default class Button extends Block {
    constructor(props:unknown) {
        super("div",{
            ...props,
            className: props.className,
            type:props.type,
            text:props.text,
            events: {
                click: props.onClick,
                blur:props.onBlur,
                change: props.onChange,

            },
            //event:props.onClick
        })
    }
    render(){
        return template;
    }
}
