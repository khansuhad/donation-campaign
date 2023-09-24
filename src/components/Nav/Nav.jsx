
import image from '../../assets/logo.png'

const Nav = () => {
    return (
        <div>
            <div className=' flex justify-between px-10 py-10'>
            <img src={image} />
            <div className='flex gap-5 text-2xl font-semiblod'>
                <a href="">Home</a>
                <a href="">Donation</a>
                <a href="">Statistics</a>
            </div>
            </div>
        </div>
    );
};

export default Nav;