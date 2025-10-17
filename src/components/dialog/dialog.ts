import Block from '/src/core/block.ts'
import template from './dialog.hbs?raw'
export default class Dialog extends Block {
    constructor(props:object){
        super('div',{
            ...props

        })
    }
    render(){
        return template
    }
}
