import Block from '../../core/block';
import template from './button.hbs?raw'

interface ButtonProps {
  className?: string;
  type?: string;
  text?: string;
    onClick?: () => void;
    onBlur?: () => void;
    onChange?: () => void;
}
export default class Button extends Block {
    constructor(props:ButtonProps) {
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
