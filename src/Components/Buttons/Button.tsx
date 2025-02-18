export interface IButtonProps{
  className?:string
  type?:"submit" | "reset" | "button" | undefined; 
  id?:string 
  name?:string 
  onClick?:React.MouseEventHandler<HTMLButtonElement>
  disabled?:boolean
}

const Button = (props:IButtonProps) =>{
  return (
  <>
    <button className={props.className} type={props.type} id={props.id} onClick={props.onClick} disabled={props.disabled} >{props.name}</button>
  </>
  )
};
export default Button