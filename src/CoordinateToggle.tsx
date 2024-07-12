interface CoordProps {
    isToggled: boolean,
    onCoordToggle: () => void,
}

function CoordinateToggle({isToggled, onCoordToggle}: CoordProps) {
    return (
        <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={isToggled} className="sr-only peer" onChange={onCoordToggle}/>
            <div
                className="relative w-11 h-6 rounded-full peer dark:peer-focus:ring-blue-800 dark:bg-neutral-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Show Coordinates</span>
        </label>
    )
}

export default CoordinateToggle;