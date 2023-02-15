import uuid from 'react-uuid';
import {TRASH_ICON_SVG} from './images';

export default function ModalTripleDotsMenu( { categoryForView, dropToTrash, objId } ) {
    if (categoryForView !== 'Trash') {
        return (
            <>
                <button onClick={() => dropToTrash(objId)} key={uuid()} className="d-flex flex-row justify-content-start" style={{
                    padding: '12px 0px 12px 4px',
                    gap: '10px',
                    width: '240px',
                    height: '48px',
                    background: '#E4E6E7',
                    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.16)`,
                    borderRadius: '12px',
                    alignItems: 'center',
                    marginBottom: '16px',
                    border: 'none'
                    }}>
                    <div className='d-flex justify-content-center' style={{ width: '24px', height: '24px', alignItems: 'center', border: 'none'}}>
                        {TRASH_ICON_SVG}
                    </div>
                    <span className='d-flex flex-row justify-content-start'>Move to Trash</span>
                </button>
            </>
        )
    } 

}