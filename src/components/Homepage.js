import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid'

import Navbar from './Navbar';
import SideSection from './SideSection';
import MainSection from './MainSection';

const Homepage = () => {
    const [notes, setNotes] = useState([]);
    const [activeNote, setActiveNote] = useState(false);


    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes]);

    const onAddNote = () => {
        const newNote = {
            id: uuid(),
            title: "Untitled Note",
            content: "",
        };
        setNotes([newNote, ...notes]);
    };

    const onUpdateNote = (updatedNote) => {
        const updatedNotesArray = notes.map((note) => {
            if (note.id === activeNote) {
                return updatedNote;
            }
            return note;
        });
        setNotes(updatedNotesArray)
    }

    const onDeleteNote = (idToDelete) => {
        setNotes(notes.filter((note) => note.id !== idToDelete));
    };

    const getActiveNote = () => {
        return notes.find((note) => note.id === activeNote)
    }
    return (
        <>
            <Navbar />
            <div className='app-main'>
                <SideSection
                    notes={notes}
                    onAddNote={onAddNote}
                    onDeleteNote={onDeleteNote}
                    activeNote={activeNote}
                    setActiveNote={setActiveNote}
                />
                <MainSection activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
            </div>
        </>

    )
}

export default Homepage