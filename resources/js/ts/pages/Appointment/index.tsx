import { useParams } from 'react-router-dom';

export function Appointment() {
    const { id } = useParams();
    return (
        <div>
            <h1>Appointment {id}</h1>
        </div>
    );
}
