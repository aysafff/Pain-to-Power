
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CampaignSite() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold tracking-widest uppercase">Pain to Power</h1>
        <p className="text-lg mt-4 max-w-xl mx-auto">A movement built on resilience, strength, and transformation.</p>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center gap-8 text-md font-semibold py-4 border-y border-white/10">
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#gallery" className="hover:text-gray-400">Gallery</a>
        <a href="#services" className="hover:text-gray-400">Services</a>
        <a href="#shop" className="hover:text-gray-400">Shop</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </nav>

      {/* About Section */}
      <section id="about" className="py-20 px-8 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About the Campaign</h2>
        <p className="text-lg leading-7">
          Pain to Power is more than a campaign—it's a statement. We believe in turning struggle into strength and transforming personal pain into a collective force for good. Join us in empowering communities and fostering change.
        </p>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-900 px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-video bg-white/10 rounded-xl"></div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-8 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">What We Offer</h2>
        <div className="grid sm:grid-cols-2 gap-10">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Empowerment Workshops</h3>
              <p className="mt-2 text-sm text-gray-300">Hands-on sessions to help individuals channel their pain into purpose.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Community Outreach</h3>
              <p className="mt-2 text-sm text-gray-300">Events that bring people together and foster healing through shared stories.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-20 bg-gray-800 px-8 text-center">
        <h2 className="text-3xl font-bold mb-10">Shop Our Merch</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["T-Shirts", "Hoodies", "Tote Bags"].map((item, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{item}</h3>
                <Button className="mt-4">Buy Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form className="flex flex-col gap-4">
          <input className="p-3 rounded-lg bg-white/10 border border-white/20" placeholder="Your Name" />
          <input className="p-3 rounded-lg bg-white/10 border border-white/20" placeholder="Your Email" />
          <textarea className="p-3 rounded-lg bg-white/10 border border-white/20" placeholder="Your Message" rows={5}></textarea>
          <Button className="mt-4">Send Message</Button>
        </form>
      </section>

      <footer className="text-center py-10 border-t border-white/10 text-sm text-gray-400">
        © {new Date().getFullYear()} Pain to Power. All rights reserved.
      </footer>
    </div>
  );
}
