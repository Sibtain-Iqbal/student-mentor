import { HeroSection } from "../../Components/HeroSection/HeroSection";
import { Navbar } from "../../Components/Navbar/Navbar";
import { ArrowRight, BookOpen, Users, Trophy } from "lucide-react";

// Import course images
import webDevImage from "../../assets/course-web-dev.jpg";
import dataScienceImage from "../../assets/course-data-science.jpg";
import mobileDesignImage from "../../assets/course-mobile-design.jpg";

const LandPage = () => {
  const featuredCourses = [
    {
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      price: "$89",
      originalPrice: "$149",
      rating: 4.8,
      reviewCount: 2547,
      duration: "40 hours",
      students: 15420,
      image: webDevImage,
      level: "Beginner",
      category: "Web Development"
    },
    {
      title: "Data Science & Machine Learning",
      instructor: "Dr. Michael Chen",
      price: "$129",
      originalPrice: "$199",
      rating: 4.9,
      reviewCount: 1834,
      duration: "55 hours",
      students: 8967,
      image: dataScienceImage,
      level: "Intermediate",
      category: "Data Science"
    },
    {
      title: "Mobile App Design Mastery",
      instructor: "Emma Rodriguez",
      price: "$79",
      originalPrice: "$119",
      rating: 4.7,
      reviewCount: 1245,
      duration: "32 hours",
      students: 6543,
      image: mobileDesignImage,
      level: "Beginner",
      category: "Design"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 mb-4 rounded-full text-sm font-semibold bg-blue-100 text-blue-600">
              Why Choose LearnHub
            </span>
            <h2 className="text-3xl font-bold mb-4">Learn From Industry Experts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get hands-on experience with real projects and learn from professionals 
              who are currently working in top companies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert-Led Courses</h3>
              <p className="text-gray-600">Learn from industry professionals with years of experience.</p>
            </div>
            
            <div className="text-center group">
              <div className="h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:text-white transition-all">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">Connect with peers and get help from our active community.</p>
            </div>
            
            <div className="text-center group">
              <div className="h-16 w-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 group-hover:text-white transition-all">
                <Trophy className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certificates</h3>
              <p className="text-gray-600">Earn industry-recognized certificates upon completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Courses</h2>
              <p className="text-gray-600">Start your learning journey with our most popular courses</p>
            </div>
            <button className="hidden sm:flex items-center px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{course.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">by {course.instructor}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">{course.price}</span>
                    <span className="line-through text-gray-400">{course.originalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{course.duration} • {course.level}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:hidden">
            <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4 inline-block" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Learning?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already advancing their careers with LearnHub. 
            Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-blue-600 rounded-md font-semibold hover:bg-gray-100">
              Start Free Trial
            </button>
            <button className="px-6 py-3 border border-white/50 text-white rounded-md hover:bg-white/10">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                LearnHub
              </span>
            </div>
            <p className="text-gray-500 text-center md:text-right">
              © 2024 LearnHub. All rights reserved. Empowering learners worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandPage;
