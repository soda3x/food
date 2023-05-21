
type ButtonProps = {
    text: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function FancyButton(props: ButtonProps) {
    return (
        <button
            className="group relative inline-block text-sm font-medium text-stone-500 focus:outline-none focus:ring active:text-stone-400" onClick={props.onClick}
        >
            <span
                className="absolute inset-0 translate-x-0 translate-y-0 bg-stone-600 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"
            ></span>

            <span className="relative block border border-current bg-white px-8 py-3 text-stone-800">
                {props.text}
            </span>
        </button>
    )
}