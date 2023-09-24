
import { Link } from 'react-router-dom';
import image from '../../assets/logo.png'

const Nav = () => {
    return (
        <div >
            <div className=' flex justify-between px-[10%] py-32'>
            <img src={image} />
            <div className='flex gap-5 text-2xl font-semiblod'>
                <Link to='/'>Home</Link>
                <Link to='/donation'>Donation</Link>
                <Link to='/statistics'>Statistics</Link>
                
            </div>
            </div>
        </div>
    );
};

export default Nav;