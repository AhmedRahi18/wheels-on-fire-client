import logo from '../../public/images/images (1).jpeg'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-black text-gray-300">
        <div>
          <img className='w-24 rounded-xl' src={logo} alt="" />
          <p className='text-xl font-bold'>
            WheelsOnFire
          </p>
          <div className='flex gap-2'>
          <FaFacebook size={20} className='text-blue-600
          bg-white rounded-full'></FaFacebook>
          <FaTwitter size={20} className='text-blue-600
          '></FaTwitter>
          <FaInstagram size={22} className='text-red-500
          '></FaInstagram>
          </div>
          <p>&copy; 2023 wheels on fire.All rights reserved.</p>
        </div>
        <div>
          <span className="font-bold text-xl text-white">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="font-bold text-xl">Contact Us</span>
          <a className="link link-hover">wheelsOnFire@gmail.com</a>
          <a className="link link-hover">tel:00 98 02902</a>
          <a className="link link-hover">Phone:01883743892</a>
          <a className="link link-hover"></a>
        </div>
        <div>
          <span className="font-bold text-xl">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
