import doc4 from '../assets/images/2453867e820b312541fee6a4b40798c6.png'
import doc3 from '../assets/images/363dd723f6d87e2b17072d1eb23bf87f.png';
import doc2 from '../assets/images/08b6c8662c7afef67b33ac23bb37f1e2.png';
import doc1 from '../assets/images/6bf4a20dde8b7d8e6c92c2565c5f8a6b.png';

class DoctorService {

    static doctors = [
        { name: 'Dr Radha', experience: 10, degree: 'MBBS MD', speciality: 'Gastro Entomologist', avatar: doc1 ,rate: '500',availibility:'4:50'},
        { name: 'Dr Ram', experience: 12, degree: 'MBBS MD', speciality: 'Cardiology', avatar: doc2 ,rate: '450',availibility:'4:20'},
        { name: 'Dr Laksman', experience: 8, degree: 'MBBS MD', speciality: 'Naphrology', avatar: doc3 ,rate: '600',availibility:'6:50'},
        { name: 'Dr Suman', experience: 18, degree: 'MBBS MD', speciality: 'Rheumatology', avatar: doc4 ,rate: '750',availibility:'5:20'}
    ];

    static getAll() {
        // Simulate backend call by resolving the Promise after 500ms
        return new Promise((resolve) => {
            setTimeout(
                () => resolve(this.doctors),
                500
            );
        });
    }

    static getByName(name) {
        // Simulate backend call by resolving the Promise after 500ms
        return new Promise((resolve) => {
            setTimeout(
                () => resolve(this.doctors.find(doctors => doctors.name === name)),
                500
            );
        });
    }


    static getBySpeciality(speciality) {
        // Simulate backend call by resolving the Promise after 500ms
    
        return new Promise((resolve) => {
            setTimeout(
                () => resolve( 
                    this.doctors.filter(doctors => doctors.speciality === speciality.title)),
                500
            );
        });
    }
}

export default DoctorService;