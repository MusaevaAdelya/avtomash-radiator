function Characteristic({name, value}) {
    return (
        <div className="flex flex-col text-lg">
            <h5 className="font-medium text-dark-200">{name}</h5>
            <p className="font-semibold">{value}</p>
        </div>
    )
}

export default Characteristic
