import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Star, Shield, Sparkles, Activity, Clock } from "lucide-react";
import { images } from "@/config/images";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Home",
  description: "Summit Dental Care offers comprehensive family dentistry in Houston. Schedule your appointment today for experienced care.",
  openGraph: {
    images: [{ url: images["hero"].src }],
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 lg:pt-0 bg-[#f8f9fa] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Left */}
          <div className="flex flex-col justify-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e3f2fd] text-[#0056b3] text-sm font-semibold w-fit">
              <span className="w-2 h-2 rounded-full bg-[#0056b3] animate-pulse"></span>
              Accepting New Patients
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Experienced Care <br />
              <span className="text-[#0056b3]">You Can Trust</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Modern dentistry with a gentle touch. From routine cleanings to advanced implants, we treat you like family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" href="/contact">
                Book Appointment
              </Button>
              <Button variant="outline" size="lg" href="/services">
                View Services
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-4 border-t border-gray-200 mt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">15+</span>
                <span className="text-sm text-gray-500">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">4.9/5</span>
                <div className="flex text-[#ffb703]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
            </div>
          </div>

          {/* Visual Right */}
          <div className="relative h-[500px] lg:h-[600px] w-full animate-in fade-in slide-in-from-right-4 duration-1000 delay-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0056b3]/10 to-transparent rounded-3xl transform rotate-3 scale-95"></div>
            <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={images["hero"].src}
                alt={images["hero"].alt}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Insurance Widget */}
            <div className="absolute bottom-8 -left-4 lg:left-8 bg-white p-6 rounded-xl shadow-xl max-w-sm animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#e3f2fd] rounded-full flex items-center justify-center text-[#0056b3]">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">Insurance Checker</h4>
                  <p className="text-xs text-gray-500">Verify your coverage</p>
                </div>
              </div>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Zip Code" 
                  className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-[#0056b3]"
                />
                <button className="bg-[#0056b3] text-white px-4 py-2 text-sm font-semibold rounded-md hover:bg-[#004494] transition-colors">
                  Check
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-6">We Accept Most Major Insurance Plans</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {["Delta Dental", "Cigna", "Aetna", "Humana", "MetLife"].map((plan) => (
              <span key={plan} className="text-xl font-bold text-gray-800">{plan}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Dental Services</h2>
            <p className="text-lg text-gray-600">Everything you need for a healthy smile under one roof.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "General Dentistry",
                desc: "Routine cleanings, exams, and fillings to keep your oral health on track.",
                img: "service-1"
              },
              {
                icon: Sparkles,
                title: "Cosmetic Dentistry",
                desc: "Teeth whitening, veneers, and bonding to give you the smile you've always wanted.",
                img: "service-2"
              },
              {
                icon: Shield,
                title: "Restorative Care",
                desc: "Implants, crowns, and bridges using the latest technology for lasting results.",
                img: "service-3"
              }
            ].map((service, idx) => (
              <div key={idx} className="group bg-gray-50 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default border border-transparent hover:border-gray-100">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0056b3] mb-6 group-hover:bg-[#0056b3] group-hover:text-white transition-colors">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <Link href="/services" className="text-[#0056b3] font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00a8cc]/10 rounded-3xl transform -translate-x-4 translate-y-4"></div>
              <Image
                src={images["about"].src}
                alt={images["about"].alt}
                width={600}
                height={500}
                className="relative rounded-3xl shadow-xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0056b3] rounded-full flex items-center justify-center text-white font-bold">
                    24h
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Emergency Support</p>
                    <p className="text-sm text-gray-500">Same day appointments</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Summit Dental?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine advanced technology with compassionate care. Our team is dedicated to making your visit comfortable, stress-free, and effective.
              </p>
              
              <ul className="space-y-4 mb-8">
                {["State-of-the-art Technology", "Gentle, Anxiety-Free Approach", "Transparent Pricing", "Convenient Location & Hours"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00a8cc]" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" href="/about">
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">What Our Patients Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Maria L.", text: "I haven't smiled this confidently in years. Dr. Jenkins made my veneers look so natural!" },
              { name: "James T.", text: "The staff here is incredible. They actually listened to my concerns and didn't rush me." },
              { name: "Sarah B.", text: "I used to be terrified of the dentist, but Summit Dental changed that. It was painless!" }
            ].map((review, i) => (
              <div key={i} className="bg-[#f8f9fa] p-8 rounded-2xl relative">
                <div className="flex text-[#ffb703] mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                <p className="font-bold text-gray-900">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0056b3] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready for a Better Smile?</h2>
          <p className="text-xl text-blue-100 mb-10">Book your appointment today and experience the Summit Dental difference.</p>
          <Button size="lg" className="bg-[#ffb703] text-[#212529] hover:bg-[#e6a502]" href="/contact">
            Schedule Visit
          </Button>
        </div>
      </section>

      {/* Emergency Banner */}
      <div className="bg-[#ffb703] py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-2 text-[#212529] font-bold text-sm md:text-base">
          <Clock className="w-5 h-5" />
          <span>Toothache? We have same-day appointments available.</span>
          <Link href="tel:+17135550123" className="underline hover:text-[#0056b3]">Call (713) 555-0123</Link>
        </div>
      </div>
    </>
  );
}