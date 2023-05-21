import logo from '../../public/images/images (1).jpeg'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="">
      <footer className="footer p-10 rounded-lg bg-zinc-800 text-gray-300">
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
          <p>&copy; 2023 WheelsOnFire.All rights reserved.</p>
        </div>
        <div className='grid grid-cols-2 gap-5'>
        <div>
          <span className="font-bold text-xl text-white">Services</span>
          <p className="link link-hover my-2">Branding</p>
          <p className="link link-hover mb-2">Design</p>
          <p className="link link-hover mb-2">Marketing</p>
          <p className="link link-hover">Advertisement</p>
        </div>
        <div>
          <span className="font-bold text-xl text-white">Contact Us</span>
          <p className="link link-hover my-2">wheelsOnFire@gmail.com</p>
          <p className="link link-hover mb-2">tel:00 98 02902</p>
          <p className="link link-hover mb-2">Phone:01883743892</p>
          <p className="link link-hover"></p>
        </div>
        </div>
        <div>
          <span className="font-bold text-xl text-white">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
