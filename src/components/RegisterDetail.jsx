export default function RegisterDetail({

    placeholder,
    value,
    onChange,
    // hasError,
    className,
    name,
    // errorjoi
}) {
    // console.log(hasError)
    return (
        <div className='flex gap-8'>
            <input
                placeholder={placeholder}
                className={className}
                value={value}
                // onChange={onChange}
                name={name} />

        </div>
    )
}