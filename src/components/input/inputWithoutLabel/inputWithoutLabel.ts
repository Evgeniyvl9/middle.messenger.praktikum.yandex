import Block from '../../../core/block'
interface InputWithoutLabelProps {
  onChange?: (event: Event) => void;
  onClick?: (event: Event) => void;
  [key: string]: unknown; 
}
export default class InputWithoutLabel extends Block{
    constructor(props:InputWithoutLabelProps){
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
