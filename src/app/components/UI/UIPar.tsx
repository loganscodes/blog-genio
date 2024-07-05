
interface Props {
    useDangerous?: boolean
    content: string
    className: string
}

const UIPar = ({ useDangerous = false, content, className }: Props) => {

    const renderContent = useDangerous ? (
        <p className={className} dangerouslySetInnerHTML={{ __html: content.toString() }} />
    ) : (
        <p className={className}>{content}</p>
    )
    return (
        <>
            {renderContent}
        </>
    )
}


export default UIPar