

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Calendar, MapPin, Phone, Mail, Award, Users, BookOpen, GraduationCap, Heart, Target, Eye } from 'lucide-react';

const AllegianceAcademy = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Keep controlled inputs so UI remains reactive — Netlify will still capture submitted values.
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    message: ''
  });

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200',
      title: 'Nurturing Minds, Building Futures',
      subtitle: 'Where Innovation Meets Excellence'
    },
    {
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200',
      title: 'Excellence in Education',
      subtitle: 'Empowering Tomorrow\'s Leaders'
    },
    {
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200',
      title: 'Innovation & Discipline',
      subtitle: 'Traditional Values, Modern Approach'
    }
  ];

  const newsEvents = [
    {
      id: 1,
      title: 'Annual Club Exibition',
      date: 'March 15, 2025',
      category: 'Events',
      excerpt: 'Students showcase innovative projects blending science and technology.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400'
    },
    {
      id: 2,
      title: 'Sports Day Championship',
      date: 'November  28, 2025',
      category: 'Events',
      excerpt: 'A day of athletic excellence and team spirit.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400'
    },
    {
      id: 3,
      title: 'National Award Recognition',
      date: 'January 10, 2025',
      category: 'Achievement',
      excerpt: 'Allegiance Academy receives Excellence in Education Award.',
      image: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=400'
    }
  ];

  const faculty = [
    {
      name: 'Mr Abhishek Shrivastava',
      position: 'Principal',
      subject: 'Educational Leadership',
      qualification: 'Ph.D. in Education',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300'
    },
    {
      name: 'Mrs Pallavi Chaturvedi',
      position: 'PGT Biology',
      subject: 'MS in Biology',
      qualification: 'M.Sc. Biology',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300'
    },
    {
      name: 'Ms. Emily Rodriguez',
      position: 'Mathematics Department',
      subject: 'Advanced Mathematics',
      qualification: 'M.A. Mathematics',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300'
    },
    {
      name: 'Mr. David Chen',
      position: 'Language Arts',
      subject: 'English Literature',
      qualification: 'M.A. English',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300'
    }
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400',
    'https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=400',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
    'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=400'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Note: No custom JS submit handlers are required for Netlify Forms.
  // Netlify will capture the posted form values automatically.

  const NavBar = () => (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <GraduationCap className="w-10 h-10" />
            <div>
              <h1 className="text-2xl font-bold">Allegiance Academy</h1>
              <p className="text-xs text-blue-200">Excellence in Education</p>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-6">
            {['home', 'about', 'academics', 'admissions', 'faculty', 'gallery', 'news', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`capitalize hover:text-yellow-300 transition ${currentPage === page ? 'text-yellow-300 font-semibold' : ''}`}
              >
                {page === 'news' ? 'News & Events' : page}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {['home', 'about', 'academics', 'admissions', 'faculty', 'gallery', 'news', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-blue-800 rounded capitalize"
              >
                {page === 'news' ? 'News & Events' : page}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div>
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl md:text-2xl">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-yellow-400' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer" onClick={() => setCurrentPage('admissions')}>
            <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Admissions Open</h3>
            <p className="text-gray-600">Join our community of learners. Apply now for the 2026-27 academic year.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer" onClick={() => setCurrentPage('academics')}>
            <Award className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Academic Excellence</h3>
            <p className="text-gray-600">Comprehensive curriculum designed for holistic development.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer" onClick={() => setCurrentPage('faculty')}>
            <Users className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Expert Faculty</h3>
            <p className="text-gray-600">Learn from experienced educators passionate about teaching.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Allegiance Academy?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <ChevronRight className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">State-of-the-Art Infrastructure</h4>
                <p className="text-blue-100">Modern classrooms, labs, and sports facilities</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <ChevronRight className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Technology Integration</h4>
                <p className="text-blue-100">Smart boards, coding labs, and digital learning</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <ChevronRight className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Holistic Development</h4>
                <p className="text-blue-100">Focus on academics, sports, arts, and values</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <ChevronRight className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Individual Attention</h4>
                <p className="text-blue-100">Small class sizes for personalized learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">About Allegiance Academy</h1>
      
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-blue-50 p-6 rounded-lg">
          <Eye className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-3">Our Vision</h3>
          <p className="text-gray-700">To be a leading institution that nurtures innovative thinkers, responsible citizens, and lifelong learners who contribute positively to society.</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <Target className="w-12 h-12 text-green-600 mb-4" />
          <h3 className="text-xl font-bold mb-3">Our Mission</h3>
          <p className="text-gray-700">To provide quality education that blends traditional values with modern pedagogy, fostering academic excellence, character development, and global awareness.</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <Heart className="w-12 h-12 text-purple-600 mb-4" />
          <h3 className="text-xl font-bold mb-3">Our Values</h3>
          <p className="text-gray-700">Integrity, Excellence, Innovation, Discipline, Compassion, and Respect form the foundation of everything we do at Allegiance Academy.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Principal's Message</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300" alt="Principal" className="w-full md:w-48 h-48 object-cover rounded-lg" />
          <div>
            <p className="text-gray-700 mb-4">
              Dear Parents, Students, and Well-wishers,
            </p>
            <p className="text-gray-700 mb-4">
              Welcome to Allegiance Academy, where we believe in nurturing not just minds, but hearts and spirits. In today's rapidly evolving world, education must go beyond textbooks to prepare students for challenges yet unseen.
            </p>
            <p className="text-gray-700 mb-4">
              Our approach combines the best of traditional education with cutting-edge technology and innovative teaching methods. We are committed to developing critical thinkers, creative problem-solvers, and compassionate leaders.
            </p>
            <p className="text-gray-700 font-semibold">
              - Dr. Sarah Mitchell, Principal
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Our History</h2>
        <p className="text-gray-700 mb-3">
          Founded in 2005, Allegiance Academy began with a vision to create an educational institution that would set new standards in academic excellence and character development.
        </p>
        <p className="text-gray-700 mb-3">
          Over the past two decades, we have grown from a small school with 100 students to a thriving institution serving over 2,000 students from diverse backgrounds. Our alumni have gone on to excel in various fields, from medicine and engineering to arts and entrepreneurship.
        </p>
        <p className="text-gray-700">
          Today, Allegiance Academy stands as a beacon of educational innovation, consistently ranked among the top schools in the region for our commitment to quality education, state-of-the-art facilities, and student-centered approach.
        </p>
      </div>
    </div>
  );

  const AcademicsPage = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Academics</h1>
      
      <div className="space-y-8">
        <div className="bg-blue-50 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Primary School (Grades 1-5)</h2>
          <p className="text-gray-700 mb-4">
            Our primary education focuses on building strong foundations in literacy, numeracy, and social skills through interactive and play-based learning.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Core Subjects:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>English Language & Literature</li>
                <li>Mathematics</li>
                <li>Science & Environment</li>
                <li>Social Studies</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Special Programs:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Arts & Crafts</li>
                <li>Music & Dance</li>
                <li>Physical Education</li>
                <li>Computer Basics</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Middle School (Grades 6-8)</h2>
          <p className="text-gray-700 mb-4">
            Middle school curriculum deepens subject knowledge while encouraging critical thinking, research skills, and independent learning.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Core Subjects:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>English & Communication</li>
                <li>Advanced Mathematics</li>
                <li>Physics, Chemistry, Biology</li>
                <li>History & Geography</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Electives:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Second Language (French/Spanish)</li>
                <li>Computer Science</li>
                <li>Visual Arts</li>
                <li>Performing Arts</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">Senior School (Grades 9-12)</h2>
          <p className="text-gray-700 mb-4">
            Senior school prepares students for higher education and careers with specialized streams and advanced coursework.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded">
              <h4 className="font-semibold mb-2 text-purple-700">Science Stream</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Biology/Math</li>
                <li>Computer Science</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-semibold mb-2 text-purple-700">Commerce Stream</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Accountancy</li>
                <li>Business Studies</li>
                <li>Economics</li>
                <li>Mathematics</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-semibold mb-2 text-purple-700">Humanities Stream</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>History</li>
                <li>Political Science</li>
                <li>Psychology</li>
                <li>Sociology</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-900 mb-4">Beyond Academics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Co-curricular Activities</h4>
              <p className="text-gray-700">Sports, debates, quiz competitions, science fairs, cultural programs, and leadership development activities.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Technology Integration</h4>
              <p className="text-gray-700">Smart classrooms, robotics lab, coding workshops, and digital learning platforms for enhanced education.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AdmissionsPage = () => (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Admissions</h1>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Admission Process</h2>
        <div className="space-y-3 text-gray-700">
          <p><span className="font-semibold">Step 1:</span> Fill out the online inquiry form below</p>
          <p><span className="font-semibold">Step 2:</span> Download and complete the admission form</p>
          <p><span className="font-semibold">Step 3:</span> Submit required documents</p>
          <p><span className="font-semibold">Step 4:</span> Attend interaction session (for grades 1 and above)</p>
          <p><span className="font-semibold">Step 5:</span> Receive admission decision within 7 days</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Documents Required</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Birth certificate</li>
            <li>Previous academic records</li>
            <li>Transfer certificate (if applicable)</li>
            <li>Passport-sized photographs</li>
            <li>Address proof</li>
          </ul>
          <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
            Download Prospectus
          </button>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Fee Structure</h3>
          <div className="text-gray-700 space-y-2">
            <p><span className="font-semibold">Primary (1-5):</span> $3,500/year</p>
            <p><span className="font-semibold">Middle (6-8):</span> $4,000/year</p>
            <p><span className="font-semibold">Senior (9-12):</span> $4,500/year</p>
            <p className="text-sm mt-3 text-gray-600">*Fees include tuition, books, and activities. Transportation and meals separate.</p>
          </div>
          <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition">
            Download Fee Details
          </button>
        </div>
      </div>

      {/* Netlify Form: admission */}
      <form
        name="admission"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="bg-white rounded-lg shadow-lg p-8"
      >
        {/* Netlify needs this hidden input */}
        <input type="hidden" name="form-name" value="admission" />
        {/* Honeypot field for spam bots */}
        <input type="hidden" name="bot-field" />

        <h2 className="text-2xl font-bold text-blue-900 mb-6">Admission Inquiry Form</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Student Name *</label>
            <input
              name="studentName"
              type="text"
              required
              value={formData.studentName}
              onChange={(e) => setFormData({...formData, studentName: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Parent/Guardian Name *</label>
            <input
              name="parentName"
              type="text"
              required
              value={formData.parentName}
              onChange={(e) => setFormData({...formData, parentName: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email *</label>
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
            <input
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Grade Applying For *</label>
          <select
            name="grade"
            required
            value={formData.grade}
            onChange={(e) => setFormData({...formData, grade: e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Grade</option>
            {[...Array(12)].map((_, i) => (
              <option key={i} value={`Grade ${i + 1}`}>Grade {i + 1}</option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Additional Message</label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  );

  const FacultyPage = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Our Faculty</h1>
      <p className="text-lg text-gray-700 mb-12 max-w-3xl">
        Our dedicated team of educators brings expertise, passion, and commitment to nurturing every student's potential. Meet some of our outstanding faculty members.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {faculty.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
            <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold text-blue-900 mb-1">{member.name}</h3>
              <p className="text-sm text-blue-600 font-semibold mb-2">{member.position}</p>
              <p className="text-gray-700 mb-2">{member.subject}</p>
              <p className="text-sm text-gray-500">{member.qualification}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Join Our Team</h2>
        <p className="text-gray-700 mb-4">
          Allegiance Academy is always looking for passionate educators who share our vision of excellence in education. We offer competitive compensation, professional development opportunities, and a supportive work environment.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          View Career Opportunities
        </button>
      </div>
    </div>
  );

  const GalleryPage = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Gallery</h1>
      <p className="text-lg text-gray-700 mb-8">
        Explore life at Allegiance Academy through our photo gallery showcasing academic excellence, sports achievements, cultural events, and daily campus activities.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {gallery.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition cursor-pointer">
            <img 
              src={image} 
              alt={`Gallery ${index + 1}`} 
              className="w-full h-64 object-cover hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Photo Albums</h3>
          <ul className="space-y-3">
            <li className="flex justify-between items-center">
              <span className="text-gray-700">Annual Sports Day 2024</span>
              <button className="text-blue-600 hover:text-blue-800">View →</button>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700">Science Fair Highlights</span>
              <button className="text-blue-600 hover:text-blue-800">View →</button>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700">Cultural Festival 2024</span>
              <button className="text-blue-600 hover:text-blue-800">View →</button>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700">Campus Infrastructure</span>
              <button className="text-blue-600 hover:text-blue-800">View →</button>
            </li>
          </ul>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Video Gallery</h3>
          <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
              </div>
              <p className="text-gray-600">Campus Tour Video</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm">
            Take a virtual tour of our state-of-the-art campus and see what makes Allegiance Academy special.
          </p>
        </div>
      </div>
    </div>
  );

  const NewsPage = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">News & Events</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {newsEvents.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <span className="text-gray-500 text-sm flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {item.date}
                </span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-4">{item.excerpt}</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                Read More <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-orange-900 mb-4">Upcoming Events</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow flex items-start space-x-4">
            <div className="bg-blue-600 text-white p-3 rounded-lg text-center min-w-16">
              <div className="text-2xl font-bold">15</div>
              <div className="text-xs">MAR</div>
            </div>
            <div>
              <h4 className="font-bold text-lg">Parent-Teacher Meeting</h4>
              <p className="text-gray-600">Discuss your child's progress with teachers</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-start space-x-4">
            <div className="bg-green-600 text-white p-3 rounded-lg text-center min-w-16">
              <div className="text-2xl font-bold">22</div>
              <div className="text-xs">MAR</div>
            </div>
            <div>
              <h4 className="font-bold text-lg">Inter-School Quiz Competition</h4>
              <p className="text-gray-600">Our team competes at the regional level</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Get in Touch</h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-700">123 Education Boulevard, Knowledge Park<br />Metropolitan City, State 12345</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-700">+1 (555) 123-4567<br />+1 (555) 123-4568</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-700">info@allegianceacademy.edu<br />admissions@allegianceacademy.edu</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Office Hours</h3>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Monday - Friday:</span> 8:00 AM - 4:00 PM</p>
              <p><span className="font-semibold">Saturday:</span> 9:00 AM - 1:00 PM</p>
              <p><span className="font-semibold">Sunday:</span> Closed</p>
            </div>
          </div>
        </div>

        {/* Netlify Form: contact */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <h2 className="text-2xl font-bold text-blue-900 mb-6">Send us a Message</h2>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name *</label>
            <input
              name="name"
              type="text"
              required
              value={contactForm.name}
              onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email *</label>
            <input
              name="email"
              type="email"
              required
              value={contactForm.email}
              onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
            <input
              name="subject"
              type="text"
              required
              value={contactForm.subject}
              onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Message *</label>
            <textarea
              name="message"
              required
              rows={5}
              value={contactForm.message}
              onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="bg-gray-200 rounded-lg overflow-hidden h-96 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Interactive Map Location</p>
          <p className="text-sm text-gray-500 mt-2">123 Education Boulevard, Knowledge Park</p>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="w-8 h-8" />
              <h3 className="text-xl font-bold">Allegiance Academy</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Excellence in Education. Nurturing Minds, Building Futures.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-white">About Us</button></li>
              <li><button onClick={() => setCurrentPage('academics')} className="hover:text-white">Academics</button></li>
              <li><button onClick={() => setCurrentPage('admissions')} className="hover:text-white">Admissions</button></li>
              <li><button onClick={() => setCurrentPage('faculty')} className="hover:text-white">Faculty</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Parent Portal</a></li>
              <li><a href="#" className="hover:text-white">Student Portal</a></li>
              <li><a href="#" className="hover:text-white">Library</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <p className="text-gray-400 text-sm mb-3">
              Stay updated with latest news and events
            </p>
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700">
                f
              </div>
              <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500">
                t
              </div>
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700">
                y
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Allegiance Academy. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'academics': return <AcademicsPage />;
      case 'admissions': return <AdmissionsPage />;
      case 'faculty': return <FacultyPage />;
      case 'gallery': return <GalleryPage />;
      case 'news': return <NewsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default AllegianceAcademy;


