import React from 'react'


const SideSection = ({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) => {
    return (
        <div className='side-section'>
            <button className='add-button' onClick={onAddNote}>Add</button>

            {
                notes.map((note) => (
                    <div className={`side-note ${note.id === activeNote && "active"}`} onClick={() => { setActiveNote(note.id) }}>
                        <div class='side-note-title'>
                            <h4>{note.title}</h4>
                            <button className='delete-button' onClick={() => onDeleteNote(note.id)}>Delete</button>
                        </div>
                        <div className='side-note-content'>
                            <p>{note.content && note.content.substr(0, 20) + '...'}</p>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}

export default SideSection