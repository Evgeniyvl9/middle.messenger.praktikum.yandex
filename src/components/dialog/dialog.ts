import Block from '/src/core/block.ts'
import template from './dialog.hbs?raw'
export default class Dialog extends Block {
    constructor(props:object){
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
