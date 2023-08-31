import { MdDeleteForever } from 'react-icons/md';
const Note = () => {
    return <div className="note">
    <span>Hello! This is a new note!</span>
    <div className="note-footer"></div>
    <small>31/08/23</small>
    <MdDeleteForever className='delete-icon' size='1.3em'/>
    </div>;
};

export default Note;