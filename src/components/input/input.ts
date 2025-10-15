import Block    from '/src/core/block'
import template from './input.hbs?raw'

export default class Input extends Block {
    constructor(props){
        super('div',{
            ...props,
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
