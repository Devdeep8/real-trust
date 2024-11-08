import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Building2, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="w-full py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Real Trust Logo"
              width={40}
              height={40}
            />
            <span className="font-semibold text-xl text-[#2B3674]">Real Trust</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium text-[#2B3674] hover:text-[#4318FF]">HOME</Link>
            <Link href="#" className="text-sm font-medium text-[#2B3674] hover:text-[#4318FF]">SERVICES</Link>
            <Link href="#" className="text-sm font-medium text-[#2B3674] hover:text-[#4318FF]">ABOUT / PROJECTS</Link>
            <Link href="#" className="text-sm font-medium text-[#2B3674] hover:text-[#4318FF]">OUR PORTFOLIO</Link>
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
            <Image
              src="/placeholder.svg?height=400&width=600"
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
                <Image
                  src="/placeholder.svg?height=300&width=300"
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
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#4318FF]/10 rounded-full flex items-center justify-center">
                <Building2 className="h-8 w-8 text-[#4318FF]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#2B3674]">Potential ROI</h3>
              <p className="text-gray-600">
                We help you maximize your property's value through strategic improvements and market positioning.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#4318FF]/10 rounded-full flex items-center justify-center">
                <Building2 className="h-8 w-8 text-[#4318FF]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#2B3674]">Design</h3>
              <p className="text-gray-600">
                Our expert designers create appealing spaces that attract buyers and maximize property value.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#4318FF]/10 rounded-full flex items-center justify-center">
                <Building2 className="h-8 w-8 text-[#4318FF]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#2B3674]">Marketing</h3>
              <p className="text-gray-600">
                Comprehensive marketing strategies to showcase your property to the right audience.
              </p>
            </div>
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
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="About us 1"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="About us 2"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=200&width=300"
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
              <div key={i} className="rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt={`Project ${i}`}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2B3674] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Real Trust Logo"
                width={40}
                height={40}
              />
              <span className="font-semibold text-lg">Real Trust</span>
            </div>
            <nav className="flex items-center space-x-6">
              <Link href="#" className="text-sm font-medium text-white hover:text-[#F58A07]">HOME</Link>
              <Link href="#" className="text-sm font-medium text-white hover:text-[#F58A07]">ABOUT</Link>
              <Link href="#" className="text-sm font-medium text-white hover:text-[#F58A07]">CONTACT</Link>
            </nav>
          </div>
          <p className="text-center text-sm text-white mt-6">
            &copy; 2024 Real Trust. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
