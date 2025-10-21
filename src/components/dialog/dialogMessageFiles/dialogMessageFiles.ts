import Dialog from '../dialog'



export default class DialogMessageFiles extends Dialog {
    constructor(props:object){
        super({
            ...props,
            
        })
    }
    render(){
        return `
         <div class="drop-menu new-message-files__drop-menu">
            {{{addImg}}}
            {{{addDoc}}}
        </div>
        `

    }
}