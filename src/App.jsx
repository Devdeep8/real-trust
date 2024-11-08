import React from 'react'
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Building2 } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="w-full py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <a  to="/" className="flex items-center space-x-2">
            <img src="/placeholder.svg" alt="Real Trust Logo" width={40} height={40} />
            <span className="font-semibold text-xl text-[#2B3674]">Real Trust</span>
          </a >
          <nav className="hidden md:flex items-center space-x-8">
            <a  to="#" className="text-sm font-medium text-[#2B3674] hover:text-[#4318FF]">HOME</a >
            <a  to="#" className="text-sm font-medium text-[#2B3674] hover:text-[#4318FF]">SERVICES</a >
            <a  to="#" className="text-sm font-medium text-[#2B3674] hover:text-[#4318FF]">ABOUT / PROJECTS</a >
            <a  to="#" className="text-sm font-medium text-[#2B3674] hover:text-[#4318FF]">OUR PORTFOLIO</a >
            <Button className="bg-[#F58A07] hover:bg-[#F58A07]/90 text-white">SEARCH</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full bg-white">
        <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-bold leading-tight text-[#2B3674]">
              Consultation,<br />
              Design,<br />
              & Marketing
            </h1>
            <img
              src="/placeholder.svg"
              alt="Team collaboration"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <Card className="flex-1 max-w-md bg-[#2B3674] text-white">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Get a Free Consultation</h2>
              <form className="space-y-4">
                <Input
                  placeholder="Full Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Input
                  placeholder="Mobile Number"
                  type="tel"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Input
                  placeholder="City"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="w-full bg-[#F58A07] hover:bg-[#F58A07]/90 text-white">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Not Your Average Realtor Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2B3674] mb-4">Not Your Average Realtor</h2>
            <p className="text-gray-600">
              Real estate guide for the real go-getters, devoted to making deals happen and helping you close
              on the home of your dreams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative">
                <img
                  src="/placeholder.svg"
                  alt={`Realtor ${i}`}
                  width={300}
                  height={300}
                  className="rounded-full mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#2B3674] mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {['Potential ROI', 'Design', 'Marketing'].map((title, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#4318FF]/10 rounded-full flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-[#4318FF]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#2B3674]">{title}</h3>
                <p className="text-gray-600">
                  {index === 0 && "We help you maximize your property's value through strategic improvements and market positioning."}
                  {index === 1 && "Our expert designers create appealing spaces that attract buyers and maximize property value."}
                  {index === 2 && "Comprehensive marketing strategies to showcase your property to the right audience."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#2B3674] mb-12">About Us</h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-600">
              There's part of the business that's not just about the transaction - it's about the relationship
              we build. From the first consultation through closing, we provide qualified guidance and support
              by communicating effectively.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 row-span-2">
              <img
                src="/placeholder.svg"
                alt="About us 1"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div>
              <img
                src="/placeholder.svg"
                alt="About us 2"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div>
              <img
                src="/placeholder.svg"
                alt="About us 3"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#2B3674] mb-4">Our Projects</h2>
          <p className="text-center text-gray-600 mb-12">
            We know what buyers are looking for and suggest projects that will bring greater top dollar for the sale of their homes.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src="/placeholder.svg"
                alt={`Project ${i}`}
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Happy Clients Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#2B3674] mb-12">Happy Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                </p>
                <div className="flex items-center">
                  <img
                    src="/placeholder.svg"
                    alt={`Client ${i}`}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#2B3674]">Client Name</h4>
                    <p className="text-sm text-gray-500">Position, Company</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#2B3674] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-8">Stay updated with our latest projects and real estate insights.</p>
            <form className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-[#F58A07] hover:bg-[#F58A07]/90 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#2B3674]">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-[#4318FF]" />
                  <span>+1 234 567 890</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-[#4318FF]" />
                  <span>info@realtrust.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-[#4318FF]" />
                  <span>123 Real Estate Ave, City</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#2B3674]">Quick a s</h3>
              <ul className="space-y-2">
                <li><a  to="#" className="hover:text-[#4318FF]">Home</a ></li>
                <li><a  to="#" className="hover:text-[#4318FF]">About Us</a ></li>
                <li><a  to="#" className="hover:text-[#4318FF]">Services</a ></li>
                <li><a  to="#" className="hover:text-[#4318FF]">Projects</a ></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#2B3674]">Services</h3>
              <ul className="space-y-2">
                <li><a  to="#" className="hover:text-[#4318FF]">Consultation</a ></li>
                <li><a  to="#" className="hover:text-[#4318FF]">Design</a ></li>
                <li><a  to="#" className="hover:text-[#4318FF]">Marketing</a ></li>
                <li><a  to="#" className="hover:text-[#4318FF]">Property Management</a ></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#2B3674]">Follow Us</h3>
              <div className="flex gap-4">
                <a  to="#" className="text-[#4318FF] hover:text-[#4318FF]/80">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a >
                <a  to="#" className="text-[#4318FF] hover:text-[#4318FF]/80">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a >
                <a  to="#" className="text-[#4318FF] hover:text-[#4318FF]/80">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a >
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-500">&copy; {new Date().getFullYear()} Real Trust. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}