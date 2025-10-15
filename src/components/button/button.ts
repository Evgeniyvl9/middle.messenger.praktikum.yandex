import Block from '../../core/block';
import template from './button.hbs?raw'

export default class Button extends Block {
    constructor(props:object) {
        super("div",{
            ...props,
            className: props.className,
            type:props.type,
            text:props.text,
            //event:props.onClick
        })
    }
    render(){
        return template;
    }
}
