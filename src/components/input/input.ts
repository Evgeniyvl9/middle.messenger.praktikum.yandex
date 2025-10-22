import Block    from '/src/core/block'
import template from './input.hbs?raw'

export function inputValidator(e,regex){
    if(regex){
        if (!regex.test(e.target.value)) {
           return false
        }
        else {
           return true
        }
    }
}


export default class Input extends Block {
    constructor(props){
        super('div',{
            ...props,
            tabindex:9,
            events: {
                //click: props.onClick,
                blur:props.onChange,
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
