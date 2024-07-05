interface Props {
    title: string
    className: string
}

const UITitle = ({ title, className }: Props) => {
    return (
        <h1 className={`${className}`}>{title}</h1>
    )
}

export default UITitle