import kidney from '../assets/images/kidneys.svg'
import knee from '../assets/images/knee.svg';
import stomach from '../assets/images/stomach.svg';
import heart from '../assets/images/heart (1).svg';

class SpecialityService {
    static speciality = [
        { title: 'Rheumatology', icon: knee },
        { title: 'Gastro Entomologist', icon: stomach },
        { title: 'Naphrology', icon: kidney },
        { title: 'Cardiology', icon: heart }
    ];

    static getAll() {
        // Simulate backend call by resolving the Promise after 500ms
        return new Promise((resolve) => {
            setTimeout(
                () => resolve(this.speciality),
                500
            );
        });
    }

    static getByTitle(title) {
        // Simulate backend call by resolving the Promise after 500ms
        return new Promise((resolve) => {
            setTimeout(
                () => resolve(this.doctors.find(speciality => speciality.title === title)),
                500
            );
        });
    }
    
}

export default SpecialityService
