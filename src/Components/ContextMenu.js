import '../styles/ContextMenu.css'

function ContextMenu({x, y}) {
    return (
        <div class="dropdown">
            <div class="dropdown-content">
                <button onClick={() => console.log('graveyard')}>move to graveyard</button>
                <button onClick={() => console.log('graveyard')}>move to graveyard</button>
                <button onClick={() => console.log('graveyard')}>move to graveyard</button>
            </div>
        </div>
    )
}
export default ContextMenu