import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        setLoading(true);
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching notes:", err);
                setLoading(false);
            });
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) {
                    getNotes();
                }
            })
            .catch((error) => console.error("Error deleting note:", error));
    };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) {
                    setTitle("");
                    setContent("");
                    getNotes();
                }
            })
            .catch((err) => console.error("Error creating note:", err));
    };

    const handleLogout = () => {
        navigate("/logout");
    };

    return (
        <div className="home-container">
            <header className="home-header">
                <div className="header-content">
                    <h1>My Notes</h1>
                    <button className="logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </header>

            <main className="home-main">
                <div className="content-wrapper">
                    <section className="create-note-section">
                        <h2>Create a Note</h2>
                        <form onSubmit={createNote} className="note-form">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="Enter note title..."
                                    required
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Content</label>
                                <textarea
                                    id="content"
                                    name="content"
                                    placeholder="Write your note here..."
                                    required
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    rows="4"
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-btn">
                                Add Note
                            </button>
                        </form>
                    </section>

                    <section className="notes-section">
                        <div className="notes-header">
                            <h2>Your Notes</h2>
                            <span className="notes-count">
                                {notes.length} {notes.length === 1 ? 'note' : 'notes'}
                            </span>
                        </div>
                        
                        {loading ? (
                            <div className="loading-state">Loading notes...</div>
                        ) : notes.length === 0 ? (
                            <div className="empty-state">
                                <p>No notes yet. Create your first note above!</p>
                            </div>
                        ) : (
                            <div className="notes-grid">
                                {notes.map((note) => (
                                    <Note note={note} onDelete={deleteNote} key={note.id} />
                                ))}
                            </div>
                        )}
                    </section>
                </div>
            </main>
        </div>
    );
}

export default Home;
