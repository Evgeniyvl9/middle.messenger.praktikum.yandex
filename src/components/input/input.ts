import Block    from '../../core/block'
import template from './input.hbs?raw'

export function inputValidator(e:Event,regex:RegExp){
    if(regex){
        if (!regex.test((e.target as HTMLInputElement).value)) {
           return false
        }
        else {
           return true
        }
    }
}
interface InputProps {
     [key: string]: unknown;
    tabindex?:number;
    events?: {
    //click: props.onClick,
        blur?:    (e:Event) => void;
        change?:  (e:Event) => void;

    };
    label?:string;
    type?: string;
    name?: string;
    id?:   string;
    onChange?:  (e:Event) => void;
    className?:string;
    access?:string;
}

export default class Input extends Block {
    constructor(props:InputProps){
        super('div',{
            ...props,
            tabindex:9,
            events: {
                //click: props.onClick,
                blur:   props.onChange,
                change: props.onChange,

            },
           
            label:props.label ,
            type: props.type,
            name: props.name,
            id:   props.id,
        })
    }
    render(){
        return template;
    }

}
