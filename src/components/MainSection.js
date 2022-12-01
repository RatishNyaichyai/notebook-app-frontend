import React from 'react'
import ReactMarkdown from 'react-markdown'


const MainSection = ({ activeNote, onUpdateNote }) => {
    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
        })
    }

    if (!activeNote) {
        return (
            <div className="no-active-note">No note selected</div>
        )
    }
    return (
        <div className='main-section'>
            <div className='note-edit'>
                <input type="text" id='title' value={activeNote.title} onChange={(e) => onEditField('title', e.target.value)} autoFocus />
                <textarea id="content" placeholder='Write your note here...' value={activeNote.content} onChange={(e) => onEditField('content', e.target.value)} />
            </div>
            <div className='note-preview'>
                <h1 className='preview-title'>{activeNote.title}</h1>
                <ReactMarkdown className='preview-content'>{activeNote.content}</ReactMarkdown>
            </div>
        </div>
    )
}

export default MainSection