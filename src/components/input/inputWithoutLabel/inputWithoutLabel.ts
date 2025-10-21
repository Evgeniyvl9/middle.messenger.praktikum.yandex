import Block from '/src/core/block'
export default class InputWithoutLabel extends Block{
    constructor(props){
        super('input',
            {
                ...props,
                events: {
                    //click: props.onClick,
                    blur:props.onChange,
                    change: props.onChange,

                },
            })
    }
    render(){
        return '';
    }
}
