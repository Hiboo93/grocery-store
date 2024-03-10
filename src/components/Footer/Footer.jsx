import { FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { FOOTERLINKS, FOOTERLINKS2 } from "../../constants/index.js"


const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-white ">
          {/* company details section */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Orange Mint</h1>
            <p className="text-sm max-w-[300px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia itaque explicabo porro labore ab ad perspiciatis repudiandae a impedit.</p>
          </div>

          {/* NavLink section */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3">
              {/* first column links */}
              <div>
              <ul className="space-y-2">
                  {
                    FOOTERLINKS.map((link) => (
                      <li key={link.id}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>

              {/* second column links */}
              <div>
                <ul className="space-y-2">
                  {
                    FOOTERLINKS2.map((link) => (
                      <li key={link.id}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>

          {/* social links section */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Follow Us</h1>
            <div>
              <p>+33 620356578</p>
              <p>France 75001 Paris</p>
            </div>
            <div className="flex items-center gap-3">
              <FaFacebookF className="text-3xl hover:scale-105 duration-300"/>
              <FaInstagram className="text-3xl hover:scale-105 duration-300"/>
              <FaLinkedinIn className="text-3xl hover:scale-105 duration-300"/>
              <FaGoogle className="text-3xl hover:scale-105 duration-300"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer