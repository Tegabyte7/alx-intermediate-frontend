import {PillProps} from "@/interfaces/index"


const Button: React.FC<PillProps> = ({title, styles}) => {
    return (
        <div>
            <button className={styles}>{title}</button>
        </div>
    )
}
export default Button;